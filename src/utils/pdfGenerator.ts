import { jsPDF } from 'jspdf';
import { Product, Category } from '../types';

/**
 * Utility to convert an image URL to Base64 with CORS support.
 * Falls back to null if the image fails to load.
 */
export async function loadImageAsBase64(url: string): Promise<string | null> {
  return new Promise((resolve) => {
    // Basic validation
    if (!url) {
      resolve(null);
      return;
    }

    const img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          // Compress slightly to prevent giant PDF sizes
          const dataURL = canvas.toDataURL('image/jpeg', 0.75);
          resolve(dataURL);
        } else {
          resolve(null);
        }
      } catch (e) {
        console.warn('Canvas conversion failed for URL:', url, e);
        resolve(null);
      }
    };

    img.onerror = () => {
      console.warn('Failed to load image for PDF:', url);
      resolve(null);
    };

    img.src = url;
  });
}

interface GeneratePdfParams {
  selectedCategories: string[];
  products: Product[];
  categories: Category[];
  cachedImages: Record<string, string | null>;
  onProgress?: (progress: number, message: string) => void;
}

export async function generateCatalogPdf({
  selectedCategories,
  products,
  categories,
  cachedImages,
  onProgress,
}: GeneratePdfParams): Promise<void> {
  onProgress?.(5, 'Iniciando diseño del catálogo...');

  // Create A4 PDF (Portrait, mm, 210 x 297)
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageW = 210;
  const pageH = 297;
  const brandFuchsia = '#c90253';
  const brandDark = '#050505';
  const brandGray = '#131313';
  const brandSilver = '#c9c6c5';
  const white = '#ffffff';

  // Helper: Draw standard page template with dark background and fuchsia borders
  const drawPageTemplate = (pageNum: number, totalPages?: number) => {
    // Fill background
    doc.setFillColor(brandDark);
    doc.rect(0, 0, pageW, pageH, 'F');

    // Draw thin elegant fuchsia border
    doc.setDrawColor(brandFuchsia);
    doc.setLineWidth(0.4);
    doc.rect(8, 8, pageW - 16, pageH - 16, 'S');

    // Inner subtle border
    doc.setDrawColor('#221218');
    doc.setLineWidth(0.15);
    doc.rect(9.5, 9.5, pageW - 19, pageH - 19, 'S');

    // Header (skip for cover)
    if (pageNum > 1) {
      doc.setFont('times', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(brandFuchsia);
      doc.text('FRUTO PROHIBIDO', 15, 15);
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(brandSilver);
      doc.text('ALTA SELECCIÓN ÍNTIMA', pageW - 15, 15, { align: 'right' });

      // Subtle top divider
      doc.setDrawColor('#331622');
      doc.setLineWidth(0.2);
      doc.line(15, 17, pageW - 15, 17);
    }

    // Footer
    if (pageNum > 1) {
      // Subtle bottom divider
      doc.setDrawColor('#331622');
      doc.setLineWidth(0.2);
      doc.line(15, pageH - 16, pageW - 15, pageH - 16);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(brandSilver);
      doc.text('Asesoría & Pedidos WhatsApp: +56 9 7377 0617', 15, pageH - 11);
      
      const pageStr = totalPages ? `${pageNum} de ${totalPages}` : `${pageNum}`;
      doc.text(`Pág. ${pageStr}`, pageW - 15, pageH - 11, { align: 'right' });
    }
  };

  // Helper: Draw fallback elegant image placeholder if base64 is missing
  const drawImagePlaceholder = (x: number, y: number, w: number, h: number, name: string) => {
    // Draw burgundy gradient box
    doc.setFillColor('#40011a');
    doc.rect(x, y, w, h, 'F');
    
    // Fuchsia inner frame
    doc.setDrawColor(brandFuchsia);
    doc.setLineWidth(0.3);
    doc.rect(x + 1, y + 1, w - 2, h - 2, 'S');

    // Text in center
    doc.setFont('times', 'italic');
    doc.setFontSize(9);
    doc.setTextColor(white);
    doc.text('Fruto Prohibido', x + w / 2, y + h / 2 - 2, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(brandSilver);
    
    // Crop name if too long
    const shortName = name.length > 18 ? name.substring(0, 16) + '...' : name;
    doc.text(shortName, x + w / 2, y + h / 2 + 3, { align: 'center' });
  };

  // ----------------------------------------------------
  // PAGE 1: COVER PAGE (PORTADA)
  // ----------------------------------------------------
  onProgress?.(15, 'Diseñando portada...');
  drawPageTemplate(1);

  // Decorative vector element (fuchsia diamond)
  doc.setDrawColor(brandFuchsia);
  doc.setLineWidth(0.5);
  doc.line(105, 45, 105, 52);

  // Category Tag-like label
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(brandFuchsia);
  doc.text('ALTA SELECCIÓN ÍNTIMA', 105, 62, { align: 'center', charSpace: 3 });

  // Main Title
  doc.setFont('times', 'bold');
  doc.setFontSize(38);
  doc.setTextColor(white);
  doc.text('FRUTO PROHIBIDO', 105, 82, { align: 'center' });

  // Subtitle
  doc.setFont('helvetica', 'light');
  doc.setFontSize(9);
  doc.setTextColor(brandSilver);
  doc.text('CATÁLOGO DE BIENESTAR Y SEDUCCIÓN', 105, 92, { align: 'center', charSpace: 2 });

  // Divider Line
  doc.setDrawColor(brandFuchsia);
  doc.setLineWidth(0.7);
  doc.line(75, 110, 135, 110);

  // Large center quote / tagline
  doc.setFont('times', 'italic');
  doc.setFontSize(26);
  doc.setTextColor(white);
  doc.text('La elegancia del placer', 105, 138, { align: 'center' });

  // Philosophy brief description
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor('#a29f9e');
  
  const introPara = 'Una cuidada colección diseñada para quienes valoran la discreción, el arte, la alta calidad y el bienestar íntimo. Descubre el placer premium en un entorno de absoluta confianza.';
  const introLines = doc.splitTextToSize(introPara, 130);
  let introY = 152;
  introLines.forEach((line: string) => {
    doc.text(line, 105, introY, { align: 'center' });
    introY += 5;
  });

  // Bottom graphics
  doc.setDrawColor('#221218');
  doc.setLineWidth(0.3);
  doc.circle(105, 210, 12, 'S');
  doc.setDrawColor(brandFuchsia);
  doc.circle(105, 210, 4, 'F');

  // Bottom cover text
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(brandSilver);
  doc.text('EDICIÓN 2026', 105, 250, { align: 'center', charSpace: 4 });
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor('#706e6d');
  doc.text('COMPRA SEGURA Y DISCRETA', 105, 258, { align: 'center', charSpace: 1.5 });
  doc.text('SANTIAGO, CHILE • ASISTENCIA PERSONALIZADA', 105, 263, { align: 'center', charSpace: 1 });

  // ----------------------------------------------------
  // PAGE 2: PHILOSOPHY & INDEX (NUESTRA FILOSOFÍA)
  // ----------------------------------------------------
  onProgress?.(30, 'Creando índice de colecciones...');
  doc.addPage();
  drawPageTemplate(2);

  // Welcome section
  doc.setFont('times', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(white);
  doc.text('Nuestra Filosofía', 20, 32);

  doc.setDrawColor(brandFuchsia);
  doc.setLineWidth(0.5);
  doc.line(20, 36, 65, 36);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor('#bfbcbb');
  
  const philoText = 'En Fruto Prohibido seleccionamos cuidadosamente cada pieza para asegurar que cumpla con los más altos estándares de diseño, higiene y materiales biocompatibles. Creemos firmemente que la intimidad es un espacio sagrado de autodescubrimiento y complicidad. Por ello, te garantizamos asesoría totalmente personalizada y envíos bajo la más estricta reserva, en empaques neutros y sin identificación externa.';
  const philoLines = doc.splitTextToSize(philoText, 170);
  let philoY = 46;
  philoLines.forEach((line: string) => {
    doc.text(line, 20, philoY);
    philoY += 6;
  });

  // Table of Contents
  doc.setFont('times', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(white);
  doc.text('Índice de Colecciones', 20, 105);

  doc.setDrawColor('#331622');
  doc.setLineWidth(0.3);
  doc.line(20, 109, 190, 109);

  // Filter products by selected categories
  const categoriesToRender = categories.filter((c) => selectedCategories.includes(c.id));
  
  let tocY = 120;
  let pageCounter = 3; // Products start on Page 3

  categoriesToRender.forEach((cat) => {
    // Count how many products in this category
    const catProducts = products.filter((p) => p.category === cat.id);
    if (catProducts.length === 0) return;

    doc.setFont('times', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(white);
    doc.text(cat.name, 20, tocY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(brandSilver);
    doc.text(`${catProducts.length} artículo${catProducts.length > 1 ? 's' : ''}`, 65, tocY);

    // Draw dots
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor('#444444');
    let dotStr = '';
    for (let i = 0; i < 48; i++) dotStr += '.';
    doc.text(dotStr, 95, tocY);

    doc.setFont('times', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(brandFuchsia);
    doc.text(`Pág. ${pageCounter}`, 180, tocY, { align: 'right' });

    // Calculate how many pages this category needs (2 products per page)
    const pagesNeeded = Math.ceil(catProducts.length / 2);
    pageCounter += pagesNeeded;

    tocY += 12;
  });

  // Discretion guarantee note
  doc.setFillColor(brandGray);
  doc.rect(20, 210, 170, 42, 'F');
  
  doc.setDrawColor('#2a101b');
  doc.setLineWidth(0.4);
  doc.rect(20, 210, 170, 42, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(brandFuchsia);
  doc.text('GARANTÍA DE PRIVACIDAD ABSOLUTA', 25, 220);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor('#a29f9e');
  const privacyNote = 'Todos nuestros despachos se entregan en envoltorios 100% discretos y opacos, sin marcas, logos ni referencias al contenido. El remitente y el cargo de pago se registran de forma totalmente neutra.';
  const privacyNoteLines = doc.splitTextToSize(privacyNote, 160);
  let pY = 227;
  privacyNoteLines.forEach((line: string) => {
    doc.text(line, 25, pY);
    pY += 4.5;
  });

  // ----------------------------------------------------
  // PRODUCT PAGES GENERATION
  // ----------------------------------------------------
  let currentPage = 3;

  // Let's first pre-calculate the total number of pages to display the "X de Y" format correctly.
  let totalProductPages = 0;
  categoriesToRender.forEach((cat) => {
    const catProducts = products.filter((p) => p.category === cat.id);
    totalProductPages += Math.ceil(catProducts.length / 2);
  });
  const grandTotalPages = 2 + totalProductPages; // Portada (1) + Indice (2) + Product pages

  let overallIndex = 0;
  const totalProductsToRender = products.filter(p => selectedCategories.includes(p.category)).length;

  for (const cat of categoriesToRender) {
    const catProducts = products.filter((p) => p.category === cat.id);
    if (catProducts.length === 0) continue;

    // Loop through products in blocks of 2
    for (let i = 0; i < catProducts.length; i += 2) {
      doc.addPage();
      drawPageTemplate(currentPage, grandTotalPages);

      // Render Category Title in the page body
      doc.setFont('times', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(brandFuchsia);
      doc.text(`COLECCIÓN • ${cat.name.toUpperCase()}`, 15, 24, { charSpace: 1.5 });

      // Subtle category section divider
      doc.setDrawColor('#441228');
      doc.setLineWidth(0.4);
      doc.line(15, 27, pageW - 15, 27);

      // Render up to 2 products on this page
      const pageProducts = catProducts.slice(i, i + 2);

      pageProducts.forEach((prod, index) => {
        overallIndex++;
        onProgress?.(
          30 + Math.floor((overallIndex / totalProductsToRender) * 65),
          `Diseñando ${prod.name}...`
        );

        const cardY = index === 0 ? 34 : 148;
        const cardH = 102;
        const cardW = pageW - 30; // 180

        // Draw elegant product card background block
        doc.setFillColor(brandGray);
        doc.rect(15, cardY, cardW, cardH, 'F');

        // Draw subtle border around the card
        doc.setDrawColor('#222223');
        doc.setLineWidth(0.25);
        doc.rect(15, cardY, cardW, cardH, 'S');

        // 1. Image Block
        const imgX = 20;
        const imgY = cardY + 6;
        const imgW = 46;
        const imgH = 46;

        const base64 = cachedImages[prod.id];
        if (base64) {
          try {
            doc.addImage(base64, 'JPEG', imgX, imgY, imgW, imgH);
          } catch (err) {
            console.error('Error adding image to doc:', prod.name, err);
            drawImagePlaceholder(imgX, imgY, imgW, imgH, prod.name);
          }
        } else {
          drawImagePlaceholder(imgX, imgY, imgW, imgH, prod.name);
        }

        // Image frame border
        doc.setDrawColor('#333334');
        doc.setLineWidth(0.3);
        doc.rect(imgX, imgY, imgW, imgH, 'S');

        // Small QR code / Link placeholder box on the left, below image
        const infoBoxY = imgY + imgH + 4;
        doc.setFillColor('#1b1b1c');
        doc.rect(imgX, infoBoxY, imgW, 36, 'F');
        doc.setDrawColor('#30121d');
        doc.rect(imgX, infoBoxY, imgW, 36, 'S');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(6.5);
        doc.setTextColor(brandFuchsia);
        doc.text('¿CÓMO ADQUIRIR?', imgX + 5, infoBoxY + 7);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(6);
        doc.setTextColor('#bfbcbb');
        doc.text('Escríbenos por WhatsApp', imgX + 5, infoBoxY + 12);
        doc.text('indicando el nombre del', imgX + 5, infoBoxY + 16);
        doc.text('producto o envíanos una', imgX + 5, infoBoxY + 20);
        doc.text('captura de esta página.', imgX + 5, infoBoxY + 24);

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(6.5);
        doc.setTextColor(white);
        doc.text('+56 9 7377 0617', imgX + 5, infoBoxY + 31);

        // 2. Text Details Block (on the right)
        const textX = imgX + imgW + 6; // 72
        const textW = cardW - imgW - 12; // 122

        // Title
        doc.setFont('times', 'bold');
        doc.setFontSize(16);
        doc.setTextColor(white);
        doc.text(prod.name.toUpperCase(), textX, cardY + 12);

        // Badge (if exists)
        let badgeWidth = 0;
        if (prod.badge) {
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(7);
          const badgeText = prod.badge;
          const textWidth = doc.getTextWidth(badgeText);
          
          doc.setFillColor(brandFuchsia);
          doc.rect(textX, cardY + 16, textWidth + 4, 4, 'F');
          
          doc.setTextColor(white);
          doc.text(badgeText, textX + 2, cardY + 19.2);
          badgeWidth = textWidth + 8;
        }

        // Price
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.setTextColor(brandFuchsia);
        const priceStr = `$${prod.price.toFixed(2)} USD`;
        doc.text(priceStr, textX + badgeWidth, cardY + 19.5);

        // Main Description
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.2);
        doc.setTextColor('#a29f9e');
        
        const descLines = doc.splitTextToSize(prod.description, textW);
        let descY = cardY + 26;
        descLines.slice(0, 4).forEach((line: string) => {
          doc.text(line, textX, descY);
          descY += 4.2;
        });

        // Specs block
        const specYStart = cardY + 45;
        doc.setDrawColor('#2d2d2f');
        doc.setLineWidth(0.2);
        doc.line(textX, specYStart, textX + textW, specYStart);

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7.5);
        doc.setTextColor(white);
        doc.text('Especificaciones de Calidad:', textX, specYStart + 5);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.5);
        doc.setTextColor('#bfbcbb');
        
        let specY = specYStart + 10;
        
        // Material
        const materialText = `• Material: ${prod.details.material}`;
        const matLines = doc.splitTextToSize(materialText, textW);
        matLines.slice(0, 1).forEach((line: string) => {
          doc.text(line, textX, specY);
          specY += 4;
        });

        // Dimensions or Rechargeable
        if (prod.details.dimensions) {
          doc.text(`• Dimensiones: ${prod.details.dimensions}`, textX, specY);
          specY += 4;
        } else if (prod.details.rechargeable) {
          doc.text(`• Carga: ${prod.details.rechargeable}`, textX, specY);
          specY += 4;
        }

        // Features (bullet list - 2 key features)
        if (prod.details.features && prod.details.features.length > 0) {
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(brandFuchsia);
          doc.text('Características Clave:', textX, specY + 2);
          doc.setFont('helvetica', 'normal');
          doc.setTextColor('#bfbcbb');
          
          let featY = specY + 6;
          prod.details.features.slice(0, 2).forEach((feat) => {
            const featText = `  • ${feat}`;
            const featLines = doc.splitTextToSize(featText, textW);
            featLines.slice(0, 1).forEach((line: string) => {
              doc.text(line, textX, featY);
              featY += 4;
            });
          });
        }
      });

      currentPage++;
    }
  }

  // ----------------------------------------------------
  // SAVING THE PDF
  // ----------------------------------------------------
  onProgress?.(98, 'Finalizando PDF...');
  
  // Save Document
  const filename = `catalogo-fruto-prohibido-${new Date().toISOString().slice(0,10)}.pdf`;
  doc.save(filename);
  
  onProgress?.(100, '¡Descarga completada!');
}

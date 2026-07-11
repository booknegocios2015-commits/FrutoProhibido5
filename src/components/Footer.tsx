import React from 'react';
import { Instagram, Facebook, ArrowUp, FileDown } from 'lucide-react';
import logoImg from '../assets/images/fruto_prohibido_logo_1783471370385.jpg';

interface FooterProps {
  onSelectCategory: (category: string) => void;
  onWhatsAppClick: () => void;
  onCatalogClick: () => void;
}

export default function Footer({ onSelectCategory, onWhatsAppClick, onCatalogClick }: FooterProps) {
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer-section" className="relative w-full bg-brand-dark-dim border-t border-brand-outline/20 py-16">
      <div className="mx-auto max-w-7xl px-6 flex flex-col space-y-12">
        
        {/* Upper Row: Main Footer content */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-brand-silver/5">
          
          {/* Brand Col */}
          <div className="flex items-center space-x-3.5">
            {/* Real Logo Image matching exactly the attached design */}
            <img 
              src={logoImg} 
              alt="Fruto Prohibido Logo" 
              className="h-12 w-12 flex-shrink-0 rounded-full object-cover border border-brand-fuchsia/20 shadow-[0_0_15px_rgba(201,2,83,0.3)]"
              referrerPolicy="no-referrer"
            />

            <div className="space-y-1">
              <h2 className="font-serif text-xl tracking-[0.25em] text-white uppercase leading-tight">
                FRUTO PROHIBIDO
              </h2>
              <p className="text-[10px] text-brand-silver/50 tracking-widest uppercase font-light">
                2026 fruto prohibido una empresa de MantyTech SPA
              </p>
            </div>
          </div>

          {/* Links Row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] tracking-wider uppercase font-medium">
            <button
              onClick={onCatalogClick}
              className="text-brand-fuchsia hover:text-white font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <FileDown className="h-3.5 w-3.5" />
              Descargar Catálogo PDF
            </button>
            <span className="text-brand-silver/20 hidden sm:inline">|</span>
            <a
              href="#privacy"
              onClick={(e) => e.preventDefault()}
              className="text-brand-silver/75 hover:text-white transition-colors"
            >
              Política de Privacidad
            </a>
            <span className="text-brand-silver/20 hidden sm:inline">|</span>
            <a
              href="#terms"
              onClick={(e) => e.preventDefault()}
              className="text-brand-silver/75 hover:text-white transition-colors"
            >
              Términos de Servicio
            </a>
          </div>

          {/* Social Icons Col */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/frutoprohibido_sexshop"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-brand-outline/20 text-brand-silver hover:text-brand-fuchsia hover:border-brand-fuchsia transition-all"
              aria-label="Síguenos en Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/sfrutoprohibido"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-brand-outline/20 text-brand-silver hover:text-brand-fuchsia hover:border-brand-fuchsia transition-all"
              aria-label="Síguenos en Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>

        </div>

        {/* Lower Row: Fine print / Scroll to Top */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-[10px] text-brand-silver/40 tracking-widest leading-relaxed">
          <p className="max-w-xl">
            Toda la información y compras procesadas son encriptadas con protocolos de seguridad bancaria SSL de 256 bits. Los despachos se realizan en un plazo de 24 horas hábiles en embalaje neutro e insonorizado.
          </p>
          
          <button
            id="btn-scroll-to-top"
            onClick={handleScrollToTop}
            className="flex items-center gap-2 text-brand-silver/50 hover:text-white transition-colors cursor-pointer group"
          >
            <span className="uppercase">Volver Arriba</span>
            <ArrowUp className="h-3.5 w-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}

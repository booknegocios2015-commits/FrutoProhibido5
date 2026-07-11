import { Product, Category, Testimonial, FAQItem } from '../types';

import lenceriaImg from '../assets/images/lenceria_category_1783387487521.jpg';
import feromonasImg from '../assets/images/feromonas_category_1783388473479.jpg';
import lubricantesImg from '../assets/images/lubricantes_category_1783388482601.jpg';
import juguetesImg from '../assets/images/juguetes_category_1783388489796.jpg';
import accesoriosImg from '../assets/images/accesorios_category_1783388498545.jpg';
import juegosImg from '../assets/images/juegos_category_1783388505900.jpg';

export const CATEGORIES: Category[] = [
  {
    id: 'lenceria',
    name: 'Lencería',
    description: 'Encaje francés, sedas italianas y siluetas diseñadas para empoderar la sensualidad.',
    image: lenceriaImg,
  },
  {
    id: 'feromonas',
    name: 'Feromonas',
    description: 'Fragancias magnéticas formuladas con esencias concentradas de alta fijación.',
    image: feromonasImg,
  },
  {
    id: 'lubricantes',
    name: 'Lubricantes',
    description: 'Fórmulas premium a base de agua y silicona orgánica para una suavidad inigualable.',
    image: lubricantesImg,
  },
  {
    id: 'juguetes',
    name: 'Juguetes',
    description: 'Dispositivos de bienestar íntimo con ingeniería de alta gama, silenciosos y de tacto suave.',
    image: juguetesImg,
  },
  {
    id: 'accesorios',
    name: 'Accesorios',
    description: 'Piezas de cuero genuino, antifaces de seda y detalles de bondage de alta costura.',
    image: accesoriosImg,
  },
  {
    id: 'juegos',
    name: 'Juegos',
    description: 'Cartas, dados y retos diseñados para encender la chispa y explorar nuevas fantasías en pareja.',
    image: juegosImg,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'extasis-minimal',
    name: 'Éxtasis Minimal',
    price: 129.00,
    category: 'juguetes',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    badge: 'NEW ARRIVAL',
    description: 'Estimulador de bienestar íntimo de alta gama. Su diseño esculpido y minimalista oculta un potente motor de impulsos subsónicos silenciosos para una estimulación sin contacto directa, cuidando la delicadeza de tu piel.',
    details: {
      material: 'Silicona de grado médico hipoalergénica con acabado Velvet Touch.',
      dimensions: '11.5 cm de longitud x 4.2 cm de diámetro.',
      features: [
        'Tecnología de ondas de aire subsónicas.',
        '10 patrones de frecuencia e intensidad ajustables.',
        'Motor ultra-silencioso de menos de 35dB.',
        'Certificación de resistencia al agua IPX7 (sumergible).'
      ],
      waterproof: 'IPX7 (Totalmente sumergible hasta 1 metro de profundidad).',
      rechargeable: 'Magnético por USB (Batería de larga duración, hasta 2 horas de uso continuo).',
      careInstructions: 'Lavar con agua tibia y jabón neutro o limpiador especializado antes y después de cada uso. Guardar en su empaque discreto original.',
    }
  },
  {
    id: 'velvet-bondage-set',
    name: 'Velvet Bondage Set',
    price: 85.00,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=800',
    description: 'Un set introductorio elegante y refinado. Compuesto por muñequeras y tobilleras ajustables de cuero vegano premium con un forro interior ultra suave de terciopelo fucsia para evitar rozaduras. Equipado con herrajes de acero inoxidable negro mate.',
    details: {
      material: 'Cuero sintético ecológico de alta densidad con forro interior de terciopelo.',
      dimensions: 'Ajustable para muñecas y tobillos estándar.',
      features: [
        'Costuras reforzadas de alta costura.',
        'Mosquetones de liberación rápida de acero inoxidable.',
        'Acabado suave y seguro para la piel.',
        'Presentación en caja negra de seda con listón.'
      ],
      careInstructions: 'Limpiar con un paño ligeramente húmedo. No sumergir en agua. Secar bien antes de guardar.',
    }
  },
  {
    id: 'trilogia-sensorial',
    name: 'Trilogía Sensorial',
    price: 45.00,
    category: 'juegos',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800',
    badge: 'LIMITED',
    description: 'Set exclusivo de tres aceites esenciales e íntimos premium diseñados para la aromaterapia y el masaje sensorial. Formulados con elixires botánicos de flores raras, jazmín, sándalo y pachulí para relajar el sistema nervioso y despertar los sentidos.',
    details: {
      material: 'Aceites 100% orgánicos de origen vegetal con extractos botánicos de grado terapéutico.',
      dimensions: 'Tres botellas de vidrio ámbar de 30ml cada una con gotero de precisión.',
      features: [
        'Aromas: Deseo Salvaje (Jazmín y Sándalo), Paz Sagrada (Lavanda y Vainilla), Fuego Interno (Canela e Ylang Ylang).',
        'Textura sedosa no grasosa de absorción lenta perfecta para masajes de larga duración.',
        'Libre de parabenos, fragancias artificiales y aceites minerales.',
        'Seguro para pieles sensibles.'
      ],
      careInstructions: 'Mantener en un lugar fresco, seco y protegido de la luz solar directa. Cerrar bien la tapa después de usar.',
    }
  },
  {
    id: 'antifaz-seda-noir',
    name: 'Antifaz de Seda Noir',
    price: 32.00,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1582142407894-ec85a1268a4e?auto=format&fit=crop&q=80&w=800',
    description: 'Aísla la vista para elevar la percepción de los demás sentidos. Este antifaz de seda de morera y encaje francés cuenta con un acolchado ligero de algodón orgánico que proporciona un confort supremo y un bloqueo de luz total.',
    details: {
      material: '100% Seda de Morera pura de 22 Momme, con detalles de encaje francés de algodón.',
      dimensions: 'Ancho de 21 cm, banda elástica ajustable forrada en seda.',
      features: [
        'Hipoalergénico y transpirable.',
        'Bloqueo total de luz gracias a su contorno ergonómico.',
        'Banda elástica elástica suave que no tira del cabello.',
        'Incluye una bolsa de viaje discreta en satén negro.'
      ],
      careInstructions: 'Lavar a mano únicamente con agua fría y jabón suave. Secar al aire libre en la sombra.',
    }
  },
  {
    id: 'elixir-atraccion-sublime',
    name: 'Elixir de Atracción',
    price: 78.00,
    category: 'feromonas',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800',
    badge: 'BEST SELLER',
    description: 'Fragancia premium formulada científicamente con feromonas activas e infundida con notas sensuales de bergamota, orquídea negra y ámbar. Diseñada para mezclarse con el pH natural de la piel y proyectar una presencia magnética irresistible.',
    details: {
      material: 'Alcohol desnaturalizado premium, esencia perfumada concentrada, feromonas sintetizadas.',
      dimensions: 'Frasco de vidrio esmerilado de 50ml con atomizador metálico.',
      features: [
        'Fijación extrema de hasta 12 horas en piel.',
        'Estudios clínicos confirman un aumento en la respuesta de atracción visual.',
        'Presentación refinada con tapa magnética táctil.',
        'Apto para uso diario o eventos especiales.'
      ],
      careInstructions: 'Aplicar en puntos de pulso (muñecas, detrás de las orejas, cuello). No aplicar cerca de los ojos o piel irritada.',
    }
  },
  {
    id: 'body-dentelle-noir',
    name: 'Body Dentelle Noir',
    price: 95.00,
    category: 'lenceria',
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800',
    badge: 'NEW ARRIVAL',
    description: 'Body de encaje francés con cortes geométricos de alta costura que acentúan y enmarcan la silueta con elegancia. Cuenta con tirantes finos ajustables en la espalda y un escote profundo en V profunda.',
    details: {
      material: '85% Nylon de encaje elástico francés, 15% Elastano, refuerzo interior de algodón 100%.',
      dimensions: 'Disponible en tallas S, M, L con tirantes ajustables multiposición.',
      features: [
        'Patrón floral de encaje exclusivo hecho en telar tradicional.',
        'Cierre inferior con broche discreto de tres niveles.',
        'Ajuste ergonómico que moldea suavemente sin oprimir.',
        'Transparencias colocadas artísticamente para una silueta seductora.'
      ],
      careInstructions: 'Lavar a mano con agua tibia y jabón suave. Usar bolsa de lavado si se lava a máquina en ciclo ultra-delicado. No secar en secadora.',
    }
  },
  {
    id: 'gel-seda-organico',
    name: 'Gel de Seda Orgánico',
    price: 35.00,
    category: 'lubricantes',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800',
    description: 'Un lubricante de primera clase que imita la lubricación natural del cuerpo con un tacto aterciopelado. Formulado a base de agua purificada con extractos de aloe vera orgánico y algas marinas. PH equilibrado para respetar la zona íntima.',
    details: {
      material: 'Agua ionizada, extracto de Aloe Barbadensis, Carragenina orgánica, Ácido láctico.',
      dimensions: 'Botella dispensadora tipo "airless" de 120ml para higiene óptima y cero desperdicio.',
      features: [
        'Totalmente compatible con látex and juguetes de silicona.',
        'Fórmula soluble en agua, fácil de limpiar con agua, no mancha sábanas.',
        'Libre de glicerina, aceites, fragancias sintéticas y parabenos.',
        'Certificación dermatológica e hipoalergénica.'
      ],
      careInstructions: 'Mantener a temperatura ambiente. Usar la cantidad deseada. Consumir dentro de los 12 meses después de abierto.',
    }
  },
  {
    id: 'vela-soya-afrodita',
    name: 'Vela de Soya Afrodita',
    price: 38.00,
    category: 'juegos',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800',
    description: 'Transforma el ambiente con una luz cálida y un aroma hipnótico. Al derretirse, la cera de soya de baja temperatura de fusión se convierte en un tibio y untuoso aceite de masaje hidratante, infundido con vainilla de Madagascar y canela.',
    details: {
      material: 'Cera de soya 100% biodegradable de bajo punto de fusión, aceite de almendras dulces, manteca de karité aromática.',
      dimensions: 'Vaso de cerámica negra mate texturizada de 200g. Hasta 45 horas de encendido.',
      features: [
        'Pabilo de madera de cerezo que emite un sutil crujido relajante al arder.',
        'La cera derretida es segura para verter directamente en la piel (temperatura agradable de 38°C).',
        'Ingredientes altamente humectantes y ricos en vitamina E.',
        'Sin parafinas ni toxinas derivadas del petróleo.'
      ],
      careInstructions: 'Encender durante al menos 20 minutos para que se forme una piscina de aceite. Apagar la llama antes de verter el aceite en la mano o piel para masaje.',
    }
  },
  {
    id: 'tabu-intimo',
    name: 'Tabú Íntimo - Cartas de Deseo',
    price: 32.00,
    category: 'juegos',
    image: juegosImg,
    description: 'Un sofisticado juego de mesa íntimo con elegantes cartas táctiles de acabados dorados. Contiene 120 dinámicas y retos sensuales clasificados por niveles de intensidad, diseñados para abrir el diálogo, fortalecer la complicidad y romper el hielo en pareja.',
    details: {
      material: 'Cartas premium texturizadas de 350g con relieves dorados y laca protectora.',
      dimensions: 'Caja rígida negra mate de 12cm x 9cm x 4cm.',
      features: [
        '120 cartas de preguntas, fantasías y desafíos sensuales progresivos.',
        'Reglas de juego flexibles para adaptarse a la comodidad de la pareja.',
        'Diseño sumamente estético y discreto para guardar en cualquier lugar.',
        'Incluye un par de dados de resina negra translúcida con grabados en fuchsia.'
      ],
      careInstructions: 'Mantener fuera del alcance de la humedad extrema para preservar el acabado dorado.'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    text: '"La discreción es impecable. El empaque llegó sin ninguna señal de lo que había dentro, y la calidad del producto superó mis expectativas."',
    author: 'MARIA G.',
    stars: 5,
  },
  {
    id: 't2',
    text: '"Atención al cliente excepcional por WhatsApp. Me ayudaron a elegir exactamente lo que necesitaba con mucha elegancia."',
    author: 'ALEJANDRO R.',
    stars: 5,
  },
  {
    id: 't3',
    text: '"Piezas hermosas que se sienten como arte. Fruto Prohibido ha elevado completamente mi concepto de autocuidado."',
    author: 'SOFÍA L.',
    stars: 5,
  }
];

export const FAQS: FAQItem[] = [
  {
    question: '¿CÓMO ES EL EMPAQUE DE ENVÍO?',
    answer: 'Nuestros envíos son absolutamente discretos. Se realizan sin logos, marcas, ni referencias al contenido o a "Fruto Prohibido". El remitente se registra bajo un nombre corporativo genérico y neutral. Tu privacidad es nuestra absoluta prioridad.',
  },
  {
    question: '¿QUÉ MÉTODOS DE PAGO ACEPTAN?',
    answer: 'Aceptamos Mercado Pago, tarjetas de crédito y débito internacionales (Visa, Mastercard, American Express) a través de pasarelas encriptadas seguras. También admitimos transferencias bancarias directas, depósitos en efectivo en comercios locales y pagos contra entrega coordinados a través de WhatsApp.',
  },
  {
    question: '¿LOS PRODUCTOS TIENEN GARANTÍA?',
    answer: 'No, porque son de uso íntimo y cada producto se entrega funcionando.',
  },
  {
    question: '¿CÓMO FUNCIONA EL SERVICIO DE WHATSAPP?',
    answer: 'Es un servicio premium de asistencia personal. Al hacer clic en "Comprar por WhatsApp", te conectarás directamente de forma privada con una persona real del equipo. Te asesoramos sobre tallas, fragancias, el funcionamiento de dispositivos o coordinamos un pedido a medida de manera rápida y segura.',
  }
];

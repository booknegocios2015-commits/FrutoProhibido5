import React, { useState } from 'react';
import { MessageSquare, ArrowDown, FileDown } from 'lucide-react';
import { motion } from 'motion/react';
import AppleWatermark from './AppleWatermark';

interface HeroProps {
  onExploreClick: () => void;
  onWhatsAppClick: () => void;
  onCatalogClick: () => void;
}

export default function Hero({ onExploreClick, onWhatsAppClick, onCatalogClick }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section 
      id="hero-section" 
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden py-20 sm:py-28 md:py-32 transition-colors duration-500 bg-[#050505]"
      style={{
        background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(201, 2, 83, 0.15) 0%, rgba(21, 1, 9, 1) 40%, rgba(5, 5, 5, 1) 100%)`
      }}
    >
      
      {/* Premium ambient glows moving along with cursor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute rounded-full bg-brand-fuchsia/12 blur-[90px] transition-all duration-300"
          style={{
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            width: '320px',
            height: '320px',
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
        <div 
          className="absolute rounded-full bg-purple-900/10 blur-[80px] transition-all duration-500"
          style={{
            left: `${100 - mousePos.x}%`,
            top: `${100 - mousePos.y}%`,
            width: '240px',
            height: '240px',
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
      </div>
      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        
        {/* Subtle premium label */}
        <motion.p 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-5 text-[11px] font-bold tracking-[0.4em] text-brand-fuchsia uppercase"
        >
          SELECCIÓN ÍNTIMA
        </motion.p>

        {/* Playfair Display Title */}
        <motion.h2 
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
          className="font-serif text-4xl font-light leading-[1.25] text-white md:text-6xl lg:text-7xl tracking-tight"
        >
          Tu bienestar íntimo <br className="xs:hidden" />
          es <span className="font-semibold italic text-brand-fuchsia font-serif">amor propio</span>. <br />
          <span className="text-2xl sm:text-3xl md:text-4xl font-light text-brand-silver/90 tracking-wide block mt-4">Sin tabúes ni prejuicios</span>
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-sm sm:text-base leading-relaxed text-brand-silver/75 tracking-wide font-light"
        >
          Una selección exclusiva diseñada para quienes valoran la discreción, el arte y el bienestar íntimo. Descubre el placer en un entorno de absoluta confianza.
        </motion.p>

        {/* Call to Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5"
        >
          
          <button
            id="hero-btn-whatsapp"
            onClick={onWhatsAppClick}
            className="group flex w-full md:w-auto items-center justify-center gap-3 rounded-md bg-brand-fuchsia px-8 py-4.5 text-xs font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:bg-[#c90253] hover:scale-105 active:scale-95 shadow-lg shadow-brand-fuchsia/20 cursor-pointer"
          >
            <MessageSquare className="h-4 w-4" />
            Comprar por WhatsApp
          </button>

          <button
            id="hero-btn-catalog"
            onClick={onCatalogClick}
            className="group flex w-full md:w-auto items-center justify-center gap-2.5 rounded-md border border-brand-fuchsia/50 bg-brand-fuchsia/5 px-8 py-4.5 text-xs font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:border-brand-fuchsia hover:bg-brand-fuchsia/15 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <FileDown className="h-4 w-4 text-brand-fuchsia group-hover:scale-110 transition-transform" />
            Descargar Catálogo
          </button>

          <button
            id="hero-btn-explore"
            onClick={onExploreClick}
            className="flex w-full md:w-auto items-center justify-center rounded-md border border-brand-silver/30 bg-white/5 px-8 py-4.5 text-xs font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:border-brand-fuchsia hover:bg-white/10 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Ver Colecciones
          </button>
          
        </motion.div>

      </div>

      {/* Decorative Arrow Indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <button 
          id="btn-scroll-down"
          onClick={onExploreClick} 
          className="p-2 text-brand-silver/50 hover:text-white transition-colors"
          aria-label="Ir abajo"
        >
          <ArrowDown className="h-5 w-5" />
        </button>
      </div>

    </section>
  );
}

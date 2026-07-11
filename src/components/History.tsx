import React from 'react';
import { motion } from 'motion/react';
import AppleWatermark from './AppleWatermark';

export default function History() {
  const stats = [
    { value: '100%', label: 'DISCRETO' },
    { value: 'Premium', label: 'CALIDAD' },
    { value: '24/7', label: 'SOPORTE' },
  ];

  return (
    <section 
      id="history-section" 
      className="relative w-full py-24 lg:py-32 bg-gradient-to-r from-[#050505] via-[#150109] to-[#2e0210] border-t border-brand-fuchsia/10 overflow-hidden"
    >
      {/* Background Seamless Image container spanning the entire section to guarantee zero line divisions */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* The image is aligned to the right half on desktop, but takes full on mobile */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-1/2 h-full">
          <img
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1200"
            alt="Fruto Prohibido Sensual Care"
            className="w-full h-full object-cover object-center lg:object-right opacity-50 lg:opacity-85"
            referrerPolicy="no-referrer"
          />
          {/* Subtle inside red glow overlay to blend image colors with our brand burgundy */}
          <div className="absolute inset-0 bg-[#2e0210]/20 mix-blend-multiply"></div>
        </div>

        {/* The Magic Blend Overlays - perfectly feathered gradient transitions with original dark tones */}
        {/* 1. Desktop Left-to-Right Fade: This completely covers the left and fades out, dissolving the image's left edge seamlessly */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[65%] bg-gradient-to-r from-[#050505] via-[#150109] to-transparent z-10"></div>
        
        {/* 2. Soft Secondary Glow Overlay for extra smooth blending across the transition area */}
        <div className="absolute inset-y-0 left-[35%] right-0 bg-gradient-to-r from-[#150109]/90 via-transparent to-transparent z-10 hidden lg:block"></div>

        {/* 3. Mobile Top-to-Bottom Fade: ensuring great text contrast and smooth top/bottom entries */}
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#050505] via-transparent to-transparent z-10"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10"></div>
        
        {/* 4. Right Edge Vignette: keeping the edges elegant */}
        <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#2e0210]/60 to-transparent z-10"></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Text Content (takes 7 columns on desktop) */}
          <div id="history-text-container" className="flex flex-col space-y-6 lg:col-span-7">
            
            <div className="space-y-2 overflow-hidden">
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-[11px] font-semibold tracking-[0.3em] text-brand-fuchsia uppercase"
              >
                NUESTRA HISTORIA
              </motion.p>
              <motion.h3 
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                className="font-serif text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl leading-tight"
              >
                Selección de Excelencia
              </motion.h3>
            </div>

            <p className="text-sm leading-relaxed text-brand-silver/90 md:text-base font-light tracking-wide max-w-2xl drop-shadow-sm">
              Descubre una nueva forma de vivir el bienestar íntimo. Productos cuidadosamente seleccionados para brindarte placer, confianza y discreción. Compra con total seguridad y recibe tu pedido en un empaque completamente confidencial.
            </p>

            <blockquote className="border-l-2 border-brand-fuchsia pl-4 italic text-brand-silver/95 text-sm md:text-base">
              “Discreción, Calidad, Exclusividad.”
            </blockquote>

            {/* Stats columns */}
            <div id="history-stats-grid" className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-silver/10 mt-4 max-w-lg">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-left flex flex-col justify-center">
                  <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-brand-fuchsia block tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-silver/60 uppercase mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Empty spacer column for desktop layout to push text left and let the background blend show */}
          <div className="hidden lg:block lg:col-span-5"></div>

        </div>
      </div>
    </section>
  );
}

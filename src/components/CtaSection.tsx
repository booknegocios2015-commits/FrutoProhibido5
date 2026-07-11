import React from 'react';
import { MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import AppleWatermark from './AppleWatermark';

export default function CtaSection() {
  const handleWhatsAppClick = () => {
    const text = 'Hola Fruto Prohibido. Deseo recibir asesoría personalizada para descubrir nuevas experiencias y encontrar exactamente lo que busco con total confianza y discreción.';
    window.open(`https://wa.me/56973770617?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="discover-cta-section" className="py-24 bg-[#eed1d1] border-t border-[#2e0210]/15 relative overflow-hidden">
      
      {/* Rose apple watermark inside CtaSection */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <AppleWatermark size="750px" opacity={0.18} className="max-w-[95%]" />
      </div>

      {/* Premium ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-fuchsia/5 blur-[140px] pointer-events-none"></div>
      
      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <div className="relative rounded-3xl border border-[#2e0210]/15 bg-white/65 hover:border-brand-fuchsia/50 hover:bg-white/95 hover:shadow-[0_12px_30px_rgba(46,2,16,0.1)] p-8 sm:p-14 md:p-16 text-center space-y-8 shadow-2xl overflow-hidden group transition-all duration-500">
          {/* Subtle inside borders & accents */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-fuchsia/50 to-transparent"></div>
          <div className="absolute -right-24 -bottom-24 w-64 h-64 rounded-full bg-brand-fuchsia/5 blur-[80px] pointer-events-none transition-all duration-700 group-hover:scale-125"></div>

          {/* Icon Badge */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-fuchsia/10 border border-brand-fuchsia/20 shadow-lg shadow-brand-fuchsia/5 group-hover:scale-110 transition-transform duration-500">
            <Sparkles className="h-6 w-6 text-brand-fuchsia animate-pulse" />
          </div>

          {/* Text Content with motion animation */}
          <div className="max-w-3xl mx-auto space-y-4 overflow-hidden">
            <motion.h3 
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2e0210] font-medium tracking-tight leading-[1.15]"
            >
              Descubre nuevas experiencias con total confianza y discreción
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="text-sm sm:text-base text-[#5a2e3c]/90 font-medium leading-relaxed max-w-2xl mx-auto"
            >
              Compra de forma segura y recibe asesoría personalizada para encontrar exactamente lo que buscas.
            </motion.p>
          </div>

          {/* Action Trigger */}
          <div className="pt-4 flex flex-col items-center justify-center space-y-4">
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center gap-2.5 rounded-full bg-brand-fuchsia hover:bg-brand-fuchsia-hover px-8 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-300 hover:scale-[1.05] active:scale-95 shadow-xl shadow-brand-fuchsia/20 cursor-pointer"
            >
              <MessageCircle className="h-4.5 w-4.5 fill-current" />
              Recibir Asesoría Privada
            </button>

            {/* Subtle trust sub-badge */}
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#5a2e3c]/90 uppercase tracking-widest font-bold">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>Compra 100% segura y discreta</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

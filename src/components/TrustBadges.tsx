import React from 'react';
import { ShieldCheck, EyeOff, MessageCircle, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import AppleWatermark from './AppleWatermark';

export default function TrustBadges() {
  const badges = [
    {
      icon: <EyeOff className="h-7 w-7 text-brand-fuchsia" />,
      title: 'ENVÍO DISCRETO',
      description: 'Empaque sin marcas ni logos externos.',
    },
    {
      icon: <ShieldCheck className="h-7 w-7 text-brand-fuchsia" />,
      title: 'CALIDAD MÉDICA',
      description: 'Materiales certificados hipoalergénicos.',
    },
    {
      icon: <MessageCircle className="h-7 w-7 text-brand-fuchsia" />,
      title: 'WHATSAPP',
      description: 'Asesoría personalizada y privada.',
    },
    {
      icon: <Lock className="h-7 w-7 text-brand-fuchsia" />,
      title: 'PRIVACIDAD TOTAL',
      description: 'Tus datos nunca son compartidos.',
    },
  ];

  return (
    <section id="trust-badges-section" className="py-24 bg-[#eed1d1] border-t border-[#2e0210]/15 relative overflow-hidden">
      
      {/* Rose apple watermark inside TrustBadges */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <AppleWatermark size="750px" opacity={0.18} className="max-w-[95%]" />
      </div>

      {/* Soft light/white ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-brand-fuchsia/5 blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Header with motion animation */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 overflow-hidden">
          <motion.h3 
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="font-serif text-3xl font-medium tracking-tight text-[#2e0210] md:text-4xl"
          >
            ¿Por qué elegir FRUTO PROHIBIDO?
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="text-sm sm:text-base text-[#5a2e3c]/90 font-medium leading-relaxed"
          >
            Cuatro razones que nos hacen la opción favorita de nuestros clientes.
          </motion.p>
        </div>

        <div id="trust-badges-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, idx) => (
            <div
              id={`trust-badge-${idx}`}
              key={idx}
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-white/65 border border-[#2e0210]/15 hover:border-brand-fuchsia/60 hover:bg-white/95 hover:shadow-[0_12px_30px_rgba(46,2,16,0.1)] hover:scale-[1.04] transition-all duration-500 group"
            >
              {/* Icon Container */}
              <div className="h-14 w-14 rounded-full bg-brand-fuchsia/10 border border-brand-fuchsia/20 flex items-center justify-center group-hover:scale-105 group-hover:bg-brand-fuchsia/20 transition-all duration-300">
                {badge.icon}
              </div>

              {/* Text */}
              <div className="space-y-1.5">
                <h4 className="font-serif text-xs font-semibold tracking-[0.2em] text-[#2e0210] uppercase">
                  {badge.title}
                </h4>
                <p className="text-[11px] leading-relaxed text-[#5a2e3c]/95 font-medium tracking-wider">
                  {badge.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

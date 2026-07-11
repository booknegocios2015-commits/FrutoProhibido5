import React from 'react';
import { TESTIMONIALS } from '../data/products';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import AppleWatermark from './AppleWatermark';

export default function Testimonials() {
  return (
    <section id="testimonials-section" className="relative py-24 bg-brand-dark border-t border-brand-silver/5 overflow-hidden">
      
      {/* Centered structured watermark behind testimonials */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <AppleWatermark size="750px" opacity={0.15} className="max-w-[95%]" isDarkBg={true} />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header with motion animation */}
        <div id="testimonials-header" className="text-center max-w-2xl mx-auto mb-16 space-y-3 overflow-hidden">
          <motion.h3 
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="font-serif text-3xl font-medium tracking-tight text-white md:text-4xl"
          >
            Experiencias Reales
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="text-sm text-brand-silver/60 tracking-wider"
          >
            Nuestros clientes valoran el arte de la elegancia y la absoluta reserva.
          </motion.p>
        </div>

        {/* Testimonials Columns */}
        <div id="testimonials-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              id={`testimonial-card-${t.id}`}
              key={t.id}
              className="relative p-8 rounded-xl bg-brand-gray/20 border border-brand-silver/10 hover:border-brand-fuchsia/40 hover:bg-brand-gray/30 hover:shadow-[0_0_50px_rgba(201,2,83,0.15)] transition-all duration-500 flex flex-col justify-between space-y-6"
            >
              
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="h-4.5 w-4.5 fill-brand-fuchsia text-brand-fuchsia" />
                ))}
              </div>

              {/* Quote Content */}
              <p className="text-xs leading-relaxed text-brand-silver/85 font-light tracking-wide italic">
                {t.text}
              </p>

              {/* Author name with uppercase luxury markings */}
              <div className="pt-4 border-t border-brand-silver/5">
                <span className="text-[10px] font-bold tracking-widest text-brand-fuchsia uppercase block">
                  {t.author}
                </span>
                <span className="text-[9px] text-brand-silver/30 uppercase tracking-widest block mt-0.5">
                  Cliente Verificado
                </span>
              </div>

              {/* Subtle visual accent */}
              <div className="absolute top-0 right-8 h-[2px] w-12 bg-gradient-to-r from-brand-fuchsia to-transparent"></div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Star, Check, Award } from 'lucide-react';
import { motion } from 'motion/react';
import AppleWatermark from './AppleWatermark';

interface GoogleReview {
  id: string;
  author: string;
  location: string;
  date: string;
  text: string;
  avatarLetter: string;
  avatarBg: string;
}

const REVIEWS: GoogleReview[] = [
  {
    id: 'gr1',
    author: 'Camila S.',
    location: 'Cauquenes',
    date: 'Hace 1 semana',
    text: 'Increíble la rapidez y, sobre todo, la discreción del envío. El paquete llegó perfectamente sellado en un sobre neutro negro sin logos ni detalles del contenido. La lencería es hermosa y de calidad premium. ¡Recomendados al 100%!',
    avatarLetter: 'C',
    avatarBg: 'bg-emerald-600',
  },
  {
    id: 'gr2',
    author: 'Gonzalo M.',
    location: 'Región del Maule',
    date: 'Hace 2 semanas',
    text: 'Excelente atención al cliente por WhatsApp. Tenía dudas sobre las fragancias con feromonas y me asesoraron de manera muy profesional, respetuosa y rápida. El envío a domicilio fue súper puntual y privado.',
    avatarLetter: 'G',
    avatarBg: 'bg-indigo-600',
  },
  {
    id: 'gr3',
    author: 'Valentina J.',
    location: 'Chanco',
    date: 'Hace 3 semanas',
    text: 'Compré un producto de bienestar íntimo y la presentación es de un lujo total. El material es exquisito y funciona a la perfección. Es de gran valor contar con una tienda de este nivel en la zona. ¡Totalmente satisfecha!',
    avatarLetter: 'V',
    avatarBg: 'bg-rose-600',
  }
];

export default function GoogleReviews() {
  return (
    <section id="google-reviews-section" className="py-24 bg-[#eed1d1] border-t border-[#2e0210]/15 relative overflow-hidden">
      
      {/* Rose apple watermark inside GoogleReviews */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <AppleWatermark size="850px" opacity={0.18} className="max-w-[95%]" />
      </div>

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-brand-fuchsia/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] rounded-full bg-brand-fuchsia/5 blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Header with motion animation */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 overflow-hidden">
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-[11px] font-semibold tracking-[0.3em] text-brand-fuchsia uppercase flex items-center justify-center gap-1.5"
          >
            <Award className="h-3.5 w-3.5" /> RECOMIENDAN NUESTRO SERVICIO
          </motion.p>
          <motion.h3 
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="font-serif text-3xl font-medium tracking-tight text-[#2e0210] md:text-4xl"
          >
            Opiniones Reales en Google
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="text-sm sm:text-base text-[#5a2e3c]/90 font-medium leading-relaxed"
          >
            La confianza, discreción y elegancia que nuestros clientes de Cauquenes y todo Chile valoran.
          </motion.p>
        </div>

        {/* Google Summary Score Box */}
        <div className="max-w-md mx-auto mb-16 bg-white/65 border border-[#2e0210]/15 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md backdrop-blur-sm relative overflow-hidden group hover:border-brand-fuchsia/40 hover:bg-white/95 transition-all duration-300">
          <div className="absolute top-0 left-0 w-2 h-full bg-brand-fuchsia"></div>
          
          <div className="flex items-center gap-4">
            {/* Google Logo representation */}
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white border border-[#2e0210]/10 shadow-sm text-white font-bold text-lg">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </div>
            
            <div className="space-y-0.5">
              <span className="block text-xs uppercase font-semibold text-[#5a2e3c]/85 tracking-wider">Puntuación Google</span>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-bold text-[#2e0210]">5.0</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center sm:text-right border-t sm:border-t-0 sm:border-l border-[#2e0210]/15 pt-4 sm:pt-0 sm:pl-6">
            <span className="block text-xs font-bold text-[#2e0210]">100% Excelente</span>
            <span className="block text-[10px] text-[#5a2e3c]/75 font-medium mt-0.5">Clientes Verificados</span>
            <span className="inline-flex items-center gap-1 text-[9px] text-brand-fuchsia font-bold uppercase tracking-widest mt-1.5">
              <Check className="h-3 w-3 stroke-[3]" /> Reseñas 5 Estrellas
            </span>
          </div>
        </div>

        {/* Testimonials Grid with Interactive Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              id={`google-review-${review.id}`}
              key={review.id}
              className="relative p-8 rounded-xl bg-white/65 border border-[#2e0210]/15 flex flex-col justify-between space-y-6 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-brand-fuchsia/60 hover:bg-white/95 hover:shadow-[0_12px_30px_rgba(46,2,16,0.1)] group overflow-hidden"
            >
              {/* Subtle pink line glow inside on hover */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-fuchsia to-transparent opacity-30 group-hover:opacity-100 group-hover:scale-x-110 transition-all duration-500"></div>
              
              {/* Stars & Google G */}
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-fuchsia text-brand-fuchsia group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-xs leading-relaxed text-[#5a2e3c] font-medium italic">
                "{review.text}"
              </p>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-[#2e0210]/10 flex items-center gap-3">
                {/* Custom Avatar Letter with Dynamic Background */}
                <div className={`h-9 w-9 rounded-full ${review.avatarBg} text-white font-bold text-xs flex items-center justify-center uppercase shadow-inner`}>
                  {review.avatarLetter}
                </div>
                
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold tracking-widest text-[#2e0210] uppercase block">
                    {review.author}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] text-[#5a2e3c]/75 font-semibold uppercase tracking-wider block">
                      {review.location} • {review.date}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    <span className="text-[8px] text-emerald-600 font-bold uppercase tracking-wider">
                      Verificado
                    </span>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

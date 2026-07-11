import React from 'react';
import { CATEGORIES } from '../data/products';
import { Category } from '../types';
import { motion } from 'motion/react';
import AppleWatermark from './AppleWatermark';

interface CollectionsProps {
  onCategoryClick: (categoryId: string, categoryName: string) => void;
}

export default function Collections({ onCategoryClick }: CollectionsProps) {
  
  const handleCategoryClick = (id: string, name: string) => {
    onCategoryClick(id, name);
  };

  return (
    <section id="collections-section" className="relative py-24 bg-[#eed1d1] border-t border-[#2e0210]/15 overflow-hidden">
      
      {/* Elegant watermark background - tailored to Collections layout */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <AppleWatermark size="900px" opacity={0.18} className="max-w-[95%]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
         
         {/* Section Header with motion slide-in from left */}
         <div id="collections-header" className="text-center max-w-2xl mx-auto mb-16 space-y-3 overflow-hidden">
           <motion.h3 
             initial={{ opacity: 0, x: -80 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.9, ease: "easeOut" }}
             className="font-serif text-3xl font-medium tracking-tight text-[#2e0210] md:text-4xl"
           >
             Consultas por Nuestras Ofertas
           </motion.h3>
           <motion.p 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
             className="text-sm text-[#5a2e3c]/90 font-medium tracking-wider"
           >
             Explora nuestras categorías y consulta directamente por WhatsApp para conocer promociones vigentes y asesoría privada.
           </motion.p>
         </div>

        {/* Collections Layout - 4 columns on desktop with centered bottom row, 2 columns on mobile */}
        <div id="collections-layout" className="flex flex-col gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Row 1 for Desktop: Lencería, Feromonas, Lubricantes, Juguetes (4 items) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {CATEGORIES.slice(0, 4).map((category: Category) => (
              <div
                id={`collection-card-${category.id}`}
                key={category.id}
                onClick={() => handleCategoryClick(category.id, category.name)}
                className="group relative cursor-pointer overflow-hidden rounded-full border border-brand-fuchsia/40 shadow-[0_0_15px_rgba(201,2,83,0.2)] aspect-square flex flex-col items-center justify-center p-4 text-center transition-all duration-500 hover:border-brand-fuchsia hover:shadow-[0_0_30px_rgba(201,2,83,0.45)] hover:scale-[1.03] max-w-[240px] mx-auto w-full"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 rounded-full overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>
                  {/* Elegant fuchsia inner ring on hover */}
                  <div className="absolute inset-2 rounded-full border border-transparent group-hover:border-brand-fuchsia/30 transition-all duration-500 scale-95 group-hover:scale-100"></div>
                </div>

                {/* Title & Description */}
                <div className="relative z-10 w-full px-2 space-y-1">
                  <h4 className="font-serif text-base sm:text-lg md:text-xl font-medium tracking-wide text-white group-hover:text-brand-fuchsia group-hover:scale-105 transition-all duration-300">
                    {category.name}
                  </h4>
                  <p className="text-[9px] sm:text-[10px] text-brand-silver/70 font-light tracking-wide max-w-[170px] mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 leading-normal">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 for Desktop: Accesorios, Juegos (2 items centered) */}
          <div className="grid grid-cols-2 lg:flex lg:justify-center gap-6 sm:gap-8">
            {CATEGORIES.slice(4, 6).map((category: Category) => (
              <div
                id={`collection-card-${category.id}`}
                key={category.id}
                onClick={() => handleCategoryClick(category.id, category.name)}
                className="group relative cursor-pointer overflow-hidden rounded-full border border-brand-fuchsia/40 shadow-[0_0_15px_rgba(201,2,83,0.2)] aspect-square flex flex-col items-center justify-center p-4 text-center transition-all duration-500 hover:border-brand-fuchsia hover:shadow-[0_0_30px_rgba(201,2,83,0.45)] hover:scale-[1.03] max-w-[240px] mx-auto lg:mx-0 w-full lg:w-[240px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 rounded-full overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>
                  {/* Elegant fuchsia inner ring on hover */}
                  <div className="absolute inset-2 rounded-full border border-transparent group-hover:border-brand-fuchsia/30 transition-all duration-500 scale-95 group-hover:scale-100"></div>
                </div>

                {/* Title & Description */}
                <div className="relative z-10 w-full px-2 space-y-1">
                  <h4 className="font-serif text-base sm:text-lg md:text-xl font-medium tracking-wide text-white group-hover:text-brand-fuchsia group-hover:scale-105 transition-all duration-300">
                    {category.name}
                  </h4>
                  <p className="text-[9px] sm:text-[10px] text-brand-silver/70 font-light tracking-wide max-w-[170px] mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 leading-normal">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

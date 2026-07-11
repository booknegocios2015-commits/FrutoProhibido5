import React from 'react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { Sparkles, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import AppleWatermark from './AppleWatermark';

interface ProductsProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onProductClick: (product: Product) => void;
}

export default function Products({ activeCategory, onSelectCategory, onProductClick }: ProductsProps) {
  
  // Filter products by active category
  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="products-section" className="relative py-24 bg-brand-dark border-t border-brand-silver/5 scroll-mt-20 overflow-hidden">
      
      {/* Dynamic structured watermarks adapted to the products grid */}
      <div className="absolute top-10 left-[2%] z-0 pointer-events-none select-none overflow-hidden">
        <AppleWatermark size="580px" opacity={0.15} isDarkBg={true} />
      </div>
      <div className="absolute bottom-10 right-[2%] z-0 pointer-events-none select-none overflow-hidden">
        <AppleWatermark size="620px" opacity={0.15} isDarkBg={true} />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Header Row with motion slide-in */}
        <div id="products-header" className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 overflow-hidden">
          <div className="space-y-2">
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-[11px] font-semibold tracking-[0.3em] text-brand-fuchsia uppercase"
            >
              PLACER DE ALTA GAMA
            </motion.p>
            <motion.h3 
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
              className="font-serif text-3xl font-medium tracking-tight text-white md:text-4xl"
            >
              {activeCategory === 'all' ? 'Piezas Exclusivas' : `Colección ${activeCategory}`}
            </motion.h3>
          </div>
          
          {activeCategory !== 'all' && (
            <button
              id="btn-view-all-products"
              onClick={() => onSelectCategory('all')}
              className="text-xs font-semibold tracking-widest text-brand-fuchsia hover:text-white uppercase transition-colors flex items-center gap-1.5 border-b border-brand-fuchsia/45 hover:border-white pb-1"
            >
              Ver catálogo completo
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div id="no-products-msg" className="text-center py-24 border border-brand-silver/10 rounded-xl bg-brand-gray/10">
            <p className="text-brand-silver/70 tracking-wider">No se han encontrado productos en esta colección temporalmente.</p>
            <button
              onClick={() => onSelectCategory('all')}
              className="mt-4 text-xs font-semibold tracking-widest text-brand-fuchsia hover:text-white uppercase transition-colors"
            >
              Volver al catálogo completo
            </button>
          </div>
        ) : (
          <div id="products-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product: Product) => (
              <div
                id={`product-card-${product.id}`}
                key={product.id}
                onClick={() => onProductClick(product)}
                className="group relative cursor-pointer flex flex-col justify-between h-full rounded-xl overflow-hidden bg-brand-gray/20 border border-brand-silver/10 hover:border-brand-fuchsia/40 hover:bg-brand-gray/30 hover:shadow-[0_0_50px_rgba(201,2,83,0.15)] transition-all duration-500"
              >
                
                {/* Product Image Stage */}
                <div className="relative aspect-square overflow-hidden bg-brand-dark flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Status/Badge Tag */}
                  {product.badge && (
                    <span className="absolute top-4 left-4 rounded-sm bg-brand-fuchsia px-2.5 py-0.5 text-[8px] font-bold tracking-widest text-white uppercase shadow-md">
                      {product.badge}
                    </span>
                  )}

                  {/* Dark vignette gradient bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

                  {/* Hover Eye Overlay button */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="flex items-center gap-2 rounded-full bg-brand-dark/95 backdrop-blur-sm border border-brand-fuchsia/20 px-4 py-2 text-[10px] font-semibold tracking-widest text-white uppercase transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <Eye className="h-3.5 w-3.5 text-brand-fuchsia" />
                      Ver Detalles
                    </span>
                  </div>
                </div>

                {/* Product Information Caption */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-bold tracking-widest text-brand-fuchsia uppercase block">
                      {product.category}
                    </span>
                    <h4 className="font-serif text-lg font-medium text-white group-hover:text-brand-fuchsia transition-colors tracking-wide line-clamp-1">
                      {product.name}
                    </h4>
                    <p className="text-xs text-brand-silver/75 line-clamp-2 font-light tracking-wide leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-brand-silver/5 flex items-center justify-between">
                    <p className="font-serif text-base font-semibold text-white">
                      ${product.price.toFixed(2)} <span className="text-[9px] text-brand-silver/40 font-normal">USD</span>
                    </p>

                    <span 
                      className="text-[9px] font-bold tracking-wider text-brand-silver/60 group-hover:text-brand-fuchsia group-hover:underline transition-colors uppercase"
                    >
                      Ver detalles →
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

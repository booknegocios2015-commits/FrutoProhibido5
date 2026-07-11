import React, { useState } from 'react';
import { X, Check, ShoppingBag, ShieldCheck, Truck, Sparkles, MessageSquare } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, size?: string, color?: string) => void;
}

export default function ProductDetailModal({ product, onClose, onAddToCart }: ProductDetailModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.category === 'lenceria' ? 'M' : undefined);
  const [selectedColor, setSelectedColor] = useState(product.category === 'accesorios' ? 'Noir' : undefined);
  const [addedMessage, setAddedMessage] = useState(false);

  const sizes = ['S', 'M', 'L'];
  const colors = ['Noir', 'Velvet Bordeaux', 'Fuchsia Night'];

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedSize, selectedColor);
    setAddedMessage(true);
    setTimeout(() => {
      setAddedMessage(false);
    }, 2500);
  };

  const getWhatsAppLink = () => {
    const text = `Hola Fruto Prohibido, me gustaría consultar sobre el producto "${product.name}" ($${product.price} USD). ¿Tienen disponibilidad y asesoría para este modelo?`;
    return `https://wa.me/5219999999999?text=${encodeURIComponent(text)}`; // Dummy premium WhatsApp number
  };

  return (
    <div id="product-detail-modal-container" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
      
      {/* Background Tap Target to Close */}
      <div className="absolute inset-0 z-0" onClick={onClose}></div>

      {/* Main Glass Panel Card */}
      <div 
        id="product-detail-card"
        className="relative z-10 w-full max-w-5xl rounded-2xl glass-panel shadow-deep overflow-hidden my-8 animate-fadeIn border border-brand-silver/10"
      >
        
        {/* Close Button */}
        <button
          id="btn-close-detail-modal"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-brand-dark-dim/80 text-brand-silver hover:text-white transition-colors border border-brand-silver/15"
          aria-label="Cerrar modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left: Product Image */}
          <div className="relative aspect-square md:aspect-auto md:h-full min-h-[350px] bg-brand-dark-dim overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-r border-brand-silver/10">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Badges in Image */}
            {product.badge && (
              <span className="absolute top-6 left-6 rounded-sm bg-brand-fuchsia px-3 py-1 text-[9px] font-bold tracking-widest text-white uppercase shadow-md">
                {product.badge}
              </span>
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Right: Product Customizer & Details */}
          <div className="p-8 sm:p-10 flex flex-col justify-between space-y-6 max-h-[85vh] overflow-y-auto">
            
            {/* Header info */}
            <div className="space-y-2">
              <span className="text-[10px] font-semibold tracking-[0.3em] text-brand-fuchsia uppercase block">
                {product.category}
              </span>
              <h3 className="font-serif text-3xl font-medium tracking-tight text-white leading-tight">
                {product.name}
              </h3>
              <p className="font-serif text-2xl font-light text-brand-silver/90 mt-1">
                ${product.price.toFixed(2)} <span className="text-xs text-brand-silver/40 tracking-wider">USD</span>
              </p>
            </div>

            {/* General Description */}
            <p className="text-xs leading-relaxed text-brand-silver/75 font-light tracking-wide">
              {product.description}
            </p>

            {/* Customizer (Sizes/Colors based on category) */}
            <div className="space-y-4 pt-4 border-t border-brand-silver/5">
              
              {/* Size Selector for Lingerie */}
              {product.category === 'lenceria' && (
                <div className="space-y-2">
                  <span className="text-[10px] font-semibold tracking-wider text-brand-silver/50 uppercase block">Talla de lencería:</span>
                  <div className="flex gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`h-9 w-12 rounded border text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                          selectedSize === size
                            ? 'bg-brand-fuchsia border-brand-fuchsia text-white'
                            : 'border-brand-outline/30 text-brand-silver hover:border-brand-silver'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selector for Accessories */}
              {product.category === 'accesorios' && (
                <div className="space-y-2">
                  <span className="text-[10px] font-semibold tracking-wider text-brand-silver/50 uppercase block">Variación de cuero:</span>
                  <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-1.5 rounded border text-[10px] font-semibold uppercase tracking-wider transition-all duration-200 ${
                          selectedColor === color
                            ? 'bg-white border-white text-brand-dark'
                            : 'border-brand-outline/30 text-brand-silver hover:border-brand-silver'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="space-y-2">
                <span className="text-[10px] font-semibold tracking-wider text-brand-silver/50 uppercase block">Cantidad:</span>
                <div className="flex items-center space-x-3 w-32 border border-brand-outline/30 rounded-md p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="flex-1 h-7 text-brand-silver hover:text-white transition-colors"
                  >
                    -
                  </button>
                  <span className="text-sm font-semibold text-white w-6 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="flex-1 h-7 text-brand-silver hover:text-white transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

            </div>

            {/* Specifications Details Drawer */}
            <div className="space-y-3 pt-4 border-t border-brand-silver/5 text-[11px] text-brand-silver/70">
              <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-brand-silver/5">
                <span className="font-semibold text-brand-silver/45 uppercase tracking-wider">Material:</span>
                <span className="col-span-2 font-light text-white/90">{product.details.material}</span>
              </div>
              
              {product.details.dimensions && (
                <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-brand-silver/5">
                  <span className="font-semibold text-brand-silver/45 uppercase tracking-wider">Dimensiones:</span>
                  <span className="col-span-2 font-light text-white/90">{product.details.dimensions}</span>
                </div>
              )}

              {product.details.waterproof && (
                <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-brand-silver/5">
                  <span className="font-semibold text-brand-silver/45 uppercase tracking-wider">Sumergible:</span>
                  <span className="col-span-2 font-light text-white/90">{product.details.waterproof}</span>
                </div>
              )}

              {product.details.rechargeable && (
                <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-brand-silver/5">
                  <span className="font-semibold text-brand-silver/45 uppercase tracking-wider">Carga:</span>
                  <span className="col-span-2 font-light text-white/90">{product.details.rechargeable}</span>
                </div>
              )}

              <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-brand-silver/5">
                <span className="font-semibold text-brand-silver/45 uppercase tracking-wider">Cuidado:</span>
                <span className="col-span-2 font-light text-white/80 leading-relaxed">{product.details.careInstructions}</span>
              </div>
            </div>

            {/* Guarantee and Shipping Micro-cards */}
            <div className="grid grid-cols-2 gap-2 text-[10px] text-brand-silver/65 py-2">
              <div className="flex items-center space-x-2 bg-brand-gray/40 rounded-lg p-2 border border-brand-silver/5">
                <ShieldCheck className="h-4 w-4 text-brand-fuchsia flex-shrink-0" />
                <span className="leading-tight">Envío 100% Discreto</span>
              </div>
              <div className="flex items-center space-x-2 bg-brand-gray/40 rounded-lg p-2 border border-brand-silver/5">
                <Truck className="h-4 w-4 text-brand-fuchsia flex-shrink-0" />
                <span className="leading-tight">Garantía Asegurada</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-brand-silver/5">
              
              <button
                id="btn-add-to-cart-modal"
                onClick={handleAdd}
                className="relative flex w-full items-center justify-center gap-3 rounded-md bg-brand-fuchsia hover:bg-brand-fuchsia-hover px-6 py-4 text-xs font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:scale-[1.01] active:scale-95 shadow-md shadow-brand-fuchsia/10"
              >
                <ShoppingBag className="h-4 w-4" />
                {addedMessage ? '¡Añadido con éxito!' : 'Añadir a la Bolsa de Compras'}
              </button>

              <a
                id="btn-consult-whatsapp-modal"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-md border border-brand-silver/20 bg-white/5 hover:bg-white/10 px-6 py-4 text-xs font-semibold tracking-widest text-white uppercase transition-all"
              >
                <MessageSquare className="h-4 w-4 text-green-400" />
                Consultar por WhatsApp
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export default function Cart({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }: CartProps) {
  
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const discretePackagingCost = 0.00; // Free and included
  const shippingCost = 0.00; // Free discrete shipping
  const total = subtotal + discretePackagingCost + shippingCost;

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    let text = `Hola Fruto Prohibido. Deseo realizar un pedido de las siguientes piezas exclusivas de su catálogo:\n\n`;
    
    cartItems.forEach((item) => {
      const customizations = [];
      if (item.selectedSize) customizations.push(`Talla: ${item.selectedSize}`);
      if (item.selectedColor) customizations.push(`Color: ${item.selectedColor}`);
      const customStr = customizations.length > 0 ? ` (${customizations.join(', ')})` : '';
      
      text += `• ${item.quantity} x ${item.product.name}${customStr} - $${(item.product.price * item.quantity).toFixed(2)} USD\n`;
    });

    text += `\n*Subtotal:* $${subtotal.toFixed(2)} USD`;
    text += `\n*Envío Discreto:* GRATUITO`;
    text += `\n*Total estimado:* $${total.toFixed(2)} USD`;
    text += `\n\nPor favor, confírmenme disponibilidad para coordinar el pago seguro y los detalles del envío discreto. ¡Muchas gracias!`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/5219999999999?text=${encodedText}`; // Dummy luxury Whatsapp link
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div id="cart-drawer-overlay" className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-fadeIn">
      
      {/* Tap outside to close */}
      <div className="absolute inset-0 z-0" onClick={onClose}></div>

      {/* Drawer Container */}
      <div 
        id="cart-drawer"
        className="relative z-10 w-full max-w-md h-full bg-brand-dark border-l border-brand-outline/20 p-6 flex flex-col justify-between shadow-deep animate-slideLeft"
      >
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-brand-silver/10 pb-4 mb-6">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-5 w-5 text-brand-fuchsia" />
            <span className="font-serif text-lg tracking-wider text-white uppercase">Mi Bolsa de Compras</span>
          </div>
          <button 
            id="btn-close-cart-drawer"
            onClick={onClose} 
            className="p-1 text-brand-silver hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Cart Items List */}
        <div id="cart-items-container" className="flex-1 overflow-y-auto space-y-4 pr-1">
          {cartItems.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <ShoppingBag className="h-12 w-12 text-brand-silver/20 mx-auto" />
              <p className="text-xs text-brand-silver/50 tracking-wider">Tu bolsa de compras está vacía.</p>
              <button
                onClick={onClose}
                className="text-xs font-semibold tracking-widest text-brand-fuchsia hover:underline uppercase"
              >
                Volver a la selección
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div 
                id={`cart-item-${item.product.id}`}
                key={item.product.id} 
                className="flex gap-4 p-3 rounded-lg bg-brand-gray/30 border border-brand-silver/5 hover:border-brand-silver/10 transition-colors"
              >
                {/* Miniature Image */}
                <div className="h-20 w-20 rounded-md overflow-hidden bg-brand-dark-dim border border-brand-silver/5 flex-shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Details Column */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div className="space-y-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-serif text-sm font-medium text-white truncate leading-tight">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-brand-silver/40 hover:text-red-400 p-0.5 transition-colors flex-shrink-0"
                        aria-label="Eliminar producto"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    {/* Customizations display */}
                    {(item.selectedSize || item.selectedColor) && (
                      <div className="flex flex-wrap gap-2 text-[9px] text-brand-silver/50 uppercase tracking-wider font-light">
                        {item.selectedSize && <span>Talla: {item.selectedSize}</span>}
                        {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                      </div>
                    )}
                  </div>

                  {/* Quantity and Price row */}
                  <div className="flex items-center justify-between pt-1">
                    {/* Tiny Selector */}
                    <div className="flex items-center space-x-2 border border-brand-outline/20 rounded p-0.5 bg-brand-dark-dim">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="w-5 h-5 text-brand-silver hover:text-white flex items-center justify-center text-xs"
                      >
                        -
                      </button>
                      <span className="text-xs text-white w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="w-5 h-5 text-brand-silver hover:text-white flex items-center justify-center text-xs"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-serif text-xs text-brand-fuchsia font-semibold">
                      ${(item.product.price * item.quantity).toFixed(2)} USD
                    </span>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

        {/* Calculations / Actions Column */}
        {cartItems.length > 0 && (
          <div className="border-t border-brand-outline/20 pt-6 mt-6 space-y-4">
            
            {/* Calculation grid */}
            <div className="space-y-2 text-xs text-brand-silver/70">
              <div className="flex justify-between">
                <span className="font-light">Subtotal:</span>
                <span className="text-white font-medium">${subtotal.toFixed(2)} USD</span>
              </div>
              <div className="flex justify-between">
                <span className="font-light">Empaque Discreto:</span>
                <span className="text-green-400 font-medium uppercase tracking-widest text-[9px]">Incluido</span>
              </div>
              <div className="flex justify-between">
                <span className="font-light">Envío Discreto:</span>
                <span className="text-green-400 font-medium uppercase tracking-widest text-[9px]">Gratuito</span>
              </div>
              
              <div className="flex justify-between border-t border-brand-silver/5 pt-3 text-sm">
                <span className="font-serif text-white font-medium">Total Estimado:</span>
                <span className="font-serif text-brand-fuchsia font-semibold text-base">${total.toFixed(2)} USD</span>
              </div>
            </div>

            {/* Privacy Warning */}
            <div className="flex items-start space-x-2.5 p-2.5 rounded bg-brand-gray/40 border border-brand-outline/10 text-[10px] text-brand-silver/60">
              <ShieldCheck className="h-4 w-4 text-brand-fuchsia flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Su pedido será embalado en caja Kraft 100% lisa, sellada, sin marcas ni logos de Fruto Prohibido. Absoluta reserva garantizada.
              </p>
            </div>

            {/* Action buttons */}
            <div className="space-y-2">
              <button
                id="btn-checkout-whatsapp"
                onClick={handleCheckout}
                className="flex w-full items-center justify-center gap-3 rounded-md bg-brand-fuchsia hover:bg-brand-fuchsia-hover px-6 py-4 text-xs font-semibold tracking-widest text-white uppercase transition-all duration-300"
              >
                <MessageSquare className="h-4 w-4" />
                Finalizar Pedido por WhatsApp
              </button>

              <button
                id="btn-continue-shopping"
                onClick={onClose}
                className="flex w-full items-center justify-center gap-2 rounded-md border border-brand-silver/20 bg-transparent hover:bg-white/5 px-6 py-3.5 text-xs font-semibold tracking-widest text-brand-silver hover:text-white uppercase transition-colors"
              >
                Continuar Explorando
              </button>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}

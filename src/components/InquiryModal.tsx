import React, { useState } from 'react';
import { X, MessageCircle, Sparkles } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  categoryName?: string;
  categoryId?: string;
}

export default function InquiryModal({ isOpen, onClose, categoryName, categoryId }: InquiryModalProps) {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const phone = '+56973770617';
    let text = '';
    
    if (name.trim()) {
      text += `Hola, mi nombre es ${name.trim()}. `;
    } else {
      text += 'Hola Fruto Prohibido. ';
    }
    
    if (categoryName) {
      text += `Tengo una consulta sobre la colección de *${categoryName}*: `;
    } else {
      text += 'Tengo una duda/consulta: ';
    }
    
    text += `\n\n"${message.trim()}"`;
    
    const whatsappUrl = `https://wa.me/56973770617?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose}></div>
      
      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-[#0a0a0a] border border-brand-silver/15 rounded-xl p-6 shadow-2xl z-10 animate-scaleUp overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-brand-fuchsia/10 blur-[60px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-brand-fuchsia/10 blur-[60px] pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2.5 text-brand-silver/60 hover:text-brand-fuchsia hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center w-10 h-10 focus:outline-none border border-transparent hover:border-brand-fuchsia/20"
          aria-label="Cerrar"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Content */}
        <div className="space-y-4 relative z-10">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-brand-fuchsia/10 border border-brand-fuchsia/20 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-brand-fuchsia animate-pulse" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-medium text-white tracking-wide">
                Dudas y Consultas
              </h3>
              <p className="text-[11px] text-brand-silver/50 uppercase tracking-widest font-semibold">
                Asesoría Directa por WhatsApp
              </p>
            </div>
          </div>

          <p className="text-xs text-brand-silver/85 leading-relaxed bg-brand-gray/20 border border-brand-silver/5 p-3 rounded-lg">
            Hola, Cuéntanos Que Andas Buscando, te contestaremos a la brevedad!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Optional Name field */}
            <div className="space-y-1.5">
              <label className="block text-[10px] uppercase font-bold tracking-widest text-brand-silver/70">
                Tu Nombre (Opcional)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. María o Anónimo..."
                className="w-full bg-[#111111] border border-brand-outline/20 focus:border-brand-fuchsia focus:outline-none rounded-lg px-3 py-2.5 text-xs text-white placeholder-brand-silver/30 transition-colors"
              />
            </div>

            {/* Inquiry Category context */}
            {categoryName && (
              <div className="py-1 px-3 bg-brand-fuchsia/10 border border-brand-fuchsia/25 rounded text-[11px] text-brand-fuchsia font-semibold inline-block">
                Colección: {categoryName}
              </div>
            )}

            {/* Message field */}
            <div className="space-y-1.5">
              <label className="block text-[10px] uppercase font-bold tracking-widest text-brand-silver/70">
                Tu Mensaje / Consulta
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe aquí tu duda, consulta de tallas, fragancias o disponibilidad..."
                className="w-full bg-[#111111] border border-brand-outline/20 focus:border-brand-fuchsia focus:outline-none rounded-lg px-3 py-2.5 text-xs text-white placeholder-brand-silver/30 transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!message.trim()}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-brand-fuchsia hover:bg-brand-fuchsia-hover text-white text-xs font-semibold tracking-widest uppercase transition-all duration-300 disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand-fuchsia/20 cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" />
              Contactar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

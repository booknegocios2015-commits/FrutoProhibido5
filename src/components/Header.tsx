import React, { useState } from 'react';
import { Menu, X, MessageSquare, FileDown } from 'lucide-react';
import logoImg from '../assets/images/fruto_prohibido_logo_1783471370385.jpg';

interface HeaderProps {
  onCategoryClick: (categoryId: string, categoryLabel: string) => void;
  onWhatsAppClick: () => void;
  onCatalogClick: () => void;
}

export default function Header({ onCategoryClick, onWhatsAppClick, onCatalogClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'lenceria', label: 'Lencería' },
    { id: 'feromonas', label: 'Feromonas' },
    { id: 'lubricantes', label: 'Lubricantes' },
    { id: 'juguetes', label: 'Juguetes' },
    { id: 'accesorios', label: 'Accesorios' },
    { id: 'juegos', label: 'Juegos' },
  ];

  const handleCategoryClick = (categoryId: string, categoryLabel: string) => {
    onCategoryClick(categoryId, categoryLabel);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 w-full border-b border-brand-silver/10 bg-[#050505]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-6">
          
          {/* Left Section: Logo & Brand Name */}
          <div className="flex items-center space-x-3">
            {/* Mobile menu trigger */}
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-brand-silver hover:text-white md:hidden -ml-2 mr-1"
              aria-label="Abrir menú"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo + Brand Name */}
            <div 
              id="brand-logo-container"
              onClick={() => onCategoryClick('all', 'General')} 
              className="flex items-center space-x-2.5 cursor-pointer transition-opacity hover:opacity-95"
            >
              {/* Real Logo Image matching exactly the attached design */}
              <img 
                src={logoImg} 
                alt="Fruto Prohibido Logo" 
                className="h-10 w-10 flex-shrink-0 rounded-full object-cover border border-brand-fuchsia/20 shadow-[0_0_12px_rgba(201,2,83,0.2)]"
                referrerPolicy="no-referrer"
              />
              
              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-xl font-bold tracking-[0.2em] text-white uppercase leading-tight">
                  Fruto Prohibido
                </span>
                <span className="text-[9px] text-brand-fuchsia tracking-[0.3em] uppercase font-semibold leading-none">
                  Sex Shop
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {menuItems.map((item) => (
              <button
                id={`nav-item-${item.id}`}
                key={item.id}
                onClick={() => handleCategoryClick(item.id, item.label)}
                className="px-2.5 py-2 text-xs font-medium tracking-wider uppercase text-brand-silver/80 hover:text-brand-fuchsia hover:bg-white/5 rounded transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Section: Elegant Pink WhatsApp & Catalog Buttons */}
          <div id="header-actions" className="flex items-center space-x-2.5">
            <button
              id="btn-header-catalog"
              onClick={onCatalogClick}
              className="hidden sm:flex items-center gap-1.5 rounded-full border border-brand-fuchsia/50 bg-brand-fuchsia/10 px-4 py-2.5 text-[10px] sm:text-xs font-bold tracking-widest text-white uppercase transition-all duration-300 hover:bg-brand-fuchsia/25 hover:border-brand-fuchsia hover:scale-105 active:scale-95 shadow-md cursor-pointer animate-pulse hover:animate-none"
            >
              <FileDown className="h-3.5 w-3.5 text-brand-fuchsia" />
              Catálogo
            </button>
            <button
              id="btn-header-whatsapp"
              onClick={onWhatsAppClick}
              className="flex items-center gap-1.5 rounded-full bg-brand-fuchsia px-4 py-2.5 text-[10px] sm:text-xs font-bold tracking-widest text-white uppercase transition-all duration-300 hover:bg-brand-fuchsia-hover hover:scale-105 active:scale-95 shadow-md shadow-brand-fuchsia/20 cursor-pointer"
            >
              <MessageSquare className="h-3.5 w-3.5 fill-current" />
              <span className="hidden sm:inline">Asesoría</span> WhatsApp
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu Sibling - Avoids backdrop-filter clipping bug and renders at full device height */}
      {isMobileMenuOpen && (
        <div id="mobile-menu-overlay" className="fixed inset-0 z-50 flex bg-black/95 backdrop-blur-md md:hidden animate-fadeIn">
          <div className="w-[85%] max-w-sm bg-[#070708] border-r border-brand-silver/10 p-6 flex flex-col h-full shadow-2xl relative">
            <div className="flex items-center justify-between mb-8 border-b border-brand-silver/10 pb-4">
              <div className="flex items-center space-x-3">
                {/* Real Logo Image matching exactly the attached design */}
                <img 
                  src={logoImg} 
                  alt="Fruto Prohibido Logo" 
                  className="h-10 w-10 flex-shrink-0 rounded-full object-cover border border-brand-fuchsia/20 shadow-[0_0_12px_rgba(201,2,83,0.3)]"
                  referrerPolicy="no-referrer"
                />
                <span className="font-serif text-lg tracking-[0.2em] text-white uppercase font-bold">Menú</span>
              </div>
              <button 
                id="btn-close-mobile-menu"
                onClick={() => setIsMobileMenuOpen(false)} 
                className="p-1.5 text-brand-silver hover:text-white rounded-full hover:bg-white/10 transition-colors"
                aria-label="Cerrar menú"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Highly visible tabs/links with star icons & custom borders */}
            <nav className="flex flex-col space-y-2.5">
              {menuItems.map((item) => (
                <button
                  id={`mobile-nav-item-${item.id}`}
                  key={item.id}
                  onClick={() => handleCategoryClick(item.id, item.label)}
                  className="group flex items-center justify-between text-left py-3.5 px-5 rounded-lg text-sm font-bold tracking-[0.25em] uppercase text-white hover:text-brand-fuchsia hover:bg-brand-fuchsia/10 transition-all border-l-4 border-transparent hover:border-brand-fuchsia duration-300"
                >
                  <span>{item.label}</span>
                  <span className="text-brand-fuchsia/50 group-hover:text-brand-fuchsia group-hover:scale-125 transition-all duration-300 text-xs">✦</span>
                </button>
              ))}
            </nav>

            <div className="mt-auto border-t border-brand-silver/10 pt-6 space-y-3.5">
              <button
                onClick={() => {
                  onCatalogClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-brand-fuchsia/50 bg-brand-fuchsia/10 text-white text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer hover:bg-brand-fuchsia/20"
              >
                <FileDown className="h-4 w-4 text-brand-fuchsia" />
                Descargar Catálogo PDF
              </button>
              <button
                onClick={() => {
                  onWhatsAppClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-brand-fuchsia hover:bg-brand-fuchsia-hover text-white text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer"
              >
                <MessageSquare className="h-4 w-4 fill-current" />
                Consultar por WhatsApp
              </button>
              <p className="text-[10px] text-brand-silver/40 tracking-widest uppercase text-center">
                Discreción • Calidad • Exclusividad
              </p>
            </div>
          </div>
          
          {/* Close tap target outside */}
          <div className="flex-1 h-full" onClick={() => setIsMobileMenuOpen(false)}></div>
        </div>
      )}
    </>
  );
}

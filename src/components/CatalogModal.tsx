import React, { useState } from 'react';
import { X, ExternalLink, Download, Laptop, Smartphone, BookOpen, Info, ChevronRight, Eye, ShieldCheck, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CatalogModal({ isOpen, onClose }: CatalogModalProps) {
  const [activeGuideTab, setActiveGuideTab] = useState<'mobile' | 'pc'>('mobile');
  const [iframeError, setIframeError] = useState(false);

  if (!isOpen) return null;

  const canvaUrl = "https://www.canva.com/design/DAHEuWANxQE/4rKeIz2a_vQTUIocMf-Btw/view?utm_content=DAHEuWANxQE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h93840d4af8";
  // Convert standard view link to embed link
  const canvaEmbedUrl = "https://www.canva.com/design/DAHEuWANxQE/4rKeIz2a_vQTUIocMf-Btw/view?embed";

  const handleOpenExternal = () => {
    window.open(canvaUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      {/* Absolute backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Main Container - Optimized for responsiveness */}
      <div className="relative w-full max-w-6xl bg-[#09090a] border border-[#2e0210]/20 rounded-2xl shadow-2xl z-10 overflow-hidden flex flex-col lg:flex-row h-[92vh] max-h-[850px] animate-scaleUp">
        
        {/* Glow ambient effects */}
        <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-brand-fuchsia/10 blur-[80px] pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-brand-fuchsia/10 blur-[80px] pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-50 p-2 text-brand-silver/50 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 cursor-pointer border border-white/5 bg-black/40"
          aria-label="Cerrar modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* ========================================== */}
        {/* LEFT PANEL: OPTIONS, INFO & DOWNLOAD GUIDE  */}
        {/* ========================================== */}
        <div className="w-full lg:w-[400px] p-5 sm:p-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#2e0210]/15 overflow-y-auto shrink-0 bg-[#0c0c0e]/95 relative z-10">
          <div className="space-y-5">
            {/* Header Title */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-brand-fuchsia">
                <BookOpen className="h-4.5 w-4.5" />
                <span className="text-[10px] tracking-[0.3em] font-bold uppercase">Catálogo Oficial 2026</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-white tracking-wide leading-tight">
                Colección <span className="font-semibold text-brand-fuchsia italic">Fruto Prohibido</span>
              </h3>
              <p className="text-xs text-[#5a2e3c]/90 font-medium leading-relaxed">
                Explora de forma 100% interactiva nuestra gama de alta selección íntima directamente online o guárdala en tu dispositivo con total privacidad.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-2.5">
              <button
                onClick={handleOpenExternal}
                className="group relative w-full flex items-center justify-center gap-2.5 rounded-xl bg-brand-fuchsia px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-300 hover:bg-[#b00147] hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-brand-fuchsia/15 cursor-pointer overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine" />
                <ExternalLink className="h-4.5 w-4.5" />
                Abrir Catálogo Completo
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-emerald-500 font-bold uppercase tracking-wider py-1 bg-emerald-500/5 rounded-lg border border-emerald-500/10">
                <ShieldCheck className="h-4 w-4" />
                <span>Navegación Segura y Privada</span>
              </div>
            </div>

            {/* Download Guide Area */}
            <div className="border border-[#2e0210]/15 bg-[#111113] rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-[#2e0210]/10 pb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#5a2e3c]/90 flex items-center gap-1.5">
                  <Download className="h-3.5 w-3.5 text-brand-fuchsia" /> ¿Cómo descargar en tu equipo?
                </span>
                
                {/* Guide Tabs */}
                <div className="flex bg-black/40 p-0.5 rounded-md border border-white/5 text-[9px] font-bold">
                  <button
                    onClick={() => setActiveGuideTab('mobile')}
                    className={`px-2 py-1 rounded transition-all cursor-pointer flex items-center gap-1 ${
                      activeGuideTab === 'mobile'
                        ? 'bg-brand-fuchsia text-white'
                        : 'text-brand-silver/50 hover:text-white'
                    }`}
                  >
                    <Smartphone className="h-3 w-3" /> Móvil
                  </button>
                  <button
                    onClick={() => setActiveGuideTab('pc')}
                    className={`px-2 py-1 rounded transition-all cursor-pointer flex items-center gap-1 ${
                      activeGuideTab === 'pc'
                        ? 'bg-brand-fuchsia text-white'
                        : 'text-brand-silver/50 hover:text-white'
                    }`}
                  >
                    <Laptop className="h-3 w-3" /> PC
                  </button>
                </div>
              </div>

              {/* Guide Contents based on active tab */}
              <AnimatePresence mode="wait">
                {activeGuideTab === 'mobile' ? (
                  <motion.div
                    key="mobile-guide"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2.5 text-xs text-brand-silver/80"
                  >
                    <div className="flex items-start gap-2">
                      <span className="h-4.5 w-4.5 rounded-full bg-brand-fuchsia/10 border border-brand-fuchsia/20 flex items-center justify-center text-[10px] font-bold text-brand-fuchsia shrink-0 mt-0.5">1</span>
                      <p className="leading-relaxed">Presiona el botón superior <strong className="text-white">"Abrir Catálogo Completo"</strong>.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="h-4.5 w-4.5 rounded-full bg-brand-fuchsia/10 border border-brand-fuchsia/20 flex items-center justify-center text-[10px] font-bold text-brand-fuchsia shrink-0 mt-0.5">2</span>
                      <p className="leading-relaxed">En la barra inferior de Canva, toca el ícono de <strong className="text-white">tres puntos (...)</strong> o el botón de <strong className="text-white">Compartir/Descargar</strong>.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="h-4.5 w-4.5 rounded-full bg-brand-fuchsia/10 border border-brand-fuchsia/20 flex items-center justify-center text-[10px] font-bold text-brand-fuchsia shrink-0 mt-0.5">3</span>
                      <p className="leading-relaxed">Selecciona <strong className="text-white">Descargar</strong> y elige formato <strong className="text-white">PDF Estándar</strong> para tenerlo siempre en tu teléfono.</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="pc-guide"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2.5 text-xs text-brand-silver/80"
                  >
                    <div className="flex items-start gap-2">
                      <span className="h-4.5 w-4.5 rounded-full bg-brand-fuchsia/10 border border-brand-fuchsia/20 flex items-center justify-center text-[10px] font-bold text-brand-fuchsia shrink-0 mt-0.5">1</span>
                      <p className="leading-relaxed">Haz clic en <strong className="text-white">"Abrir Catálogo Completo"</strong> para verlo en pantalla completa.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="h-4.5 w-4.5 rounded-full bg-brand-fuchsia/10 border border-brand-fuchsia/20 flex items-center justify-center text-[10px] font-bold text-brand-fuchsia shrink-0 mt-0.5">2</span>
                      <p className="leading-relaxed">En la esquina superior derecha del visor de Canva, haz clic en el ícono de <strong className="text-white">Descargar / Compartir</strong>.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="h-4.5 w-4.5 rounded-full bg-brand-fuchsia/10 border border-brand-fuchsia/20 flex items-center justify-center text-[10px] font-bold text-brand-fuchsia shrink-0 mt-0.5">3</span>
                      <p className="leading-relaxed">Elige la opción <strong className="text-white">PDF Estándar</strong> o <strong className="text-white">PDF para Impresión</strong> para guardarlo con la máxima definición.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#2e0210]/10 flex flex-col items-center text-center space-y-1">
            <span className="text-[10px] text-brand-silver/40 tracking-wider uppercase font-bold">
              Fruto Prohibido • Boutique Exclusive
            </span>
            <p className="text-[9px] text-[#5a2e3c]/70 font-semibold max-w-[250px]">
              Toda la información personal y de consulta de este catálogo queda protegida bajo estricta reserva de datos.
            </p>
          </div>
        </div>

        {/* ========================================== */}
        {/* RIGHT PANEL: LIVE INTERACTIVE CANVA EMBED  */}
        {/* ========================================== */}
        <div className="flex-1 bg-black flex flex-col relative overflow-hidden min-h-[300px] lg:min-h-0">
          
          {/* Top Panel Actions for the Viewer */}
          <div className="bg-[#0c0c0e] border-b border-[#2e0210]/10 px-4 py-3 flex items-center justify-between z-10 shrink-0">
            <div className="flex items-center space-x-2 text-xs text-brand-silver/60">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-semibold tracking-wide flex items-center gap-1">
                <Eye className="h-3.5 w-3.5 text-brand-fuchsia" /> Visor Interactivo Online
              </span>
            </div>
            
            <button
              onClick={handleOpenExternal}
              className="text-[10px] uppercase font-bold tracking-widest text-brand-silver/60 hover:text-white transition-colors flex items-center gap-1 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/5 cursor-pointer"
            >
              <span>Pantalla Completa</span>
              <ExternalLink className="h-3 w-3" />
            </button>
          </div>

          {/* Canva Embedded IFrame Viewer */}
          <div className="flex-1 w-full h-full relative bg-[#141416]">
            {!iframeError ? (
              <iframe
                src={canvaEmbedUrl}
                title="Catálogo Interactivo Fruto Prohibido"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen
                allow="fullscreen"
                referrerPolicy="no-referrer"
                onError={() => setIframeError(true)}
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-4">
                <div className="p-4 bg-brand-fuchsia/5 rounded-full border border-brand-fuchsia/15">
                  <Info className="h-8 w-8 text-brand-fuchsia" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">¿Problemas para cargar el visor interactivo?</h4>
                <p className="text-xs text-brand-silver/60 max-w-sm leading-relaxed">
                  Algunos navegadores bloquean la incrustación interactiva de Canva por motivos de seguridad. No te preocupes, puedes acceder directamente al visor online en alta definición.
                </p>
                <button
                  onClick={handleOpenExternal}
                  className="rounded-lg bg-brand-fuchsia px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#b00147] transition-all cursor-pointer"
                >
                  Abrir Catálogo en Canva
                </button>
              </div>
            )}
          </div>

          {/* Bottom subtle bar */}
          <div className="bg-[#0c0c0e] border-t border-white/5 px-4 py-2 flex items-center justify-between text-[10px] text-brand-silver/40 shrink-0">
            <span>Visor optimizado para PC, tablets y móviles</span>
            <span className="font-serif italic text-brand-fuchsia/80 font-bold">La elegancia del placer</span>
          </div>

        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import AppleWatermark from './AppleWatermark';

export default function ContactSection() {
  const address = "Pasaje Purapel, Los Robles, Cauquenes, Región del Maule, Chile";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const phone = "+56 9 7377 0617";
  const whatsappUrl = "https://wa.me/56973770617";
  const email = "sfrutoprohibido@gmail.com";
  const hours = "Lun a Sáb · 10:00 a 20:00 hrs";

  return (
    <section id="contact-section" className="py-24 bg-[#eed1d1] border-t border-[#2e0210]/15 relative overflow-hidden">
      
      {/* Rose apple watermark inside ContactSection */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <AppleWatermark size="850px" opacity={0.18} className="max-w-[95%]" />
      </div>

      {/* Light glow effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-fuchsia/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] rounded-full bg-brand-fuchsia/5 blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Header with motion animation */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-3 overflow-hidden">
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-[11px] font-semibold tracking-[0.3em] text-brand-fuchsia uppercase"
          >
            CONEXIÓN DIRECTA
          </motion.p>
          <motion.h3 
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="font-serif text-3xl font-medium tracking-tight text-[#2e0210] md:text-4xl"
          >
            Contacto y Asesoría Íntima
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="text-sm text-[#5a2e3c]/90 font-medium tracking-wide"
          >
            Estamos aquí para resolver tus inquietudes con absoluta discreción, respeto y profesionalismo.
          </motion.p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Details Panel (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white/65 border border-[#2e0210]/15 hover:border-brand-fuchsia/50 hover:bg-white/95 hover:shadow-[0_12px_30px_rgba(46,2,16,0.1)] rounded-xl p-8 sm:p-10 space-y-8 transition-all duration-500">
            <div className="space-y-6">
              <h4 className="font-serif text-xl font-medium text-[#2e0210] tracking-wide">
                Información de la Boutique
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Telephone / WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded bg-brand-fuchsia/10 text-brand-fuchsia flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="h-4.5 w-4.5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] uppercase tracking-widest font-bold text-brand-fuchsia">Teléfono & WhatsApp</span>
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-[#2e0210] font-bold hover:text-brand-fuchsia transition-colors"
                    >
                      {phone}
                    </a>
                    <span className="block text-[10px] text-[#5a2e3c]/75 font-semibold">WhatsApp activo para consultas rápidas</span>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded bg-brand-fuchsia/10 text-brand-fuchsia flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] uppercase tracking-widest font-bold text-brand-fuchsia">Correo Electrónico</span>
                    <a 
                      href={`mailto:${email}`}
                      className="block text-sm text-[#2e0210] font-bold hover:text-brand-fuchsia transition-colors break-all"
                    >
                      {email}
                    </a>
                    <span className="block text-[10px] text-[#5a2e3c]/75 font-semibold">Atención confidencial de consultas</span>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded bg-brand-fuchsia/10 text-brand-fuchsia flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="h-4.5 w-4.5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] uppercase tracking-widest font-bold text-brand-fuchsia">Horario de Atención</span>
                    <span className="block text-sm text-[#2e0210] font-bold">
                      {hours}
                    </span>
                    <span className="block text-[10px] text-[#5a2e3c]/75 font-semibold">Respuestas rápidas en este horario</span>
                  </div>
                </div>

                {/* Address details */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded bg-brand-fuchsia/10 text-brand-fuchsia flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="h-4.5 w-4.5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] uppercase tracking-widest font-bold text-brand-fuchsia">Ubicación Física</span>
                    <span className="block text-sm text-[#2e0210] font-bold leading-relaxed">
                      Psje. Purapel, Los Robles, Cauquenes
                    </span>
                    <span className="block text-[10px] text-[#5a2e3c]/75 font-semibold">Región del Maule, Chile</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-4 border-t border-[#2e0210]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs text-[#2e0210] font-bold">¿Prefieres asesoría instantánea?</p>
                <p className="text-[11px] text-[#5a2e3c]/85 font-semibold">Haz clic para chatear directamente con nuestro equipo real.</p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-fuchsia px-6 py-3 text-xs font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:bg-brand-fuchsia-hover hover:scale-[1.03] active:scale-95 shadow-md shadow-brand-fuchsia/20 cursor-pointer"
              >
                <MessageSquare className="h-4 w-4" />
                Escríbenos por WhatsApp
              </a>
            </div>

          </div>

          {/* Map Card representation (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white/65 border border-[#2e0210]/15 hover:border-brand-fuchsia/50 hover:bg-white/95 hover:shadow-[0_12px_30px_rgba(46,2,16,0.1)] rounded-xl overflow-hidden p-6 sm:p-8 space-y-6 transition-all duration-500">
            <div className="space-y-3">
              <span className="text-[9px] font-semibold tracking-widest text-brand-fuchsia uppercase bg-brand-fuchsia/5 border border-brand-fuchsia/10 px-2 py-1 rounded">MAPA DE GOOGLE</span>
              <h4 className="font-serif text-lg font-medium text-[#2e0210] tracking-wide">
                Nuestra Dirección
              </h4>
              <p className="text-xs text-[#5a2e3c]/90 font-medium leading-relaxed">
                Estamos localizados en un punto sumamente discreto y privado en la comuna de Cauquenes para tu absoluta comodidad y tranquilidad.
              </p>
            </div>

            {/* Simulated mini stylized map placeholder with button link */}
            <div className="relative rounded-lg overflow-hidden border border-[#2e0210]/15 h-44 bg-white/40 flex flex-col items-center justify-center p-4 text-center space-y-3 group">
              {/* Background styling for the map */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ff007f_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
              
              {/* Marker Icon */}
              <div className="h-10 w-10 rounded-full bg-brand-fuchsia/20 border border-brand-fuchsia/40 flex items-center justify-center animate-bounce z-10">
                <MapPin className="h-5 w-5 text-brand-fuchsia" />
              </div>

              <div className="z-10">
                <p className="text-xs text-[#2e0210] font-bold">Cauquenes, Región del Maule</p>
                <p className="text-[10px] text-[#5a2e3c]/85 font-semibold mt-0.5">Psje Purapel, Los Robles</p>
              </div>

              <div className="absolute inset-0 bg-[#2e0210]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <span className="text-xs text-white font-bold tracking-widest uppercase flex items-center gap-1 bg-brand-fuchsia px-3 py-1.5 rounded-md border border-brand-fuchsia/30">
                  Ver Mapa <ExternalLink className="h-3 w-3" />
                </span>
              </div>
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-[#2e0210]/20 bg-white/40 hover:border-brand-fuchsia hover:bg-brand-fuchsia/10 text-xs font-semibold tracking-widest text-[#2e0210] uppercase transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <ExternalLink className="h-4 w-4" />
              Abrir en Google Maps
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

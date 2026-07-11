import React, { useState } from 'react';
import { FAQS } from '../data/products';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';
import AppleWatermark from './AppleWatermark';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="relative py-24 bg-[#eed1d1] border-t border-[#2e0210]/15 overflow-hidden">
      
      {/* Rose apple watermark inside FAQ */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <AppleWatermark size="800px" opacity={0.18} className="max-w-[95%]" />
      </div>

      <div className="mx-auto max-w-3xl px-6 relative z-10">
        
        {/* Header with motion animation */}
        <div id="faq-header" className="text-center mb-16 space-y-3 overflow-hidden">
          <motion.h3 
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="font-serif text-3xl font-medium tracking-tight text-[#2e0210] md:text-4xl"
          >
            Preguntas Frecuentes
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="text-sm text-[#5a2e3c]/90 font-medium tracking-wider"
          >
            Respuestas discretas a tus inquietudes de envío, servicio y privacidad.
          </motion.p>
        </div>

        {/* Accordions */}
        <div id="faq-accordion-container" className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                id={`faq-item-${idx}`}
                key={idx}
                className="rounded-lg overflow-hidden border transition-all duration-300 bg-white/65 hover:bg-white/90"
                style={{
                  borderColor: isOpen ? 'rgba(201, 2, 83, 0.6)' : 'rgba(46, 2, 16, 0.15)'
                }}
              >
                {/* Accordion Trigger Header Button */}
                <button
                  id={`faq-trigger-${idx}`}
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-black/5 cursor-pointer"
                >
                  <span className="font-sans text-xs sm:text-sm font-semibold tracking-widest text-[#2e0210] uppercase">
                    {faq.question}
                  </span>
                  
                  {isOpen ? (
                    <ChevronUp className="h-4.5 w-4.5 text-brand-fuchsia flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="h-4.5 w-4.5 text-[#5a2e3c]/60 flex-shrink-0 ml-4" />
                  )}
                </button>

                {/* Expanded Answer Panel */}
                <div
                  id={`faq-answer-panel-${idx}`}
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-60 border-t border-[#2e0210]/10' : 'max-h-0'
                  }`}
                >
                  <p className="p-5 text-xs sm:text-sm leading-relaxed text-[#5a2e3c] font-medium tracking-wide bg-white/45">
                    {faq.answer}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

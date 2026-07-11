import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import History from './components/History';
import Collections from './components/Collections';
import TrustBadges from './components/TrustBadges';
import GoogleReviews from './components/GoogleReviews';
import FAQ from './components/FAQ';
import CtaSection from './components/CtaSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ConciergeChat from './components/ConciergeChat';
import InquiryModal from './components/InquiryModal';
import CatalogModal from './components/CatalogModal';

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [inquiryCategory, setInquiryCategory] = useState<{ id: string; label: string } | undefined>(undefined);

  const handleOpenInquiry = (categoryId: string, categoryLabel: string) => {
    if (categoryId === 'all') {
      setInquiryCategory(undefined);
    } else {
      setInquiryCategory({ id: categoryId, label: categoryLabel });
    }
    setIsInquiryOpen(true);
  };

  const handleWhatsAppGeneralClick = () => {
    const text = 'Hola Fruto Prohibido. Me comunico desde su sitio web. Me gustaría recibir asesoría personalizada y discreta de sus productos. ¡Muchas gracias!';
    window.open(`https://wa.me/56973770617?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-brand-dark bg-gradient-animated text-brand-silver font-sans selection:bg-brand-fuchsia selection:text-white overflow-x-hidden antialiased">
      
      {/* Upper Navigation Header */}
      <Header
        onCategoryClick={handleOpenInquiry}
        onWhatsAppClick={handleWhatsAppGeneralClick}
        onCatalogClick={() => setIsCatalogOpen(true)}
      />

      {/* Main Content Layout with top padding for fixed header */}
      <main className="pt-20">
        {/* Intro Hero banner */}
        <Hero
          onExploreClick={() => {
            const el = document.getElementById('collections-section');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onWhatsAppClick={handleWhatsAppGeneralClick}
          onCatalogClick={() => setIsCatalogOpen(true)}
        />

        {/* History Details */}
        <History />

        {/* Categories grid */}
        <Collections onCategoryClick={handleOpenInquiry} />

        {/* Trust metrics & ¿Por qué elegir FRUTO PROHIBIDO? */}
        <TrustBadges />

        {/* Real 5-star Google reviews with custom hover motions & glow effects */}
        <GoogleReviews />

        {/* Contact info, physical location address & interactive Google Maps */}
        <ContactSection />

        {/* Collapsible FAQ accordions */}
        <FAQ />

        {/* Elegant final decision call-to-action banner */}
        <CtaSection />
      </main>

      {/* Bottom Legal footer */}
      <Footer
        onSelectCategory={(catId) => {
          if (catId === 'all') {
            const el = document.getElementById('history-section');
            el?.scrollIntoView({ behavior: 'smooth' });
          } else {
            handleOpenInquiry(catId, catId.charAt(0).toUpperCase() + catId.slice(1));
          }
        }}
        onWhatsAppClick={handleWhatsAppGeneralClick}
        onCatalogClick={() => setIsCatalogOpen(true)}
      />

      {/* Doubts and Consultation Inquiry Modal popup */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        categoryName={inquiryCategory?.label}
        categoryId={inquiryCategory?.id}
      />

      {/* Catalog Downloader Modal popup */}
      <CatalogModal
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
      />

      {/* AI Private Assistant Concierge Balloon */}
      <ConciergeChat />

    </div>
  );
}

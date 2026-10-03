import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroBanner from './components/hero/HeroBanner';
import LookbookSection from './components/home/LookbookSection';
import HowToRentSection from './components/home/HowToRentSection';
import StoryAndReservation from './components/home/StoryAndReservation';
import BlogAndContact from './components/home/BlogAndContact';
import LocationSection from './components/home/LocationSection';
import ProductDetailModal from './components/catalog/ProductDetailModal';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const closeDetailModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="relative min-h-screen font-body overflow-x-hidden selection:bg-accent selection:text-white">
      {/* Global Background Layer for Desktop Split */}
      <div className="hidden md:block fixed inset-0 z-[-1] pointer-events-none">
        <div className="w-full h-full bg-split-desktop"></div>
      </div>
      
      {/* Mobile background */}
      <div className="md:hidden fixed inset-0 z-[-1] pointer-events-none bg-light"></div>

      <Navbar />
      
      <main>
        <HeroBanner />
        <LookbookSection />
        <HowToRentSection />
        <StoryAndReservation onSelectItem={handleSelectItem} />
        <LocationSection />
        <BlogAndContact />
      </main>

      <Footer />
      <FloatingWhatsApp />

      {/* Product Detail Modal */}
      {selectedItem && (
        <ProductDetailModal 
          item={selectedItem} 
          onClose={closeDetailModal} 
        />
      )}
    </div>
  );
}

export default App;

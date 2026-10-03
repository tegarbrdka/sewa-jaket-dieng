import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after scrolling down 300px
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-90 pointer-events-none'
      }`}
    >
      <a 
        href="https://wa.me/6285728313331?text=Halo%20Outfit%20Dieng!%20👋%20Saya%20tertarik%20sewa%20jaket%20import%20premium." 
        target="_blank" 
        rel="noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 group"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={32} className="relative z-10" />
        
        {/* Hover Text Tooltip */}
        <div className="absolute right-full mr-4 bg-white text-dark font-heading font-bold text-sm px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Chat Admin! 👋
          {/* Tooltip Arrow */}
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>
        </div>

        {/* Pulse effect */}
        <span className="absolute inset-0 w-full h-full bg-[#25D366] rounded-full animate-ping opacity-20"></span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;

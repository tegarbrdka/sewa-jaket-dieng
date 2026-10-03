import React, { useState, useEffect, useCallback } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const allLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Lookbook', href: '#lookbook' },
    { name: 'Katalog', href: '#katalog' },
    { name: 'Cara Sewa', href: '#cara-sewa' },
    { name: 'Hubungi Kami', href: '#contact' },
  ];

  const navLinksDay = allLinks.slice(0, 3);
  const navLinksNight = allLinks.slice(3);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 md:py-4' : 'py-4 md:py-8'
      }`}>
        {/* Glassmorphism BG */}
        <div className={`absolute inset-0 transition-all duration-300 ${
          isScrolled
            ? 'opacity-100 bg-[#0d0c1e]/90 md:bg-gradient-to-r md:from-light/85 md:from-50% md:to-dark/85 md:to-50% backdrop-blur-md shadow-md border-b border-white/10'
            : 'opacity-0'
        }`} />

        <div className="container mx-auto px-5 md:px-8 flex justify-between items-center relative z-10">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="Outfit Dieng"
              className="h-10 md:h-20 w-auto object-contain rounded-md"
            />
            <span className="hidden md:block text-[10px] tracking-widest text-white/60 md:text-dark/70 font-semibold uppercase leading-tight max-w-[140px]">
              Outfit Dieng<br />Wonosobo
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-between items-center px-4 md:px-12 lg:px-20">
            <div className="flex space-x-4 lg:space-x-8">
              {navLinksDay.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-dark hover:text-accent transition-colors font-display text-base lg:text-lg tracking-wide font-medium"
                >
                  {link.name.toUpperCase()}
                </a>
              ))}
            </div>
            <div className="flex space-x-4 lg:space-x-8">
              {navLinksNight.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-accent transition-colors font-display text-base lg:text-lg tracking-wide font-medium"
                >
                  {link.name.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop WA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/6285728313331?text=Halo%20Outfit%20Dieng,%20saya%20mau%20tanya%20sewa%20jaket"
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#1DA851] text-white font-heading font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 hover:shadow-[#25D366]/30 transform hover:-translate-y-0.5"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Tanya WA Admin
            </a>
          </div>

          {/* ─── MOBILE HAMBURGER ─── */}
          <button
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${
              isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''
            }`} />
            <span className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${
              isMenuOpen ? 'opacity-0 scale-0' : ''
            }`} />
            <span className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${
              isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''
            }`} />
          </button>
        </div>
      </nav>

      {/* ══════════════════════════════════
          MOBILE SLIDE-OVER MENU
      ══════════════════════════════════ */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm fade-backdrop md:hidden"
            onClick={closeMenu}
          />

          {/* Slide-over panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm bg-[#0d0c1e] slide-over-enter md:hidden flex flex-col">

            {/* Top — branding */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img src="/images/logo.png" alt="Outfit Dieng" className="h-10 w-auto rounded-md" />
                <div>
                  <p className="text-white font-heading font-bold text-sm uppercase tracking-wider">Outfit Dieng</p>
                  <p className="text-white/30 text-[9px] font-mono tracking-widest">WONOSOBO</p>
                </div>
              </div>
              <button
                onClick={closeMenu}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60"
                aria-label="Close menu"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 px-6 py-8 flex flex-col gap-1 overflow-y-auto">
              {allLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex items-center justify-between py-4 border-b border-white/5 transition-colors"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-white/20 text-xs font-mono w-6">0{i + 1}</span>
                    <span className="text-white font-heading font-bold text-xl uppercase tracking-wide group-hover:text-accent transition-colors">
                      {link.name}
                    </span>
                  </div>
                  <svg className="w-4 h-4 text-white/20 group-hover:text-accent group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Bottom — WA CTA */}
            <div className="px-6 py-6 border-t border-white/10 bg-white/[0.02]">
              <a
                href="https://wa.me/6285728313331?text=Halo%20Outfit%20Dieng,%20saya%20mau%20tanya%20sewa%20jaket"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white font-heading font-bold text-sm uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-[#25D366]/20 transition-all"
              >
                <FaWhatsapp className="text-xl" />
                Chat Admin 24 Jam
              </a>
              <p className="text-white/20 text-[10px] font-mono text-center mt-3 tracking-wider">
                SEWA JAKET DIENG · WONOSOBO
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;

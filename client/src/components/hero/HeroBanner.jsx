import React, { useEffect, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const HeroBanner = () => {
  const counterRef = useRef([]);

  useEffect(() => {
    const targets = [
      { val: '500', suffix: '+' },
      { val: '4.9', suffix: '★' },
      { val: '24', suffix: 'H' },
    ];
    targets.forEach(({ val, suffix }, i) => {
      const el = counterRef.current[i];
      if (!el) return;
      let start = 0;
      const end = parseFloat(val);
      const isFloat = !Number.isInteger(end);
      const step = end / 40;
      const timer = setInterval(() => {
        start = Math.min(start + step, end);
        el.textContent = (isFloat ? start.toFixed(1) : Math.floor(start)) + suffix;
        if (start >= end) clearInterval(timer);
      }, 30);
    });
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#0d0c1e]">

      {/* ─── BACKGROUND (shared) ─── */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Gunung Prau — Dieng Plateau"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.38) saturate(1.15)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c1e] via-[#0d0c1e]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c1e]/85 via-[#0d0c1e]/15 to-transparent" />
      </div>

      {/* ══════════════════════════════════
          MOBILE LAYOUT  (< md)
          Stacked: navbar space → headline → models image → stats+CTA
      ══════════════════════════════════ */}
      <div className="md:hidden relative z-10 flex flex-col min-h-screen">

        {/* Top spacer for navbar */}
        <div className="h-24 flex-shrink-0" />

        {/* Location overline */}
        <div className="px-6 mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F36F38] animate-pulse flex-shrink-0" />
          <span className="text-white/50 text-[10px] font-mono tracking-[0.2em] uppercase">
            Wonosobo · Jawa Tengah
          </span>
        </div>

        {/* Headline */}
        <div className="px-6">
          <h1 className="font-display leading-[0.88] tracking-tighter text-white">
            <span className="block font-bold uppercase text-5xl">SEWA JAKET</span>
            <span
              className="block font-bold uppercase"
              style={{
                fontSize: 'clamp(4.5rem, 22vw, 7rem)',
                WebkitTextStroke: '2px #F36F38',
                color: 'transparent',
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }}
            >
              DIENG
            </span>
            <span className="block font-normal uppercase text-white/45 tracking-[0.15em] text-sm mt-2">
              Hangat · Stylish · Siap Pakai
            </span>
          </h1>
        </div>

        {/* Models image — MOBILE: fills available space */}
        <div className="relative flex-1 w-full mt-4 flex items-end justify-end overflow-hidden">
          <img
            src="/images/hero-models.png"
            alt="Models wearing jackets at Dieng"
            className="w-[85%] max-w-[340px] h-auto object-contain object-bottom pointer-events-none"
            style={{
              maskImage: 'linear-gradient(to left, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, black 80%, transparent 100%)',
            }}
          />
          {/* Left fade so image blends nicely */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c1e] via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Stats + CTA */}
        <div className="px-6 py-6 mt-auto border-t border-white/10">
          {/* Stats */}
          <div className="flex items-center gap-6 mb-5">
            {[
              { i: 0, label: 'Koleksi' },
              { i: 1, label: 'Rating' },
              { i: 2, label: 'Jam' },
            ].map(({ i, label }) => (
              <div key={i}>
                <p
                  ref={el => (counterRef.current[i] = el)}
                  className="font-display font-bold text-white text-2xl leading-none"
                >
                  —
                </p>
                <p className="text-white/35 text-[9px] font-mono uppercase tracking-widest mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <a
              href="#katalog"
              className="flex-1 text-center bg-[#F36F38] hover:bg-[#d4501a] text-white font-heading font-bold uppercase text-[11px] tracking-[0.1em] py-3.5 transition-all duration-200"
            >
              Jelajahi Koleksi
            </a>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Outfit%20Dieng,%20saya%20tertarik%20sewa%20jaket"
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 border border-white/25 text-white/80 font-heading font-bold uppercase text-[11px] tracking-[0.1em] py-3.5 transition-all duration-200"
            >
              <FaWhatsapp className="text-[#25D366]" />
              Tanya Admin
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          DESKTOP LAYOUT  (≥ md)
          Full-screen, content pinned bottom-left, models absolute right
      ══════════════════════════════════ */}
      <div className="hidden md:flex flex-col justify-end min-h-screen relative z-10 px-24 lg:px-32 pb-20 pt-24">

        {/* Left vertical rule */}
        <div className="absolute left-10 top-0 bottom-0 flex flex-col items-center py-24 gap-4 pointer-events-none">
          <div className="w-px flex-1 bg-white/10" />
          <span
            className="text-white/20 text-[8px] font-mono tracking-[0.4em] uppercase select-none"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            OUTFIT DIENG — EST. 2026
          </span>
          <div className="w-px flex-1 bg-white/10" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute right-8 bottom-14 flex flex-col items-center gap-3 pointer-events-none">
          <span className="text-white/25 text-[8px] font-mono tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>
            Scroll
          </span>
          <div className="w-px h-14 bg-white/15 relative overflow-hidden rounded-full">
            <div
              className="absolute top-0 left-0 w-full rounded-full"
              style={{ height: '40%', background: 'rgba(243,111,56,0.8)', animation: 'heroScrollLine 2s cubic-bezier(0.4,0,0.6,1) infinite' }}
            />
          </div>
        </div>

        {/* Location badge top-right */}
        <div className="absolute top-28 right-20 flex flex-col items-end gap-2 pointer-events-none">
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-white/10 text-white/60 px-3.5 py-2 text-[10px] font-mono tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F36F38]" />
            DATARAN TINGGI DIENG
          </div>
          <p className="text-white/20 text-[9px] font-mono tracking-wider">7°12′S · 109°54′E</p>
        </div>

        {/* Location overline */}
        <div className="mb-6 flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F36F38] animate-pulse flex-shrink-0" />
          <span className="text-white/45 text-[11px] font-mono tracking-[0.22em] uppercase">
            Wonosobo · Jawa Tengah · Indonesia
          </span>
          <div className="h-px w-16 bg-white/15 flex-shrink-0" />
          <span className="text-white/20 text-[11px] font-mono">'26</span>
        </div>

        {/* Headline */}
        <div className="max-w-4xl xl:max-w-5xl">
          <h1 className="font-display leading-[0.88] tracking-tighter text-white">
            <span className="block font-bold uppercase" style={{ fontSize: 'clamp(3rem, 8.5vw, 7.5rem)' }}>
              SEWA JAKET
            </span>
            <span
              className="block font-bold uppercase"
              style={{
                fontSize: 'clamp(4.5rem, 13vw, 12rem)',
                WebkitTextStroke: '2px #F36F38',
                color: 'transparent',
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }}
            >
              DIENG
            </span>
            <span
              className="block font-normal uppercase text-white/50 tracking-[0.18em] mt-2"
              style={{ fontSize: 'clamp(0.85rem, 2vw, 1.4rem)' }}
            >
              Hangat · Stylish · Siap Pakai
            </span>
          </h1>
        </div>

        {/* Bottom bar: Stats + CTA */}
        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col xl:flex-row items-start xl:items-center justify-start gap-8 xl:gap-16 max-w-[60%]">
          {/* Stats */}
          <div className="flex items-center gap-12">
            {[
              { i: 0, label: 'Koleksi Jaket' },
              { i: 1, label: 'Google Rating' },
              { i: 2, label: 'Jam Layanan' },
            ].map(({ i, label }) => (
              <div key={i}>
                <p
                  ref={el => (counterRef.current[i] = el)}
                  className="font-display font-bold text-white leading-none"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
                >
                  —
                </p>
                <p className="text-white/35 text-[9px] font-mono uppercase tracking-[0.18em] mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="#katalog"
              className="group inline-flex items-center gap-3 bg-[#F36F38] hover:bg-[#d4501a] text-white font-heading font-bold uppercase text-[11px] tracking-[0.12em] px-7 py-4 transition-all duration-200 hover:-translate-y-px"
            >
              Jelajahi Koleksi
              <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Outfit%20Dieng,%20saya%20tertarik%20sewa%20jaket"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-heading font-bold uppercase text-[11px] tracking-[0.12em] px-7 py-4 transition-all duration-200 hover:bg-white/5"
            >
              <FaWhatsapp className="text-[#25D366] text-base" />
              Tanya Admin
            </a>
          </div>
        </div>
      </div>

      {/* Models image — DESKTOP ONLY, absolute right, blending left */}
      <div className="absolute bottom-0 right-0 w-[44%] max-w-[580px] h-[90%] hidden md:block z-10 pointer-events-none">
        <img
          src="/images/hero-models.png"
          alt="Models wearing jackets at Dieng Plateau"
          className="w-full h-full object-contain object-bottom"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 28%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 28%)',
          }}
        />
      </div>

      <style>{`
        @keyframes heroScrollLine {
          0%   { transform: translateY(-100%); opacity: 0.9; }
          70%  { opacity: 0.9; }
          100% { transform: translateY(280%); opacity: 0; }
        }
      `}</style>

    </section>
  );
};

export default HeroBanner;

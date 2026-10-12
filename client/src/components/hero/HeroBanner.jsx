import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';

const HeroBanner = () => {
  const [counts, setCounts] = useState({
    koleksi: 0,
    rating: '0.0',
    jam: 0,
  });

  useEffect(() => {
    let frame = 0;
    const totalFrames = 35;
    const interval = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts({
        koleksi: Math.floor(ease * 500),
        rating: (ease * 4.9).toFixed(1),
        jam: Math.floor(ease * 24),
      });

      if (frame >= totalFrames) clearInterval(interval);
    }, 28);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-[#0d0c1e] flex flex-col justify-between">

      {/* ─── BACKGROUND (Mountains + cinematic overlay) ─── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src="/images/hero-bg.jpg"
          alt="Gunung Prau — Dieng Plateau"
          className="w-full h-full object-cover object-center scale-105"
          style={{ filter: 'brightness(0.36) saturate(1.2)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c1e] via-[#0d0c1e]/40 to-[#0d0c1e]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c1e]/90 via-[#0d0c1e]/40 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#F36F38]/12 blur-[130px] rounded-full" />
      </div>

      {/* ══════════════════════════════════════════════════════
          MOBILE VIEW  (< md)
          Well-proportioned family hero photo + compact action
      ══════════════════════════════════════════════════════ */}
      <div className="md:hidden relative z-10 flex flex-col justify-between min-h-[100svh] px-5 pt-20 pb-5">

        {/* 1. Header & Typography */}
        <div className="text-center pt-1">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full mb-2.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F36F38] animate-pulse" />
            <span className="text-white/70 text-[10px] font-mono tracking-widest uppercase">
              Wonosobo · Dataran Tinggi Dieng
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display leading-[0.88] tracking-tight text-white flex flex-col items-center">
            <span className="font-bold uppercase text-[2.2rem] tracking-tight">
              SEWA JAKET
            </span>
            <span
              className="font-bold uppercase text-[4rem] my-0.5 tracking-tight"
              style={{
                WebkitTextStroke: '1.5px #F36F38',
                color: 'transparent',
                textShadow: '0 0 25px rgba(243,111,56,0.3)',
                lineHeight: 0.95,
              }}
            >
              DIENG
            </span>
            <span className="font-bold uppercase text-white/95 text-[1.5rem] tracking-wide" style={{ lineHeight: 1 }}>
              VIA WONOSOBO
            </span>
          </h1>

          <p className="text-white/60 text-xs font-body mt-2 max-w-[290px] mx-auto leading-relaxed">
            Rental jaket gunung & perlengkapan outdoor hangat, bersih, dan stylish.
          </p>
        </div>

        {/* 2. Model Family Showcase (Mobile) */}
        <div className="relative my-auto flex items-end justify-center py-1">
          {/* Subtle warm halo */}
          <div className="absolute w-64 h-64 bg-[#F36F38]/20 blur-3xl rounded-full -z-10" />

          {/* The Family Photo - prominent and well-proportioned */}
          <img
            src="/images/hero-models.png"
            alt="Outfit Dieng Models"
            className="w-auto h-[44svh] max-h-[380px] object-contain object-bottom drop-shadow-[0_16px_32px_rgba(0,0,0,0.85)]"
            style={{
              maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
            }}
          />
        </div>

        {/* 3. Stats & CTA Buttons */}
        <div className="w-full space-y-3">
          {/* Glass Stats Bar */}
          <div className="grid grid-cols-3 gap-2 bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-xl py-2 px-3 text-center">
            <div>
              <p className="font-display font-bold text-white text-xl leading-none">
                {counts.koleksi}+
              </p>
              <p className="text-white/40 text-[9px] font-mono uppercase tracking-wider mt-1">Koleksi</p>
            </div>
            <div className="border-x border-white/10">
              <p className="font-display font-bold text-white text-xl leading-none">
                {counts.rating}★
              </p>
              <p className="text-white/40 text-[9px] font-mono uppercase tracking-wider mt-1">Rating</p>
            </div>
            <div>
              <p className="font-display font-bold text-white text-xl leading-none">
                {counts.jam}H
              </p>
              <p className="text-white/40 text-[9px] font-mono uppercase tracking-wider mt-1">Layanan</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-2.5">
            <a
              href="#katalog"
              className="flex-1 flex items-center justify-center gap-2 bg-[#F36F38] hover:bg-[#d4501a] active:scale-[0.98] text-white font-heading font-bold uppercase text-xs tracking-wider py-3.5 rounded-lg shadow-lg shadow-[#F36F38]/25 transition-all"
            >
              Jelajahi Koleksi
              <FaArrowRight className="text-[10px]" />
            </a>
            <a
              href="https://wa.me/6285728313331?text=Halo%20Outfit%20Dieng,%20saya%20tertarik%20sewa%20jaket"
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 active:scale-[0.98] text-white/90 font-heading font-bold uppercase text-xs tracking-wider py-3.5 rounded-lg transition-all"
            >
              <FaWhatsapp className="text-[#25D366] text-base" />
              Tanya Admin
            </a>
          </div>
        </div>

      </div>


      {/* ══════════════════════════════════════════════════════
          DESKTOP VIEW  (≥ md)
          Cinematic layout with hero model anchored on right
      ══════════════════════════════════════════════════════ */}
      <div className="hidden md:flex flex-col justify-end min-h-screen relative z-10 px-12 lg:px-20 xl:px-28 pb-16 pt-28">

        {/* Left vertical rule */}
        <div className="absolute left-6 lg:left-8 top-0 bottom-0 flex flex-col items-center py-24 gap-4 pointer-events-none">
          <div className="w-px flex-1 bg-white/10" />
          <span
            className="text-white/25 text-[8px] font-mono tracking-[0.4em] uppercase select-none"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            OUTFIT DIENG — EST. 2026
          </span>
          <div className="w-px flex-1 bg-white/10" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute right-8 bottom-12 flex flex-col items-center gap-3 pointer-events-none z-20">
          <span className="text-white/30 text-[8px] font-mono tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>
            Scroll
          </span>
          <div className="w-px h-12 bg-white/15 relative overflow-hidden rounded-full">
            <div
              className="absolute top-0 left-0 w-full rounded-full"
              style={{
                height: '40%',
                background: 'rgba(243,111,56,0.9)',
                animation: 'heroScrollLine 2s cubic-bezier(0.4,0,0.6,1) infinite',
              }}
            />
          </div>
        </div>

        {/* Coordinates top right */}
        <div className="absolute top-28 right-12 lg:right-20 flex flex-col items-end gap-1.5 pointer-events-none z-20">
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/15 text-white/80 px-3.5 py-1.5 rounded-full text-[10px] font-mono tracking-wider shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F36F38] animate-pulse" />
            DATARAN TINGGI DIENG · 2.093 MDPL
          </div>
          <p className="text-white/30 text-[9px] font-mono tracking-wider">7°12′S · 109°54′E</p>
        </div>

        {/* Content Box (Left side) */}
        <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl z-20">

          {/* Location badge */}
          <div className="mb-5 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F36F38] animate-ping" />
            <span className="w-2 h-2 rounded-full bg-[#F36F38] -ml-5" />
            <span className="text-white/60 text-[11px] font-mono tracking-[0.25em] uppercase">
              Wonosobo · Jawa Tengah · Indonesia
            </span>
            <div className="h-px w-14 bg-white/15 flex-shrink-0" />
            <span className="text-white/30 text-[11px] font-mono">'26</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display leading-[0.88] tracking-tighter text-white">
            <span
              className="block font-bold uppercase"
              style={{ fontSize: 'clamp(2.8rem, 6.8vw, 6rem)', lineHeight: 0.92 }}
            >
              SEWA JAKET
            </span>
            <span
              className="block font-bold uppercase my-1"
              style={{
                fontSize: 'clamp(4.2rem, 10.5vw, 9.8rem)',
                WebkitTextStroke: '2.5px #F36F38',
                color: 'transparent',
                letterSpacing: '-0.02em',
                lineHeight: 0.95,
                textShadow: '0 0 35px rgba(243,111,56,0.3)',
              }}
            >
              DIENG
            </span>
            <span
              className="block font-bold uppercase text-white/95"
              style={{ fontSize: 'clamp(2.4rem, 5.8vw, 5.2rem)', letterSpacing: '-0.01em', lineHeight: 0.95 }}
            >
              VIA WONOSOBO
            </span>
          </h1>

          {/* Editorial Subheading */}
          <p className="mt-5 text-white/70 text-sm lg:text-base font-body max-w-lg leading-relaxed">
            Koleksi jaket gunung & perlengkapan outdoor premium untuk solo traveler, couple, hingga keluarga. Higienis, wangi, dan nyaman hadapi suhu ekstrem Dieng.
          </p>

          {/* Stats & Actions */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-8 lg:gap-12">
            {/* Stats Counter */}
            <div className="flex items-center gap-8 lg:gap-10">
              <div>
                <p className="font-display font-bold text-white leading-none text-3xl lg:text-4xl">
                  {counts.koleksi}+
                </p>
                <p className="text-white/40 text-[9px] font-mono uppercase tracking-[0.2em] mt-1.5">Koleksi Jaket</p>
              </div>
              <div className="h-8 w-px bg-white/15" />
              <div>
                <p className="font-display font-bold text-white leading-none text-3xl lg:text-4xl">
                  {counts.rating}★
                </p>
                <p className="text-white/40 text-[9px] font-mono uppercase tracking-[0.2em] mt-1.5">Google Rating</p>
              </div>
              <div className="h-8 w-px bg-white/15" />
              <div>
                <p className="font-display font-bold text-white leading-none text-3xl lg:text-4xl">
                  {counts.jam}H
                </p>
                <p className="text-white/40 text-[9px] font-mono uppercase tracking-[0.2em] mt-1.5">Jam Layanan</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3.5">
              <a
                href="#katalog"
                className="group inline-flex items-center gap-2.5 bg-[#F36F38] hover:bg-[#d4501a] text-white font-heading font-bold uppercase text-xs tracking-wider px-6 py-4 rounded-lg shadow-xl shadow-[#F36F38]/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                Jelajahi Koleksi
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/6285728313331?text=Halo%20Outfit%20Dieng,%20saya%20tertarik%20sewa%20jaket"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-heading font-bold uppercase text-xs tracking-wider px-6 py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <FaWhatsapp className="text-[#25D366] text-lg" />
                Tanya Admin
              </a>
            </div>
          </div>

        </div>

        {/* ─── MODEL FAMILY SHOWCASE (Desktop - Right Anchored) ─── */}
        <div className="absolute bottom-0 right-4 lg:right-14 xl:right-24 h-[84%] lg:h-[88%] max-h-[800px] flex items-end justify-center pointer-events-none z-10">

          {/* Warm Golden Glow behind family */}
          <div className="absolute w-[440px] h-[440px] bg-[#F36F38]/18 blur-[100px] rounded-full pointer-events-none -z-10 bottom-10" />

          {/* The Family Photo - Large, proud, grounded */}
          <img
            src="/images/hero-models.png"
            alt="Outfit Dieng Models di Dieng Plateau"
            className="w-auto h-full max-h-[82vh] object-contain object-bottom drop-shadow-[0_24px_48px_rgba(0,0,0,0.9)]"
            style={{
              maskImage: 'linear-gradient(to top, transparent 0%, black 5%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 5%, black 100%)',
            }}
          />

        </div>

      </div>

      {/* Global CSS for scroll line animation */}
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

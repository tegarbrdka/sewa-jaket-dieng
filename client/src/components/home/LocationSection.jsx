import React from 'react';
import { FiMapPin, FiClock, FiNavigation, FiPhone } from 'react-icons/fi';
import ScrollReveal from '../ui/ScrollReveal';

const LocationSection = () => {
  return (
    <section id="lokasi" className="relative bg-[#0a0920] text-white overflow-hidden py-16 md:py-24">

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, #F36F38 0%, transparent 50%), radial-gradient(circle at 80% 50%, #6c63ff 0%, transparent 50%)'}} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative container mx-auto px-5 md:px-16 lg:px-24">

        {/* Header */}
        <ScrollReveal direction="fade-up">
          <div className="mb-10 md:mb-14">
            <p className="text-accent font-mono text-[11px] tracking-[0.3em] uppercase mb-2">📍 Temukan Kami</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight">
              LOKASI <span className="text-accent">TOKO</span>
            </h2>
            <p className="text-white/40 text-sm md:text-base mt-2 max-w-md">
              Kunjungi kami langsung atau hubungi via WhatsApp untuk reservasi sebelum datang.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-stretch">

          {/* Map — wider */}
          <ScrollReveal direction="fade-right" className="lg:col-span-3">
            <div className="relative w-full h-72 md:h-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.7208989710457!2d109.94328597725267!3d-7.272566892734474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700b1b928d2c1f%3A0x9f5228741c9ebc29!2sOUTFIT%20DIENG%20SEWA%20JAKET!5e0!3m2!1sid!2sid!4v1791052285514!5m2!1sid!2sid"
                className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Lokasi OUTFIT DIENG SEWA JAKET"
              />
              {/* Overlay badge */}
              <div className="absolute top-4 left-4 bg-[#0a0920]/90 backdrop-blur-sm border border-white/10 text-white px-4 py-2 rounded-xl font-heading font-bold text-sm flex items-center gap-2 shadow-lg">
                <FiMapPin className="text-accent flex-shrink-0" />
                OUTFIT DIENG SEWA JAKET
              </div>
            </div>
          </ScrollReveal>

          {/* Info Cards */}
          <ScrollReveal direction="fade-left" className="lg:col-span-2 flex flex-col gap-4">

            {/* Address */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 hover:border-accent/30 hover:bg-white/[0.07] transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="text-accent text-lg" />
                </div>
                <p className="font-heading font-bold text-sm uppercase tracking-wider text-white/60">Alamat</p>
              </div>
              <p className="text-white font-heading font-bold text-base md:text-lg leading-snug">
                Jl. Dieng, Wonosobo
              </p>
              <p className="text-white/50 text-sm mt-1">Jawa Tengah, Indonesia</p>
              <a
                href="https://maps.app.goo.gl/search?q=OUTFIT+DIENG+SEWA+JAKET"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-accent font-heading font-bold text-xs uppercase tracking-wider hover:underline group"
              >
                <FiNavigation size={14} />
                Buka di Google Maps
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 hover:border-accent/30 hover:bg-white/[0.07] transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <FiClock className="text-green-400 text-lg" />
                </div>
                <p className="font-heading font-bold text-sm uppercase tracking-wider text-white/60">Jam Operasional</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-white font-heading font-bold text-base md:text-lg">Setiap Hari</p>
                <span className="bg-green-500/20 border border-green-500/30 text-green-400 font-heading font-bold text-sm px-3 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  24 JAM
                </span>
              </div>
              <p className="text-white/40 text-sm mt-1">Senin – Minggu, termasuk hari libur</p>
            </div>

            {/* WA */}
            <a
              href="https://wa.me/6285728313331?text=Halo%20Outfit%20Dieng!%20Saya%20mau%20tanya%20lokasi%20dan%20sewa%20jaket."
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#1DA851] text-white rounded-2xl p-5 md:p-6 flex items-center gap-4 shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] group"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <FiPhone className="text-white text-lg" />
              </div>
              <div className="flex-1">
                <p className="font-heading font-bold text-base uppercase tracking-wide">Hubungi Kami</p>
                <p className="text-white/80 text-sm mt-0.5">0857-2831-3331 · WhatsApp</p>
              </div>
              <span className="group-hover:translate-x-1 transition-transform text-white/70">→</span>
            </a>

          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

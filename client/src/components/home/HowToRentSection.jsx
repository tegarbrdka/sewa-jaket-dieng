import React from 'react';
import { FiSearch, FiMessageSquare, FiMapPin, FiShield, FiClock, FiSmile } from 'react-icons/fi';
import ScrollReveal from '../ui/ScrollReveal';

const HowToRentSection = () => {
  const steps = [
    {
      number: '01',
      title: 'PILIH JAKET',
      desc: 'Jelajahi koleksi Puffer, Windbreaker, Hardshell, & Oversize sesuai selera dan kebutuhan suhu Anda.',
      icon: <FiSearch className="text-xl md:text-3xl text-accent" />,
      accent: 'from-accent/20 to-accent/5',
    },
    {
      number: '02',
      title: 'KONFIRMASI VIA WA',
      desc: 'Klik tombol WhatsApp untuk langsung terhubung dengan admin. Tentukan tanggal sewa dan ukuran.',
      icon: <FiMessageSquare className="text-xl md:text-3xl text-green-400" />,
      accent: 'from-green-500/20 to-green-500/5',
    },
    {
      number: '03',
      title: 'AMBIL & PAKAI',
      desc: 'Ambil jaket langsung di toko Wonosobo/Dieng atau minta layanan antar. Bayar mudah di tempat.',
      icon: <FiMapPin className="text-xl md:text-3xl text-orange-400" />,
      accent: 'from-orange-500/20 to-orange-500/5',
    }
  ];

  const features = [
    { title: '100% Cuci Steril', desc: 'Setiap jaket dicuci laundry higienis & harum sebelum disewakan.', icon: <FiSmile /> },
    { title: 'Layanan 24 Jam', desc: 'Buka nonstop untuk mendaki sunrise Sikunir atau Prau.', icon: <FiClock /> },
    { title: 'Jaminan Lokal', desc: 'Basecamp asli Wonosobo dekat rute utama ke Dieng.', icon: <FiShield /> }
  ];

  return (
    <section id="cara-sewa" className="relative py-14 md:py-20 bg-dark text-white overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-5 md:px-16 lg:px-24">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <ScrollReveal direction="fade-up">
            <span className="text-accent font-heading font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] mb-2 block">
              MUDAH & TANPA RIBET
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-5xl uppercase tracking-tight">
              CARA SEWA JAKET <span className="text-accent">DIENG</span>
            </h2>
            <p className="text-white/50 text-xs md:text-sm mt-2 md:mt-3">
              Hanya 3 langkah praktis untuk mendapatkan jaket hangat & stylish.
            </p>
          </ScrollReveal>
        </div>

        {/* Steps — Mobile: timeline | Desktop: 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 relative z-10 mb-12 md:mb-20">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} direction="fade-up" delay={index + 1}>
              <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-8 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 group shadow-xl h-full flex flex-col justify-between">

                {/* Mobile: horizontal layout | Desktop: vertical */}
                <div className="flex items-start gap-4 md:block">
                  {/* Icon */}
                  <div className={`w-11 h-11 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${step.accent} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 md:mb-6`}>
                    {step.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between md:mb-3">
                      <h3 className="font-heading font-bold text-base md:text-xl uppercase tracking-wide text-white group-hover:text-accent transition-colors">
                        {step.title}
                      </h3>
                      <span className="font-display font-bold text-2xl md:text-4xl text-white/10 group-hover:text-accent/30 transition-colors duration-300 ml-2">
                        {step.number}
                      </span>
                    </div>
                    <p className="text-white/50 text-[11px] md:text-xs leading-relaxed mt-1 md:mt-0">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-0.5 bg-white/10 rounded-full mt-4 md:mt-6 overflow-hidden">
                  <div className="w-0 group-hover:w-full h-full bg-accent transition-all duration-700" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Value Props — Mobile: horizontal scroll | Desktop: 3-col */}
        <div className="bg-gradient-to-r from-accent/15 via-dark-surface to-accent/15 rounded-xl md:rounded-2xl p-5 md:p-12 border border-accent/20 shadow-2xl">
          <div className="flex gap-4 md:gap-8 overflow-x-auto md:overflow-visible pb-2 md:pb-0 -mx-1 md:mx-0 snap-x snap-mandatory md:snap-none md:grid md:grid-cols-3">
            {features.map((feat, i) => (
              <div key={i} className="flex items-start gap-3 md:gap-4 min-w-[260px] md:min-w-0 snap-start px-1 md:px-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent text-white flex items-center justify-center text-lg md:text-xl flex-shrink-0 shadow-lg glow-accent">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm md:text-base uppercase text-white mb-0.5 md:mb-1">{feat.title}</h4>
                  <p className="text-white/50 text-[11px] md:text-xs leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowToRentSection;

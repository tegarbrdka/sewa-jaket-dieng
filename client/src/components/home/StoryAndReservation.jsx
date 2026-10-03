import React from 'react';
import useAvailability from '../../hooks/useAvailability';
import ScrollReveal from '../ui/ScrollReveal';

const StoryAndReservation = ({ onSelectItem }) => {
  const today = new Date().toISOString().split('T')[0];
  const nextDay = new Date(Date.now() + 86400000).toISOString().split('T')[0];
  const { items, loading } = useAvailability(today, nextDay, 'Semua');

  const stats = [
    { value: '500+', label: 'Jaket Tersedia', icon: '🧥' },
    { value: '100%', label: 'Pasti Bersih', icon: '✨' },
    { value: '4.9⭐', label: 'Rating Google', icon: '' },
    { value: '24/7', label: 'Layanan Nonstop', icon: '🕐' },
  ];

  return (
    <section id="book" className="relative flex flex-col md:flex-row bg-light md:bg-split-desktop border-t-8 border-white/50">

      {/* LEFT SIDE: Story (Day) */}
      <div className="w-full md:w-1/2 p-6 md:p-16 lg:p-24 flex flex-col justify-center">
        <ScrollReveal direction="fade-left">
          <h2 className="font-heading text-2xl md:text-4xl font-bold uppercase text-dark mb-1">
            OUR STORY <span className="text-base md:text-xl font-normal ml-1 md:ml-2 tracking-wide">(WONOSOBO LOCAL pride)</span>
          </h2>
          <p className="font-heading font-medium tracking-widest text-[10px] md:text-sm text-dark mb-6 md:mb-8">TENTANG OUTFIT DIENG - ASLI WONOSOBO</p>
        </ScrollReveal>

        <div className="flex flex-col xl:flex-row gap-6 md:gap-8 items-start">
          <ScrollReveal direction="fade-up" className="w-full xl:w-1/2">
            <div className="relative group">
              <img
                src="/images/toko.jpeg"
                alt="Store interior"
                className="w-full h-48 md:h-64 object-cover rounded-xl shadow-lg border border-gray-200 group-hover:shadow-2xl transition-shadow duration-500"
              />
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-accent text-white font-heading font-bold text-[10px] md:text-xs px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg glow-accent">
                📍 WONOSOBO
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="fade-right" className="w-full xl:w-1/2">
            <h3 className="font-heading text-2xl md:text-4xl font-bold uppercase text-dark leading-none mb-3 md:mb-4">DIBUAT OLEH<br/>LOKAL</h3>
            <p className="text-dark/80 text-xs md:text-sm mb-4 md:mb-6 border-l-4 border-accent pl-3">
              Kualitas dan pelayanan kami adalah cerminan dari semangat lokal Wonosobo. Semua jaket dirawat dan disiapkan langsung oleh ahlinya.
            </p>
            <h3 className="font-heading text-2xl md:text-4xl font-bold uppercase text-dark leading-none">KENYAMANAN &<br/>KEHANGATAN<br/>DI SETIAP SUDUT</h3>
          </ScrollReveal>
        </div>

        {/* Stats Grid */}
        <ScrollReveal direction="fade-up" delay={2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-10">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-3 md:p-4 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-accent/20 transition-all duration-300">
                <p className="text-xl md:text-2xl mb-0.5 md:mb-1">{stat.icon}</p>
                <p className="font-display text-xl md:text-2xl font-bold text-accent leading-none">{stat.value}</p>
                <p className="text-dark/50 text-[9px] md:text-[10px] uppercase tracking-wider mt-0.5 md:mt-1 font-heading font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* RIGHT SIDE: Katalog & Map (Night) */}
      <div id="katalog" className="w-full md:w-1/2 bg-dark md:bg-transparent p-6 md:p-16 lg:p-24 text-white">
        <ScrollReveal direction="fade-right">
          <h2 className="font-heading text-2xl md:text-4xl font-bold uppercase mb-1">
            KATALOG UTAMA <span className="text-sm md:text-xl font-normal ml-1 md:ml-2 text-white/50 tracking-wide">(PILIH & CHAT WA)</span>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col xl:flex-row gap-5 md:gap-6 mt-6 md:mt-8">
          {/* Map Section */}
          <ScrollReveal direction="fade-up" className="w-full xl:w-1/3">
            <div className="w-full aspect-video md:aspect-square rounded-xl overflow-hidden relative border border-white/10 group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63275.76!2d109.89!3d-7.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7015e7e7e7e7e7%3A0x0!2sWonosobo%2C+Central+Java!5e0!3m2!1sen!2sid!4v1"
                className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
              />
              <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-dark/80 backdrop-blur-sm text-white px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg font-heading font-bold text-[10px] md:text-xs flex items-center gap-1.5 border border-white/10">
                📍 Wonosobo, Jawa Tengah
              </div>
            </div>
            <a href="https://maps.google.com/?q=Wonosobo+Jawa+Tengah" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-accent font-heading font-bold text-xs md:text-sm mt-2 md:mt-3 hover:underline group">
              GET DIRECTIONS
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </ScrollReveal>

          {/* Quick Reserve Grid */}
          <ScrollReveal direction="fade-up" delay={1} className="w-full xl:w-2/3">
            <div className="bg-dark-surface/80 backdrop-blur-sm p-4 md:p-5 rounded-xl border border-white/10 flex flex-col">
              <h4 className="font-heading font-bold uppercase mb-3 md:mb-4 border-b border-white/10 pb-2 flex items-center justify-between gap-2 text-sm md:text-base">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  PILIH JAKET ANDA
                </span>
                <span className="text-[9px] md:text-[10px] text-accent font-mono">Klik untuk Detail</span>
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3 flex-1">
                {loading ? (
                  <div className="col-span-full text-center py-8 md:py-10 text-white/50 text-sm">Loading items...</div>
                ) : (
                  items.slice(0, 6).map(item => (
                    <div
                      key={item.id}
                      className="relative rounded-lg overflow-hidden cursor-pointer group border border-white/5 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 active:scale-[0.98]"
                      onClick={() => onSelectItem(item)}
                    >
                      <img src={item.imageUrl} alt={item.name} className="w-full h-32 md:h-28 object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 md:p-2.5">
                        <p className="text-white font-heading font-bold text-[11px] md:text-xs leading-tight truncate">{item.name}</p>
                        <div className="flex items-center justify-between mt-0.5 md:mt-1">
                          <span className="text-accent font-mono font-bold text-[10px] md:text-xs">
                            {item.availableStock > 0 ? `Stok: ${item.availableStock}` : 'Habis'}
                          </span>
                          <span className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${item.availableStock > 0 ? 'bg-green-500' : 'bg-red-500'}`} />
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-3 md:mt-4 flex items-center justify-between border-t border-white/10 pt-3 md:pt-4">
                <span className="font-heading font-bold text-white/50 text-[10px] md:text-xs uppercase">TANYA ADALAH GRATIS →</span>
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Outfit%20Dieng,%20saya%20mau%20tanya%20sewa%20jaket"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] hover:bg-[#1DA851] text-white font-heading font-bold text-[10px] md:text-xs uppercase px-4 md:px-5 py-2 md:py-2.5 rounded-full transition-all duration-300 shadow-md flex items-center gap-1.5"
                >
                  CHAT WA ADMIN
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

    </section>
  );
};

export default StoryAndReservation;

import React from 'react';

const LookbookSection = () => {
  const galleryItems = [
    { src: '/images/lookbook-oversize.png', alt: 'Oversize jacket di Dieng', label: 'OVERSIZE', size: 'tall' },
    { src: '/images/lookbook-female.png', alt: 'Korean puffer style', label: 'KOREAN STYLE', size: 'wide' },
    { src: '/images/lookbook-puffer.png', alt: 'Puffer jacket di pegunungan Dieng', label: 'PUFFER', size: 'normal' },
    { src: '/images/lookbook-windbreaker.png', alt: 'Windbreaker di Telaga Warna Dieng', label: 'WINDBREAKER', size: 'normal' },
    { src: '/images/lookbook-hardshell.png', alt: 'Hardshell jacket malam di Dieng', label: 'HARDSHELL', size: 'tall' },
    { src: '/images/lookbook-down.png', alt: 'Down jacket sunrise Dieng Plateau', label: 'DOWN JACKET', size: 'wide' },
    { src: '/images/lookbook-fleece.png', alt: 'Fleece jacket di Candi Arjuna Dieng', label: 'FLEECE', size: 'normal' },
    { src: '/images/lookbook-hiking.png', alt: 'Hiking jacket di Kawah Sikidang', label: 'HIKING', size: 'normal' },
  ];

  // Reusable gallery card
  const GalleryCard = ({ item, spanClass = '' }) => (
    <div className={`group relative rounded-xl overflow-hidden cursor-pointer ${spanClass}`}>
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        loading="lazy"
      />
      {/* Gradient overlay — always visible on mobile, hover on desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 md:opacity-60 md:group-hover:opacity-90 transition-opacity duration-500" />

      {/* Label — always visible on mobile */}
      <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-6">
        <div className="md:transform md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 ease-out">
          <p className="text-accent text-[9px] md:text-xs font-heading tracking-[0.2em] uppercase mb-0.5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
            Collection
          </p>
          <h3 className="font-heading text-sm md:text-2xl font-bold text-white uppercase tracking-wide">
            {item.label}
          </h3>
          <div className="w-8 md:w-0 md:group-hover:w-12 h-0.5 bg-accent mt-1.5 md:mt-2 transition-all duration-500 delay-200" />
        </div>
      </div>

      {/* Hover border */}
      <div className="absolute inset-0 rounded-xl border border-white/0 group-hover:border-accent/30 transition-colors duration-500" />
    </div>
  );

  return (
    <section id="lookbook" className="relative py-14 md:py-28 bg-dark overflow-hidden">

      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}} />

      {/* Section Header */}
      <div className="relative z-10 text-center mb-10 md:mb-16 px-6">
        <p className="font-heading text-accent tracking-[0.3em] uppercase text-xs md:text-sm mb-2 md:mb-3">The 24H Collection</p>
        <h2 className="font-heading text-3xl md:text-7xl font-bold uppercase text-white tracking-tight">
          URBAN <span className="text-outline-accent">LOOKBOOK</span>
        </h2>
        <p className="text-white/40 mt-3 md:mt-4 max-w-lg mx-auto text-xs md:text-sm leading-relaxed">
          Koleksi jaket terbaik untuk petualangan Anda di Dataran Tinggi Dieng.
        </p>
        <div className="flex items-center justify-center mt-4 md:mt-6 gap-3">
          <div className="w-8 md:w-12 h-px bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-accent" />
          <div className="w-8 md:w-12 h-px bg-white/20" />
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4"
          style={{ gridAutoFlow: 'dense', gridAutoRows: 'minmax(160px, 1fr)' }}
        >
          <GalleryCard item={galleryItems[0]} spanClass="md:row-span-2" />
          <GalleryCard item={galleryItems[1]} spanClass="md:col-span-2" />
          <GalleryCard item={galleryItems[2]} />
          <GalleryCard item={galleryItems[3]} />
          <GalleryCard item={galleryItems[4]} spanClass="md:row-span-2" />
          <GalleryCard item={galleryItems[5]} spanClass="md:col-span-2" />
          <GalleryCard item={galleryItems[6]} />
          <GalleryCard item={galleryItems[7]} />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 text-center mt-10 md:mt-14 px-6">
        <a
          href="#katalog"
          className="inline-flex items-center gap-3 bg-accent hover:bg-orange-600 text-white font-heading font-bold uppercase tracking-wider px-6 md:px-8 py-3.5 md:py-4 rounded-full shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300 hover:-translate-y-1 text-xs md:text-sm"
        >
          LIHAT SEMUA KOLEKSI
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default LookbookSection;

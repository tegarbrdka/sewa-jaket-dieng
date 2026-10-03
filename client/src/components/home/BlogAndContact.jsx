import React from 'react';
import { FiMail, FiMapPin, FiClock, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import ScrollReveal from '../ui/ScrollReveal';

const blogPosts = [
  {
    id: 1,
    title: 'TIPS MENDAKI GUNUNG PRAU',
    date: 'Jun 13, 2024',
    category: 'ADVENTURE',
    readTime: '5 min',
    excerpt: 'Panduan lengkap mendaki Gunung Prau dari basecamp Dieng. Persiapan, rute, dan tips penting.',
    image: '/images/blog-prau.png'
  },
  {
    id: 2,
    title: 'CUACA DIENG HARI INI',
    date: 'Jun 15, 2024',
    category: 'INFO',
    readTime: '3 min',
    excerpt: 'Update cuaca harian Dataran Tinggi Dieng. Suhu bisa turun hingga 0°C di pagi hari!',
    image: '/images/blog-cuaca.png'
  },
  {
    id: 3,
    title: 'PILIHAN JAKET TERBAIK',
    date: 'Jun 18, 2024',
    category: 'GUIDE',
    readTime: '4 min',
    excerpt: 'Memilih jaket yang pas untuk cuaca ekstrem Dieng. Dari puffer sampai hardshell.',
    image: '/images/blog-jaket.png'
  }
];

const BlogAndContact = () => {
  return (
    <section id="stories" className="relative flex flex-col md:flex-row bg-light md:bg-split-desktop border-t border-gray-200 md:border-none">

      {/* LEFT SIDE: Blog (Day) */}
      <div className="w-full md:w-1/2 p-6 md:p-16 lg:p-24 pb-12 md:pb-20">
        <ScrollReveal direction="fade-left">
          <h2 className="font-heading text-2xl md:text-4xl font-bold uppercase text-dark mb-1">
            STORIES FROM DIENG <span className="text-sm md:text-xl font-normal ml-1 md:ml-2 tracking-wide">(BLOG)</span>
          </h2>
          <p className="text-dark/50 text-xs md:text-sm mt-1 md:mt-2 mb-6 md:mb-8">Cerita, tips, dan panduan terbaru dari Dataran Tinggi Dieng</p>
        </ScrollReveal>

        {/* Mobile: horizontal scroll cards | Desktop: vertical list */}
        <div className="md:hidden -mx-2">
          <div className="flex gap-3 overflow-x-auto pb-4 px-2 snap-x snap-mandatory">
            {blogPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer flex-shrink-0 w-[72vw] snap-start">
                <div className="overflow-hidden rounded-xl h-36 relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-2 left-2 bg-accent text-white text-[8px] font-heading font-bold tracking-wider px-2 py-0.5 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="mt-2.5">
                  <h4 className="font-heading font-bold text-dark text-sm leading-tight mb-1 group-hover:text-accent transition-colors">{post.title}</h4>
                  <p className="text-dark/50 text-[11px] line-clamp-2 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-dark/35 text-[9px] font-mono mt-1.5">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-0.5"><FiClock size={9} /> {post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: vertical list */}
        <div className="hidden md:block mt-4 space-y-6">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.id} direction="fade-up" delay={index + 1}>
              <div className={`group cursor-pointer flex ${index === 0 ? 'flex-col' : 'flex-row gap-4'}`}>
                <div className={`overflow-hidden rounded-xl ${index === 0 ? 'h-56 w-full mb-4' : 'w-28 h-28 flex-shrink-0'} relative`}>
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-3 left-3 bg-accent text-white text-[9px] font-heading font-bold tracking-wider px-2.5 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-heading font-bold text-dark text-lg leading-tight mb-2 group-hover:text-accent transition-colors duration-300">{post.title}</h4>
                  <p className="text-dark/60 text-xs mb-2 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-dark/40 text-[10px] font-mono">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><FiClock size={10} /> {post.readTime}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="fade-up" delay={4}>
          <a href="#" className="inline-flex items-center gap-2 mt-6 md:mt-8 text-accent font-heading font-bold text-xs md:text-sm hover:gap-3 transition-all duration-300 group">
            LIHAT SEMUA ARTIKEL
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </ScrollReveal>
      </div>

      {/* RIGHT SIDE: Contact (Night) */}
      <div id="contact" className="w-full md:w-1/2 bg-dark md:bg-transparent p-6 md:p-16 lg:p-24 text-white border-t border-white/10 md:border-none">
        <ScrollReveal direction="fade-right">
          <h2 className="font-heading text-2xl md:text-4xl font-bold uppercase mb-1 md:mb-2">
            CONTACT <span className="text-sm md:text-xl font-normal ml-1 md:ml-2 text-white/50 tracking-wide">(HUBUNGI KAMI)</span>
          </h2>
          <p className="text-white/40 text-xs md:text-sm mb-6 md:mb-10">Kami siap membantu Anda 24 jam nonstop</p>
        </ScrollReveal>

        <div className="flex flex-col gap-5 md:gap-8">
          {/* WhatsApp buttons */}
          <ScrollReveal direction="fade-up" delay={1}>
            <div className="space-y-2.5 md:space-y-3">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="relative bg-[#25D366] hover:bg-[#1DA851] text-white rounded-xl px-4 md:px-6 py-3.5 md:py-4 font-heading font-bold text-base md:text-lg flex items-center gap-3 md:gap-4 transition-all duration-300 shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-0.5 group overflow-hidden active:scale-[0.98]">
                <div className="relative">
                  <FaWhatsapp className="text-2xl md:text-3xl" />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-green-300 rounded-full pulse-ring" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="leading-none text-sm md:text-base">CHAT ADMIN UTAMA</p>
                  <p className="text-white/70 text-[10px] md:text-xs font-normal mt-0.5">Online sekarang • Respon cepat</p>
                </div>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-xl px-4 md:px-6 py-3.5 md:py-4 font-heading font-bold flex items-center gap-3 md:gap-4 transition-all duration-300 group active:scale-[0.98]">
                <FaWhatsapp className="text-xl md:text-2xl" />
                <div className="flex-1 min-w-0">
                  <p className="leading-none text-sm md:text-base">CHAT ADMIN 2</p>
                  <p className="text-white/40 text-[10px] md:text-xs font-normal mt-0.5">Backup • Respon 5 menit</p>
                </div>
                <FiArrowRight className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </a>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="fade-up" delay={2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <div className="flex items-start gap-3 bg-white/5 rounded-xl p-3.5 md:p-4 border border-white/5">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <FiMail className="text-accent text-sm md:text-base" />
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] text-white/40 uppercase font-bold tracking-wider mb-0.5 md:mb-1">EMAIL</p>
                  <p className="font-medium text-xs md:text-sm">outfitdieng@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/5 rounded-xl p-3.5 md:p-4 border border-white/5">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="text-accent text-sm md:text-base" />
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] text-white/40 uppercase font-bold tracking-wider mb-0.5 md:mb-1">LOKASI</p>
                  <p className="font-medium text-xs md:text-sm">Jl. Raya Dieng No. 12<br/>Batur, Banjarnegara</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Payment Info */}
          <ScrollReveal direction="fade-up" delay={3}>
            <div className="border-t border-white/10 pt-5 md:pt-6">
              <p className="text-[9px] md:text-[10px] text-white/40 uppercase font-bold tracking-wider mb-2.5 md:mb-3">PEMBAYARAN & PENGAMBILAN</p>
              <div className="grid grid-cols-2 md:flex md:flex-wrap items-center gap-2 md:gap-3 bg-white/5 p-3 md:p-4 rounded-xl border border-white/5">
                <div className="bg-white/10 px-3 py-2 rounded-lg border border-white/10 flex items-center gap-2">
                  <span className="text-green-400">💵</span>
                  <span className="font-heading font-bold text-[10px] md:text-xs text-white">COD</span>
                </div>
                <div className="bg-white/10 px-3 py-2 rounded-lg border border-white/10 flex items-center gap-2">
                  <span className="text-blue-400">📲</span>
                  <span className="font-heading font-bold text-[10px] md:text-xs text-white">QRIS / E-Wallet</span>
                </div>
                <div className="bg-white/10 px-3 py-2 rounded-lg border border-white/10 flex items-center gap-2 col-span-2 md:col-span-1">
                  <span className="text-accent">🏦</span>
                  <span className="font-heading font-bold text-[10px] md:text-xs text-white">Transfer Bank</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

    </section>
  );
};

export default BlogAndContact;

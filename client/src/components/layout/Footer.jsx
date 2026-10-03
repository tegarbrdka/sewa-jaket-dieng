import React from 'react';
import { FiInstagram, FiSend } from 'react-icons/fi';
import { SiTiktok } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0920] text-white overflow-hidden">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}} />

      <div className="relative container mx-auto px-5 md:px-16 lg:px-24 py-10 md:py-16">

        {/* Mobile: 2-col compact | Desktop: 4-col full */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <a href="#" className="inline-block mb-2">
              <img src="/images/logo.png" alt="Outfit Dieng" className="h-14 md:h-24 w-auto object-contain rounded-lg shadow-lg border border-white/10" />
            </a>
            <p className="text-white/30 text-[10px] md:text-xs font-mono uppercase tracking-widest mt-1">— SEJAK 2026 —</p>
            <p className="text-white/50 text-xs md:text-sm mt-3 md:mt-4 leading-relaxed">
              Penyewaan jaket <strong className="text-white/70">import premium</strong> terlengkap di Dataran Tinggi Dieng. Kehangatan kelas dunia untuk petualangan Anda.
            </p>

            {/* Social Media */}
            <div className="flex gap-2.5 md:gap-3 mt-4 md:mt-6">
              {[
                { icon: <FiInstagram size={16} />, href: 'https://instagram.com/outfitdieng', label: 'Instagram' },
                { icon: <SiTiktok size={15} />, href: 'https://tiktok.com/@outfitdieng', label: 'TikTok' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-accent hover:border-accent/30 hover:bg-accent/10 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-xs md:text-sm uppercase tracking-wider text-white/30 mb-4 md:mb-5">Menu</h3>
            <div className="flex flex-col gap-2.5 md:gap-3">
              {[
                { name: 'Beranda', href: '#' },
                { name: 'Lookbook', href: '#lookbook' },
                { name: 'Katalog', href: '#katalog' },
                { name: 'Cara Sewa', href: '#cara-sewa' },
                { name: 'Kontak', href: '#contact' },
              ].map(link => (
                <a key={link.name} href={link.href} className="font-heading font-medium text-xs md:text-sm text-white/60 hover:text-accent hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent/50" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="font-heading font-bold text-xs md:text-sm uppercase tracking-wider text-white/30 mb-4 md:mb-5">Jam Operasional</h3>
            <div className="space-y-2 md:space-y-3">
              <div className="flex justify-between items-center bg-white/5 rounded-lg px-3 md:px-4 py-2.5 md:py-3 border border-white/5">
                <span className="text-white/60 text-[11px] md:text-sm">Senin - Minggu</span>
                <span className="text-accent font-heading font-bold text-[11px] md:text-sm">24 JAM</span>
              </div>
              <div className="flex justify-between items-center bg-white/5 rounded-lg px-3 md:px-4 py-2.5 md:py-3 border border-white/5">
                <span className="text-white/60 text-[11px] md:text-sm">WhatsApp</span>
                <span className="text-green-400 font-heading font-bold text-[11px] md:text-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400 animate-pulse" />
                  ONLINE
                </span>
              </div>
              <div className="flex justify-between items-center bg-white/5 rounded-lg px-3 md:px-4 py-2.5 md:py-3 border border-white/5">
                <span className="text-white/60 text-[11px] md:text-sm">Telp / WA</span>
                <span className="text-white font-mono font-bold text-[11px] md:text-sm">0857-2831-3331</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-bold text-xs md:text-sm uppercase tracking-wider text-white/30 mb-4 md:mb-5">Newsletter</h3>
            <p className="text-white/50 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">Dapatkan info promo & update cuaca Dieng.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Anda..."
                className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 transition-colors"
              />
              <button className="bg-accent hover:bg-orange-600 text-white px-3 md:px-4 py-2.5 md:py-3 rounded-lg transition-colors flex-shrink-0">
                <FiSend size={14} />
              </button>
            </div>
            <p className="text-white/20 text-[9px] md:text-[10px] mt-1.5 md:mt-2">Tanpa spam. Unsubscribe kapan saja.</p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 md:mt-14 pt-5 md:pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-white/20 text-[10px] md:text-xs font-mono uppercase tracking-widest">
            © {currentYear} OUTFIT DIENG — WONOSOBO
          </p>
          <div className="flex gap-4 md:gap-6 text-white/20 text-[10px] md:text-xs font-mono uppercase tracking-wider">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/50 transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

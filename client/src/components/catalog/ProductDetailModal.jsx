import React, { useState, useEffect } from 'react';
import { FiX, FiCheckCircle, FiShield, FiWind, FiCalendar } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { formatCurrency } from '../../utils/formatters';

const ProductDetailModal = ({ item, onClose }) => {
  const [rentalDays, setRentalDays] = useState(1);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  if (!item) return null;

  const adminNumber = '6285728313331';
  const totalPrice = item.pricePerDay * rentalDays;

  const handleWhatsAppBooking = () => {
    const text = `Halo Outfit Dieng! 👋%0ASaya tertarik untuk menyewa jaket berikut:%0A%0A🧥 *${item.name}*%0A📏 *Ukuran:* ${item.size || 'All Size'}%0A🏷️ *Kategori:* ${item.category}%0A⏱️ *Durasi:* ${rentalDays} Hari%0A💰 *Estimasi Total:* ${formatCurrency(totalPrice)}%0A%0AMohon informasi ketersediaan stok & prosedur pengambilannya. Terima kasih!`;
    window.open(`https://wa.me/${adminNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center md:p-6 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm fade-backdrop"
        onClick={onClose}
      />

      {/* Modal — Mobile: bottom sheet | Desktop: centered dialog */}
      <div className="relative z-10 w-full md:max-w-3xl bg-dark-surface md:rounded-2xl rounded-t-2xl shadow-2xl overflow-hidden text-white sheet-enter md:animate-none max-h-[92vh] md:max-h-[90vh] flex flex-col">

        {/* Drag handle (mobile) */}
        <div className="md:hidden flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-accent/80 flex items-center justify-center transition-all duration-200"
        >
          <FiX size={18} />
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Image */}
            <div className="relative bg-dark h-52 md:min-h-[420px] flex items-center justify-center overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-transparent md:hidden" />

              <div className="absolute top-3 left-3 md:top-4 md:left-4 flex flex-col gap-1.5 md:gap-2">
                <span className="bg-accent text-white text-[10px] md:text-xs font-heading font-bold px-2.5 md:px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {item.category}
                </span>
                {item.size && (
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] md:text-xs font-mono font-bold px-2.5 md:px-3 py-1 rounded-full border border-white/20">
                    Size: {item.size}
                  </span>
                )}
              </div>

              <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 hidden md:flex items-center justify-between text-xs bg-black/60 backdrop-blur-sm p-2.5 rounded-xl border border-white/10">
                <span className="text-green-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Stok: {item.availableStock || item.stockTotal || 10} Unit
                </span>
                <span className="text-white/60">100% Sterile Laundry</span>
              </div>
            </div>

            {/* Specs & CTA */}
            <div className="p-5 md:p-8 flex flex-col justify-between">
              <div>
                <p className="text-accent text-[10px] md:text-xs font-heading font-bold uppercase tracking-widest mb-1">OUTFIT DIENG PROMO</p>
                <h2 className="font-heading font-bold text-xl md:text-3xl text-white uppercase tracking-tight mb-2 md:mb-3">
                  {item.name}
                </h2>

                {/* Pricing */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 md:p-3.5 mb-4 md:mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-wider font-bold">Tarif Sewa</p>
                    <p className="text-accent font-mono text-xl md:text-2xl font-bold leading-none mt-0.5 md:mt-1">
                      {formatCurrency(item.pricePerDay)} <span className="text-[10px] md:text-xs text-white/50 font-normal">/hari</span>
                    </p>
                  </div>
                  <span className="inline-block bg-green-500/20 border border-green-500/30 text-green-400 text-[9px] md:text-[10px] font-heading font-bold px-2 md:px-2.5 py-1 rounded-full">
                    ✓ Bebas Deposit
                  </span>
                </div>

                {/* Highlights */}
                <div className="space-y-2 md:space-y-2.5 mb-4 md:mb-6">
                  <div className="flex items-center gap-2.5 md:gap-3 text-[11px] md:text-xs text-white/80">
                    <FiShield className="text-accent text-sm md:text-base flex-shrink-0" />
                    <span>Daya Tahan Suhu 0°C - 10°C Dieng</span>
                  </div>
                  <div className="flex items-center gap-2.5 md:gap-3 text-[11px] md:text-xs text-white/80">
                    <FiWind className="text-accent text-sm md:text-base flex-shrink-0" />
                    <span>100% Windproof & Waterproof</span>
                  </div>
                  <div className="flex items-center gap-2.5 md:gap-3 text-[11px] md:text-xs text-white/80">
                    <FiCheckCircle className="text-accent text-sm md:text-base flex-shrink-0" />
                    <span>Sudah dicuci & harum, siap pakai</span>
                  </div>
                </div>

                {/* Days Selector */}
                <div className="mb-4 md:mb-6">
                  <label className="text-white/60 text-[10px] md:text-xs font-heading font-bold uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                    <FiCalendar className="text-accent" /> Pilih Durasi Sewa:
                  </label>
                  <div className="flex items-center gap-1.5 md:gap-2">
                    {[1, 2, 3, 5].map((d) => (
                      <button
                        key={d}
                        onClick={() => setRentalDays(d)}
                        className={`flex-1 py-2 md:py-2 rounded-lg font-heading font-bold text-[11px] md:text-xs border transition-all active:scale-95 ${
                          rentalDays === d
                            ? 'bg-accent border-accent text-white shadow-lg shadow-accent/20'
                            : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                        }`}
                      >
                        {d} Hari
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div>
                <div className="flex items-center justify-between text-[11px] md:text-xs text-white/60 mb-2.5 md:mb-3 border-t border-white/10 pt-3 md:pt-4">
                  <span>Total Estimasi:</span>
                  <span className="font-mono text-sm md:text-base font-bold text-white">{formatCurrency(totalPrice)}</span>
                </div>

                <button
                  onClick={handleWhatsAppBooking}
                  className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-heading font-bold text-sm md:text-base uppercase py-3.5 px-6 rounded-xl flex items-center justify-center gap-2.5 md:gap-3 shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transition-all duration-300 active:scale-[0.98]"
                >
                  <FaWhatsapp className="text-xl md:text-2xl" />
                  SEWA VIA WHATSAPP
                </button>

                <p className="text-[9px] md:text-[10px] text-center text-white/40 mt-1.5 md:mt-2">
                  *Langsung terhubung ke Admin WA 24 Jam
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;

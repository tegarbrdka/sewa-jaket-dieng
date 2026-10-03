import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProductCard from './ProductCard';
import { FiInbox } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const ProductGrid = ({ items, loading, error, onSelect }) => {
  const gridRef = useRef(null);

  useGSAP(() => {
    if (items.length > 0 && !loading) {
      gsap.fromTo(
        '.product-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, { scope: gridRef, dependencies: [items, loading] });

  return (
    <div className="py-20 container mx-auto px-4 md:px-8" id="katalog" ref={gridRef}>
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl text-mist tracking-widest mb-4">
          KATALOG <span className="text-primary-light">PERLENGKAPAN</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="bg-dark-surface rounded-xl overflow-hidden h-[400px] border border-white/5 animate-pulse">
              <div className="h-[250px] bg-dark-elevated"></div>
              <div className="p-5 flex flex-col gap-3">
                <div className="h-6 bg-dark-elevated rounded w-3/4"></div>
                <div className="h-4 bg-dark-elevated rounded w-1/2"></div>
                <div className="mt-auto flex justify-between">
                  <div className="h-6 bg-dark-elevated rounded w-1/3"></div>
                  <div className="h-6 bg-dark-elevated rounded w-1/4"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-20 bg-dark-surface/50 rounded-2xl border border-red-500/20">
          <p className="text-red-400 mb-2">Terjadi kesalahan saat memuat data</p>
          <p className="text-mist/60 text-sm">{error}</p>
        </div>
      ) : items.length === 0 ? (
        <div className="text-center py-24 bg-dark-surface/30 rounded-2xl border border-white/5 flex flex-col items-center">
          <FiInbox className="text-6xl text-mist/20 mb-4" />
          <h3 className="font-heading text-xl text-mist mb-2">Tidak ada item tersedia</h3>
          <p className="text-mist/50">Silakan ubah tanggal atau kategori pencarian Anda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="product-card">
              <ProductCard item={item} onSelect={onSelect} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;

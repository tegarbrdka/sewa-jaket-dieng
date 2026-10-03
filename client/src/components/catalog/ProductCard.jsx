import React from 'react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { formatCurrency } from '../../utils/formatters';

const ProductCard = ({ item, onSelect }) => {
  const getCategoryColor = (cat) => {
    switch (cat) {
      case 'Jaket Gunung': return 'green';
      case 'Sleeping Bag': return 'amber';
      case 'Jas Hujan': return 'blue';
      default: return 'gray';
    }
  };

  return (
    <div className="group bg-dark-surface rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-primary/20 flex flex-col h-full transform hover:-translate-y-1">
      {/* Image container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-dark">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-black/30 pointer-events-none"></div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <Badge variant={getCategoryColor(item.category)} className="backdrop-blur-md bg-opacity-70">
            {item.category}
          </Badge>
          {item.size && (
            <Badge variant="gray" className="backdrop-blur-md bg-opacity-70 self-start">
              Size: {item.size}
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-mist mb-2 line-clamp-2">
          {item.name}
        </h3>
        
        <div className="mt-auto pt-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="font-mono text-accent font-bold text-lg">
              {formatCurrency(item.pricePerDay)}<span className="text-xs text-mist/50 font-body font-normal">/hari</span>
            </div>
            <div className="flex items-center text-xs text-mist/70">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
              Sisa {item.availableStock || item.stockTotal}
            </div>
          </div>
          
          <Button 
            onClick={() => onSelect(item)} 
            className="w-full opacity-90 group-hover:opacity-100 flex items-center justify-center gap-2"
          >
            Lihat Detail & Sewa
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

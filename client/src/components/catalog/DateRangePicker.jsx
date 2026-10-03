import React, { useState } from 'react';
import { FiCalendar, FiSearch } from 'react-icons/fi';
import Button from '../ui/Button';
import { calculateDays } from '../../utils/formatters';

const categories = ['Semua', 'Jaket Gunung', 'Sleeping Bag', 'Jas Hujan', 'Aksesoris'];

const DateRangePicker = ({ onSearch, compact = false }) => {
  const today = new Date().toISOString().split('T')[0];
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [category, setCategory] = useState('Semua');

  const days = startDate && endDate ? calculateDays(startDate, endDate) : 0;

  const handleSearch = () => {
    if (startDate && endDate) {
      onSearch({ startDate, endDate, category });
    }
  };

  return (
    <div className={`w-full ${compact ? '' : 'bg-white border-2 border-dark rounded-xl p-6 shadow-xl relative z-30 mx-4 md:mx-auto max-w-4xl'}`}>
      <div className={`flex flex-col ${compact ? 'gap-3' : 'md:flex-row gap-6'}`}>
        {/* Date Inputs */}
        <div className={`flex-1 grid grid-cols-2 ${compact ? 'gap-2' : 'gap-4'}`}>
          <div className="space-y-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiCalendar className="text-gray-400" />
              </div>
              <input
                type="date"
                min={today}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className={`w-full bg-white border border-gray-300 rounded ${compact ? 'pl-8 pr-2 py-2 text-sm' : 'pl-10 pr-4 py-3'} text-dark focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none`}
              />
            </div>
          </div>
          <div className="space-y-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiCalendar className="text-gray-400" />
              </div>
              <input
                type="date"
                min={startDate || today}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className={`w-full bg-white border border-gray-300 rounded ${compact ? 'pl-8 pr-2 py-2 text-sm' : 'pl-10 pr-4 py-3'} text-dark focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none`}
              />
            </div>
          </div>
        </div>

        {/* Action & Info */}
        <div className={`flex flex-col justify-end ${compact ? '' : 'md:w-1/3'}`}>
          {!compact && days > 0 && (
            <div className="text-right text-sm mb-2">
              <span className="text-gray-500">Durasi Sewa: </span>
              <span className="text-accent font-bold">{days} Hari</span>
            </div>
          )}
          <button 
            onClick={handleSearch} 
            disabled={!startDate || !endDate}
            className={`w-full bg-accent hover:bg-accent-light text-white font-heading font-bold uppercase tracking-wider transition-colors disabled:bg-accent-dark/90 disabled:cursor-not-allowed ${compact ? 'py-3 mt-2 rounded-md shadow-lg shadow-accent/30' : 'py-3 rounded-lg shadow-xl shadow-accent/20'}`}
          >
            FIND YOUR JACKET
          </button>
        </div>
      </div>

      {/* Categories */}
      {!compact && (
        <div className="mt-6 pt-6 border-t border-gray-100 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {['Semua', 'Jaket Gunung', 'Sleeping Bag', 'Jas Hujan', 'Aksesoris'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  if (startDate && endDate) onSearch({ startDate, endDate, category: cat });
                }}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all font-medium border ${
                  category === cat 
                    ? 'bg-dark text-white border-dark' 
                    : 'bg-white text-gray-500 hover:bg-gray-50 border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;

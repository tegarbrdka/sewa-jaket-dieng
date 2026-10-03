import { useState, useEffect } from 'react';
import { fetchItems } from '../services/api';

/**
 * Normalizes item data from the API (snake_case) to frontend format (camelCase).
 */
const normalizeItem = (item) => ({
  id: item.id,
  name: item.name,
  category: item.category,
  size: item.size,
  description: item.description,
  pricePerDay: Number(item.price_per_day || item.pricePerDay),
  stockTotal: item.stock_total || item.stockTotal || 1,
  availableStock: item.available_stock || item.availableStock || item.stock_total || 1,
  imageUrl: item.image_url || item.imageUrl || `/images/products/jacket-${item.id}.jpg`,
  status: item.status,
});

// Fallback mock data for when backend is not available
const MOCK_ITEMS = [
  {
    id: 1, name: 'Summit Pro Windbreaker', category: 'Jaket Gunung', size: 'M',
    description: 'Jaket windbreaker premium dengan lapisan tahan angin dan hujan ringan.',
    pricePerDay: 35000, stockTotal: 5, availableStock: 5,
    imageUrl: '/images/products/jacket-1.jpg', status: 'active',
  },
  {
    id: 2, name: 'Arctic Shield Parka', category: 'Jaket Gunung', size: 'L',
    description: 'Parka tebal dengan insulasi sintetis untuk suhu ekstrem.',
    pricePerDay: 50000, stockTotal: 3, availableStock: 3,
    imageUrl: '/images/products/jacket-2.jpg', status: 'active',
  },
  {
    id: 3, name: 'Glacier Down Jacket', category: 'Jaket Gunung', size: 'XL',
    description: 'Jaket down berkualitas tinggi dengan fill power 700.',
    pricePerDay: 75000, stockTotal: 2, availableStock: 2,
    imageUrl: '/images/products/jacket-3.jpg', status: 'active',
  },
  {
    id: 4, name: 'Trail Runner Shell', category: 'Jaket Gunung', size: 'S',
    description: 'Jaket shell tipis dan breathable untuk aktivitas high-intensity.',
    pricePerDay: 25000, stockTotal: 8, availableStock: 8,
    imageUrl: '/images/products/jacket-4.jpg', status: 'active',
  },
  {
    id: 5, name: 'Basecamp Fleece', category: 'Jaket Gunung', size: 'M',
    description: 'Fleece jacket yang nyaman sebagai mid-layer.',
    pricePerDay: 30000, stockTotal: 6, availableStock: 6,
    imageUrl: '/images/products/jacket-5.jpg', status: 'active',
  },
  {
    id: 6, name: 'Everest Expedition Coat', category: 'Jaket Gunung', size: 'L',
    description: 'Coat ekspedisi heavy-duty dengan triple insulation.',
    pricePerDay: 85000, stockTotal: 2, availableStock: 2,
    imageUrl: '/images/products/jacket-6.jpg', status: 'active',
  },
  {
    id: 7, name: 'Ridge Softshell', category: 'Jaket Gunung', size: 'M',
    description: 'Softshell jacket yang fleksibel dan stretchy.',
    pricePerDay: 40000, stockTotal: 4, availableStock: 4,
    imageUrl: '/images/products/jacket-7.jpg', status: 'active',
  },
  {
    id: 8, name: 'Peak Thermal Hoodie', category: 'Jaket Gunung', size: 'XL',
    description: 'Hoodie thermal dengan teknologi heat-trap lining.',
    pricePerDay: 35000, stockTotal: 5, availableStock: 5,
    imageUrl: '/images/products/jacket-8.jpg', status: 'active',
  },
];

const useAvailability = (startDate, endDate, category) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const refetch = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchItems(startDate, endDate, category);
      const normalized = data.map(normalizeItem);
      setItems(normalized);
    } catch (err) {
      console.warn('API unavailable, using local mock data:', err.message);
      // Fallback to mock data when backend isn't running
      let filtered = [...MOCK_ITEMS];
      if (category && category !== 'Semua') {
        filtered = filtered.filter(i => i.category === category);
      }
      setItems(filtered);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Debounce: wait 300ms after user stops changing dates
    const timeoutId = setTimeout(() => {
      if (startDate && endDate) {
        refetch();
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [startDate, endDate, category]);

  return { items, loading, error, refetch };
};

export default useAvailability;

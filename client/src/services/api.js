import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

/**
 * Fetch items, filtered by availability if dates are provided.
 * Uses /items/available when dates are given, /items otherwise.
 */
export const fetchItems = async (startDate, endDate, category) => {
  if (startDate && endDate) {
    const params = { start_date: startDate, end_date: endDate };
    if (category && category !== 'Semua') {
      params.category = category;
    }
    const response = await api.get('/items/available', { params });
    return response.data;
  } else {
    const params = {};
    if (category && category !== 'Semua') {
      params.category = category;
    }
    const response = await api.get('/items', { params });
    return response.data;
  }
};

export const fetchItemById = async (id) => {
  const response = await api.get(`/items/${id}`);
  return response.data;
};

/**
 * Create a reservation.
 * @param {Object} data - { itemId, startDate, endDate, quantity, userName, userPhone, userEmail, ktpUrl }
 */
export const createReservation = async (data) => {
  const response = await api.post('/reservations', data);
  return response.data;
};

/**
 * Create a Midtrans Snap payment for a reservation.
 * @param {number} reservationId
 */
export const createPayment = async (reservationId) => {
  const response = await api.post('/payments/create', { reservationId });
  return response.data;
};

/**
 * Upload KTP image.
 * @param {File} file
 */
export const uploadKTP = async (file) => {
  const formData = new FormData();
  formData.append('ktp', file);
  const response = await api.post('/upload/ktp', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

/**
 * Get payment status by Midtrans order ID.
 */
export const getPaymentStatus = async (orderId) => {
  const response = await api.get(`/payments/status/${orderId}`);
  return response.data;
};

export default api;

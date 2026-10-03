import React, { useState } from 'react';

const useCheckout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [dates, setDates] = useState({ start: null, end: null });
  const [quantity, setQuantity] = useState(1);
  const [userData, setUserData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    ktpUrl: '',
  });
  const [paymentStatus, setPaymentStatus] = useState(null); // null, 'pending', 'success', 'error'
  const [orderId, setOrderId] = useState(null);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
  
  const reset = () => {
    setCurrentStep(1);
    setSelectedItem(null);
    setQuantity(1);
    setPaymentStatus(null);
    setOrderId(null);
  };

  return {
    currentStep,
    selectedItem,
    setSelectedItem,
    dates,
    setDates,
    quantity,
    setQuantity,
    userData,
    setUserData,
    paymentStatus,
    setPaymentStatus,
    orderId,
    setOrderId,
    nextStep,
    prevStep,
    reset,
  };
};

export default useCheckout;

import React from 'react';
import { FiCheck } from 'react-icons/fi';

const Stepper = ({ currentStep, steps }) => {
  return (
    <div className="flex items-center justify-between w-full mb-8 relative">
      {/* Connecting lines */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-dark-elevated -z-10 rounded-full"></div>
      
      {steps.map((step, index) => {
        const stepNum = index + 1;
        const isActive = currentStep === stepNum;
        const isCompleted = currentStep > stepNum;
        
        return (
          <div key={index} className="flex flex-col items-center">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
                isCompleted 
                  ? 'bg-primary text-white ring-4 ring-dark-surface' 
                  : isActive 
                    ? 'bg-accent text-dark ring-4 ring-dark-surface' 
                    : 'bg-dark-elevated text-gray-400 ring-4 ring-dark-surface'
              }`}
            >
              {isCompleted ? <FiCheck size={20} /> : stepNum}
            </div>
            <span className={`mt-2 text-xs font-medium ${isActive ? 'text-accent' : isCompleted ? 'text-mist' : 'text-gray-500'}`}>
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;

"use client";

import React, { useState } from 'react';
import MontessoriComponent from './MontessoriComponent';
import PlusTwoHomeComponent from './PlusTwoHomeComponent';
import BbaHomeComponent from './BbaHomeComponent';
import GradeTen from './GradeTen';

const AcademicsSection: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState('Montessori');
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const handleButtonClick = (component: string) => {
    setDirection(activeComponent === component ? direction : component === 'Montessori' ? 'left' : 'right');
    setActiveComponent(component);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'Montessori':
        return <MontessoriComponent />;
      case 'gradeten':
        return <GradeTen />;
      case '+2':
        return <PlusTwoHomeComponent />;
      case 'BBA':
        return <BbaHomeComponent />;
      default:
        return null;
    }
  };

  return (
    <div className="relative overflow-hidden bg-gray-100 p-4 md:p-8 rounded-lg flex flex-col items-start gap-4 md:gap-8 min-h-[500px]">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Academics</h2>
        <div className="flex gap-2 md:gap-4 flex-wrap">
          <button
            onClick={() => handleButtonClick('Montessori')}
            className={`px-2 py-1 md:px-4 md:py-2 font-semibold rounded-md transition duration-300 ${
              activeComponent === 'Montessori' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-white hover:bg-gray-600'
            }`}
          >
            Montessori
          </button>
          <button
            onClick={() => handleButtonClick('gradeten')}
            className={`px-2 py-1 md:px-4 md:py-2 font-semibold rounded-md transition duration-300 ${
              activeComponent === 'gradeten' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-white hover:bg-gray-600'
            }`}
          >
            1 to 10
          </button>
          <button
            onClick={() => handleButtonClick('+2')}
            className={`px-2 py-1 md:px-4 md:py-2 font-semibold rounded-md transition duration-300 ${
              activeComponent === '+2' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-white hover:bg-gray-600'
            }`}
          >
            +2
          </button>
          <button
            onClick={() => handleButtonClick('BBA')}
            className={`px-2 py-1 md:px-4 md:py-2 font-semibold rounded-md transition duration-300 ${
              activeComponent === 'BBA' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-white hover:bg-gray-600'
            }`}
          >
            BBA
          </button>
        </div>
      </div>
      <div className={`w-full transition-transform duration-500 ${direction === 'left' ? 'animate-slide-left' : 'animate-slide-right'}`}>
        {renderActiveComponent()}
      </div>
    </div>
  );
};

export default AcademicsSection;

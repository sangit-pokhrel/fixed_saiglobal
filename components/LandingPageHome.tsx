import React from 'react';
import Navbar from './Navbar';

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-black">
      {/* Navbar Component */}
      <Navbar />

      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          className="min-w-full min-h-full absolute object-cover"
        >
          <source src="/images/school.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>
      </div>

      {/* Overlay Text */}
      <div className="relative z-10 flex-grow flex items-center justify-start text-left text-white px-6 md:px-20">
        <div className="bg-opacity-70 rounded-lg p-6 md:p-12">
          <h1 className="text-4xl md:text-6xl font-bold">SAI GLOBAL ACADEMY</h1>
          <p className="mt-4 text-lg md:text-2xl">Shaping the future, one student at a time.</p>
          <button className="mt-6 bg-[#2A3C5E] text-white px-6 py-3 rounded-md shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
            Take A Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

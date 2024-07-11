import React from 'react';

const JourneyWithUs = () => {
  const images = [
    '/images/eventcard.png',
    '/images/eventcard.png',
    '/images/eventcard.png',
    '/images/eventcard.png',
    '/images/eventcard.png',
    '/images/eventcard.png',
    '/images/eventcard.png',
    '/images/eventcard.png',
    '/images/eventcard.png',
    '/images/eventcard.png',
    '/images/eventcard.png',
    '/images/eventcard.png',
    '/images/eventcard.png',
    '/images/eventcard.png',
    '/images/eventcard.png',
    '/images/eventcard.png',
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#7E3F3F]">
        <span className="underline underline-offset-4 decoration-[#7E3F3F]">YOUR JOURNEY WITH US</span>
      </h2>
      <div className="relative">
        <div className="absolute right-0 -top-10">
          <svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32H62C62 48.5685 48.5685 62 32 62C15.4315 62 2 48.5685 2 32C2 15.4315 15.4315 2 32 2V0Z"
              fill="#7E3F3F"
            />
          </svg>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <div key={index} className={`w-full transform ${index % 2 === 0 ? 'rotate-6' : '-rotate-8'}`}>
              <img src={image} alt={`Journey ${index + 1}`} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyWithUs;

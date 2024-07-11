'use client'
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { useSwipeable } from 'react-swipeable';

const NewsAndEvents: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      src: 'https://via.placeholder.com/600x400.png?text=Event+1',
      alt: 'Event 1',
      title: 'Event Title 1',
      description: 'Event description goes here. This is a brief description of the event.',
    },
    {
      src: 'https://via.placeholder.com/600x400.png?text=Event+2',
      alt: 'Event 2',
      title: 'Event Title 2',
      description: 'Event description goes here. This is a brief description of the event.',
    },
    {
      src: 'https://via.placeholder.com/600x400.png?text=Event+3',
      alt: 'Event 3',
      title: 'Event Title 3',
      description: 'Event description goes here. This is a brief description of the event.',
    },
  ];

  const handleImageChange = (index: number) => {
    setCurrentImage(index);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleImageChange((currentImage + 1) % images.length),
    onSwipedRight: () => handleImageChange((currentImage - 1 + images.length) % images.length),
  });

  return (
    <div className="bg-pink-50 min-h-[70vh] flex flex-col items-center py-10 px-10">
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between">
        <div className="text-center md:text-left md:w-1/3">
          <h2 className="text-4xl font-bold">UPCOMING EVENTS</h2>
        </div>
        <div className="relative md:w-2/3 mt-4 md:mt-0" {...swipeHandlers}>
          <img
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            className="w-full h-[28rem] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 px-4 py-2 text-white">
            <h3 className="text-2xl font-bold">{images[currentImage].title}</h3>
            <p className="text-lg mt-2">{images[currentImage].description}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleImageChange(index)}
            className={`w-4 h-4 rounded-full ${currentImage === index ? 'bg-black' : 'bg-gray-500'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default NewsAndEvents;

"use client";

import React, { useState } from 'react';

const events = [
    {
        id: 1,
        title: 'Event 1',
        date: 'Sat / June 15',
        time: '16:00 hours',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor....',
        imgSrc: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        title: 'Event 2',
        date: 'Sat / June 15',
        time: '16:00 hours',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor....',
        imgSrc: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        title: 'Event 3',
        date: 'Sat / June 15',
        time: '16:00 hours',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor....',
        imgSrc: 'https://via.placeholder.com/150',
    },
    {
        id: 4,
        title: 'Event 4',
        date: 'Sat / June 15',
        time: '16:00 hours',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor....',
        imgSrc: 'https://via.placeholder.com/150',
    },
    {
        id: 5,
        title: 'Event 5',
        date: 'Sat / June 15',
        time: '16:00 hours',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor....',
        imgSrc: 'https://via.placeholder.com/150',
    },
    {
        id: 6,
        title: 'Event 6',
        date: 'Sat / June 15',
        time: '16:00 hours',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor....',
        imgSrc: 'https://via.placeholder.com/150',
    },
    {
        id: 7,
        title: 'Event 7',
        date: 'Sat / June 15',
        time: '16:00 hours',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor....',
        imgSrc: 'https://via.placeholder.com/150',
    },
    {
        id: 8,
        title: 'Event 8',
        date: 'Sat / June 15',
        time: '16:00 hours',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor....',
        imgSrc: 'https://via.placeholder.com/150',
    },
];

const EVENTS_PER_PAGE = 6;

const Gallery: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(events.length / EVENTS_PER_PAGE);

    const handleClick = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
    const selectedEvents = events.slice(startIndex, startIndex + EVENTS_PER_PAGE);

    return (
        <div className="p-5">
          
            <div className="bg-pink-100 p-4 rounded-lg mb-5">
                <span className="bg-blue-500 text-white rounded-full px-3 py-1 font-bold">BBA</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {selectedEvents.map(event => (
                    <div key={event.id} className="border border-gray-300 rounded-lg p-4 shadow-sm">
                        <img src={event.imgSrc} alt={event.title} className="w-full h-40 rounded-lg mb-4 object-cover" />
                        <h3 className="text-lg font-semibold">{event.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{event.date}<br />{event.time}</p>
                        <p className="text-sm text-gray-700">{event.description}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
                    <button
                        key={page}
                        onClick={() => handleClick(page)}
                        className={`px-3 py-1 border rounded-full ${page === currentPage ? 'bg-gray-300' : 'bg-gray-200 hover:bg-gray-300'}`}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Gallery;

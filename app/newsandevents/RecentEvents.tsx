// src/components/RecentEvents.tsx
import React from 'react';

const RecentEvents: React.FC = () => {
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
    ];

    return (
        <div className="flex flex-wrap justify-between p-5 h-[60vh]">
             <div className="flex-1 m-auto flex justify-center items-center">
                <h2 className="text-2xl font-bold">RECENT EVENTS</h2>
            </div>
            <div className="flex-1 flex flex-wrap space-x-0 md:space-x-5 h-full">
                {events.map((event, index) => (
                    <div key={event.id} className="flex-1 w-full md:w-1/2 border border-gray-300 rounded-lg p-4 shadow-sm h-full relative mb-5 md:mb-0">
                        {index === 0 && (
                            <div className="absolute top-0 left-0 m-2 p-1 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                                +2
                            </div>
                        )}
                        {index === 1 && (
                            <div className="absolute top-0 right-0 m-2 p-1 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                                BBS
                            </div>
                        )}
                        <img src={event.imgSrc} alt={event.title} className="w-full h-40 md:h-1/2 rounded-lg mb-4 object-cover" />
                        <h3 className="text-lg font-semibold">{event.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{event.date}<br />{event.time}</p>
                        <p className="text-sm text-gray-700">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentEvents;

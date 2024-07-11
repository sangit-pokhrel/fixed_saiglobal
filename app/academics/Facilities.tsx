import React from 'react';

const Facilities = () => {
  return (
    <div className="relative h-[60vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/GC2.png')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative bg-white bg-opacity-90 p-10 rounded-lg max-w-4xl mx-auto text-center shadow-lg">
        <h2 className="text-4xl font-bold mb-8 tracking-widest text-gray-800">OUR FACILITIES</h2>
        <div className="flex justify-around gap-10">
          <ul className="text-left text-gray-700 space-y-2">
            <li className="flex items-center"><span className="mr-2 text-green-600">&#10003;</span>Spacious and well-ventilated classrooms</li>
            <li className="flex items-center"><span className="mr-2 text-green-600">&#10003;</span>Well-equipped library</li>
            <li className="flex items-center"><span className="mr-2 text-green-600">&#10003;</span>Science lab</li>
            <li className="flex items-center"><span className="mr-2 text-green-600">&#10003;</span>Computer lab</li>
            <li className="flex items-center"><span className="mr-2 text-green-600">&#10003;</span>Playground</li>
            <li className="flex items-center"><span className="mr-2 text-green-600">&#10003;</span>Transportation</li>
            <li className="flex items-center"><span className="mr-2 text-green-600">&#10003;</span>Hygienic canteen</li>
          </ul>
          <ul className="text-left text-gray-700 space-y-2">
            <li className="flex items-center"><span className="mr-2 text-green-600">&#10003;</span>Spacious and well-ventilated classrooms</li>
            <li className="flex items-center"><span className="mr-2 text-green-600">&#10003;</span>Well-equipped library</li>
            <li className="flex items-center"><span className="mr-2 text-green-600">&#10003;</span>Science lab</li>
            <li className="flex items-center"><span className="mr-2 text-green-600">&#10003;</span>Computer lab</li>
            <li className="flex items-center"><span className="mr-2 text-green-600">&#10003;</span>Playground</li>
            <li className="flex items-center"><span className="mr-2 text-green-600">&#10003;</span>Transportation</li>
            <li className="flex items-center"><span className="mr-2 text-green-600">&#10003;</span>Hygienic canteen</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Facilities;

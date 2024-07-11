import React from 'react';

const BbaHome: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-start gap-8 min-h-[500px]">
      <div className="flex-grow md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">BBA</h2>
        <div className="border-t-2 border-gray-400 w-20 mb-4"></div>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget...
        </p>
        <a href="#" className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-600 transition duration-300">
          Know More
        </a>
      </div>

      <div className="w-full md:w-1/2 h-full">
        <img
          src="/images/eventcard.png"
          alt="BBA Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default BbaHome;

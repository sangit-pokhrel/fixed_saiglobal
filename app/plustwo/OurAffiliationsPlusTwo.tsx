import React from 'react';

const AffiliationSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div
        className="relative w-full h-[60vh] bg-contain bg-left"
        style={{ backgroundImage: `url('/images/NEB.png')` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative z-10 max-w-6xl mx-auto p-6 bg-[#F7F7F7] bg-opacity-90 shadow-lg">
            <h2 className="text-4xl font-bold text-start tracking-widest">OUR AFFILIATION</h2>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet
                a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet
                a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliationSection;

import React from 'react';

const SneakPeek: React.FC = () => {
  return (
    <div className="bg-gray-100 mt-5">
      <div className="container mx-auto p-4">
        <h1 className="text-center text-3xl font-bold text-black">SNEAK PEEK INTO OUR WORLD</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {/* Image 1 */}
          <div className="relative rounded-lg shadow-md">
            <img src="/images/eventcard.png" alt="Image 1" className="rounded-t-lg w-full" style={{ objectFit: 'cover', height: '200px' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-700 text-lg font-medium">Image Description 1</p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative rounded-lg shadow-md">
            <img src="/images/eventcard.png" alt="Image 2" className="rounded-t-lg w-full" style={{ objectFit: 'cover', height: '200px' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-700 text-lg font-medium">Image Description 2</p>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative rounded-lg shadow-md">
            <img src="/images/eventcard.png" alt="Image 3" className="rounded-t-lg w-full" style={{ objectFit: 'cover', height: '200px' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-700 text-lg font-medium">Image Description 3</p>
            </div>
          </div>

          {/* Image 4 */}
          <div className="relative rounded-lg shadow-md">
            <img src="/images/eventcard.png" alt="Image 4" className="rounded-t-lg w-full" style={{ objectFit: 'cover', height: '200px' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-700 text-lg font-medium">Image Description 4</p>
            </div>
          </div>

          {/* Image 5 */}
          <div className="relative rounded-lg shadow-md">
            <img src="/images/eventcard.png" alt="Image 5" className="rounded-t-lg w-full" style={{ objectFit: 'cover', height: '200px' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-700 text-lg font-medium">Image Description 5</p>
            </div>
          </div>

          {/* Image 6 */}
          <div className="relative rounded-lg shadow-md">
            <img src="/images/eventcard.png" alt="Image 6" className="rounded-t-lg w-full" style={{ objectFit: 'cover', height: '200px' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-700 text-lg font-medium">Image Description 6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SneakPeek;

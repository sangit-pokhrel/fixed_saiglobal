import React from 'react';

const Welcome = () => {
  return (
    <div className="welcome-area min-h-12 flex items-center justify-center bg-gray-100 mt-0">
      <div className="container mx-auto bg-white shadow-xl overflow-hidden">
        <div className="relative h-16 bg-cover bg-center bg-[#1B263B]">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-2xl md:text-4xl font-extrabold text-white text-center px-4">
              WELCOME TO SAI GLOBAL ACADEMY
            </h1>
          </div>
        </div>
        <div className="p-8 md:p-16 flex flex-col md:flex-row items-center md:space-x-8">
          <div className="flex-shrink-0 w-full md:w-2/5 lg:w-1/3 flex items-center justify-center mb-6 md:mb-0 item">
            <img
              src="https://images.pexels.com/photos/22039184/pexels-photo-22039184/free-photo-of-ladner-clock-tower-and-irving-k-barber-learning-centre-in-vancouver-canada.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="school"
              className="h-64 md:h-96 w-64 md:w-96 shadow-md transform hover:scale-105 transition-transform duration-300 imagelanding"
            />
          </div>
          <div className="flex-1 text-center md:text-left px-4 md:px-0">
            <p className="text-gray-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facere et voluptatum magnam rerum eius similique nam alias doloribus assumenda deserunt aliquam voluptas, eum quisquam accusantium numquam sapiente. Distinctio vitae in quos mollitia labore esse id facere! Nulla voluptate libero laborum iusto possimus distinctio, alias perspiciatis eaque cumque, assumenda atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ab quam tempore voluptatum nihil autem debitis numquam iste dignissimos eaque enim, delectus reiciendis facilis. Fuga ab neque eos accusantium dolores! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam amet eius minima soluta quasi beatae. Magnam beatae illum ratione placeat. Blanditiis quo iure voluptatibus numquam ipsa, impedit, error voluptatem, veritatis sint maiores rerum. Tempora omnis odit ex. Maxime amet eveniet nihil dolorum iusto. Earum saepe odit id dolor ex! Iste.
            </p>
            <div className="text-center md:text-left">
              <button className="bg-[#704747] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#563636] transform hover:scale-105 transition-transform duration-300">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

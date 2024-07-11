import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <div className="newsletter p-3 m-auto text-center bg-[#FFF1EF]">
      <form className="flex flex-col md:flex-row justify-between items-center px-5 gap-3">
        <div className="heading text-2xl font-bold tracking-widest md:w-1/5 text-center md:text-left">
          <span className="font-bold text-[#1B263B]">NEWSLETTER</span>
        </div>
        <div className="name w-full md:w-2/5">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="email flex w-full md:w-2/5 md:justify-end items-center">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
          />
          <button
            type="submit"
            className="bg-slate-600 py-2 px-4 text-white rounded-md ml-2 md:ml-0 mt-2 md:mt-0 md:ml-2"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;

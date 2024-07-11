import React from 'react';
import 'tailwindcss/tailwind.css';

const ContactSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-pink-100 to-pink-200 flex items-center justify-center min-h-screen py-10">
      <div className="max-w-6xl mx-auto p-8 bg-white shadow-2xl rounded-3xl flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-4xl font-extrabold text-center md:text-left mb-12 text-gray-800">BASIC INFORMATION</h2>
          <div className="space-y-8 mb-12">
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-pink-200 p-6 rounded-2xl shadow-lg w-full text-center md:text-left transform transition duration-500 hover:scale-105">
                <div className="flex items-center justify-center md:justify-start mb-3">
                  <span className="material-icons text-pink-600 text-3xl">location_on</span>
                  <h3 className="ml-2 text-xl font-semibold text-gray-800">Busdiliya</h3>
                </div>
                <p className="text-gray-600">Bhairahawa, Nepal</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-purple-800 text-white p-6 rounded-2xl shadow-lg w-full text-center md:text-left transform transition duration-500 hover:scale-105">
                <div className="flex items-center justify-center md:justify-start mb-3">
                  <span className="material-icons text-pink-300 text-3xl">phone</span>
                  <h3 className="ml-2 text-xl font-semibold">Contact</h3>
                </div>
                <p>+071-5263555/XXXXXX</p>
                <p>+071-5263555/XXXXXX</p>
                <p>+071-5263555/XXXXXX</p>
                <p>saiglobalcollege@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-pink-200 p-6 rounded-2xl shadow-lg w-full text-center md:text-left transform transition duration-500 hover:scale-105">
                <div className="flex items-center justify-center md:justify-start mb-3">
                  <span className="material-icons text-pink-600 text-3xl">access_time</span>
                  <h3 className="ml-2 text-xl font-semibold text-gray-800">Hours</h3>
                </div>
                <p className="text-gray-600">SUNDAY ~ FRIDAY</p>
                <p className="text-gray-600">7:00 ~ 17:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-6 bg-pink-100 rounded-2xl shadow-lg flex items-center justify-center">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Email"
                required
              />
            </div>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="Contact Number"
              required
            />
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="Message"
              rows={4}
            ></textarea>
            <button type="submit" className="w-full py-3 bg-purple-800 text-white rounded-lg shadow-md transform transition duration-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300">
              CONTACT US
            </button>
          </form>
        </div>
      </div>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </div>
  );
};

export default ContactSection;

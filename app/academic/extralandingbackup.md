"use client";

import React, { useState } from 'react';

const AcademicsHero: React.FC = () => {
    const [activeSection, setActiveSection] = useState('montessori');

    const handleSectionChange = (section: string) => {
        setActiveSection(section);
    };

    return (
        <>


        <div className='bg-[#fff]'>
            <div className="relative w-full h-48 flex items-center justify-center text-center">
                <img
                    src="/images/eventcard.png"
                    alt="Background"
                    className="absolute w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative text-white">
                    <h1 className="text-5xl font-bold underline underline-offset-8">ABOUT US</h1>
                    <p className="text-2xl mt-2">Sai Global Academy</p>
                </div>
            </div>
            <div className="relative flex justify-center py-16 bg-gray-100">
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src="/images/eventcard.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                </div>
                <div className="absolute top-4 right-4 flex space-x-2 z-20">
                    <button
                        onClick={() => handleSectionChange('montessori')}
                        className={`px-4 py-2 rounded-full ${activeSection === 'montessori' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        1
                    </button>
                    <button
                        onClick={() => handleSectionChange('secondary')}
                        className={`px-4 py-2 rounded-full ${activeSection === 'secondary' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        2
                    </button>
                </div>
                <div className="relative z-10 bg-white bg-opacity-90 p-8 shadow-lg max-w-4xl">
                    {activeSection === 'montessori' ? (
                        <div>
                            <h2 className="text-4xl font-bold mb-4 text-center">MONTESSORI</h2>
                            <p className="text-justify text-gray-700 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget...
                            </p>
                        </div>
                    ) : (
                        <div>
                            <h2 className="text-4xl font-bold mb-4 text-center">SECONDARY</h2>
                            <p className="text-justify text-gray-700 leading-relaxed">
                                This is the content for the secondary section. Replace this with actual content.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>

         <div className="flex bg-white p-8">
            <div className="w-4/5">
                <div className="text-start mb-4 bg-[#FFF1EF] p-5 w-fit">
                    <h2 className="text-xl font-bold mb-4">Montessori</h2>
                    <p className=" text-justify max-w-5xl  text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget...
                    </p>
                </div>

                <div className="flex justify-around mb-4 space-x-4 bg-[#704747]  p-5 ">
                    <div className=" text-white py-2 px-40 " style={{borderRight: "2px solid #fff", paddingRight: '9rem'}}>
                        <h3 className="text-base font-bold">A ~ B Age Students</h3>
                    </div>
                    <div className=" text-white py-2 px-4 ">
                        <h3 className="text-base font-bold">XX Trained Teachers</h3>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-start space-y-4 lg:space-y-0 lg:space-x-4">
                    <div className="bg-blue-900 text-white p-6 rounded-lg w-full lg:w-1/2">
                        <h4 className="text-lg font-bold mb-4">Facilities</h4>
                        <ul className="list-disc list-inside">
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>
                    <div className="bg-blue-900 text-white p-6 rounded-lg shadow-md w-full lg:w-1/2">
                        <h4 className="text-lg font-bold mb-4">Facilities</h4>
                        <ul className="list-disc list-inside">
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="w-1/5 flex flex-col justify-between pl-4">
                <div className="w-full h-1/3 mb-4">
                    <img src="/images/eventcard.png" alt="Event" className="object-cover w-full h-full rounded-lg shadow-md" />
                </div>
                <div className="w-full h-1/3 mb-4">
                    <img src="/images/eventcard.png" alt="Event" className="object-cover w-full h-full rounded-lg shadow-md" />
                </div>
                <div className="w-full h-1/3 mb-4">
                    <img src="/images/eventcard.png" alt="Event" className="object-cover w-full h-full rounded-lg shadow-md" />
                </div>
            </div>
        </div>



    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center py-10">Grade 1 - 10</h1>
      <p className="text-gray-600 text-center mb-10">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Donec quam felis,ultricies nec,
        pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
        justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
        felis eu pedemollis pretium. Integer tincidunt. Cras dapibus. Vivamus
        elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
        porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
        dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
        metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
        nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget....
      </p>
      <div className="flex justify-center mb-10">
        <div className="bg-gray-200 p-4 rounded-md w-1/3 mr-4">
          <h2 className="text-lg font-bold">XX Qualified Teachers</h2>
        </div>
        <div className="bg-gray-200 p-4 rounded-md w-1/3 mr-4">
          <h2 className="text-lg font-bold">XX Pass Rate</h2>
        </div>
        <div className="bg-gray-200 p-4 rounded-md w-1/3">
          <h2 className="text-lg font-bold">XX Pass Rate</h2>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Facilities</h2>
      <ul className="list-none mb-10">
        <li className="flex items-center mb-4">
          <span className="bg-gray-200 p-2 rounded-md mr-4">•</span>
          <p className="text-gray-600">Lorem Ipsum</p>
        </li>
        <li className="flex items-center mb-4">
          <span className="bg-gray-200 p-2 rounded-md mr-4">•</span>
          <p className="text-gray-600">Lorem Ipsum</p>
        </li>
        <li className="flex items-center mb-4">
          <span className="bg-gray-200 p-2 rounded-md mr-4">•</span>
          <p className="text-gray-600">Lorem Ipsum</p>
        </li>
        <li className="flex items-center mb-4">
          <span className="bg-gray-200 p-2 rounded-md mr-4">⚫</span>
          <p className="text-gray-600">Lorem Ipsum</p>
        </li>
        <li className="flex items-center mb-4">
          <span className="bg-gray-200 p-2 rounded-md mr-4">•</span>
          <p className="text-gray-600">Lorem Ipsum</p>
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Facilities</h2>
      <ul className="list-none mb-10">
        <li className="flex items-center mb-4">
          <span className="bg-gray-200 p-2 rounded-md mr-4">•</span>
          <p className="text-gray-600">Lorem Ipsum</p>
        </li>
        <li className="flex items-center mb-4">
          <span className="bg-gray-200 p-2 rounded-md mr-4">⚫</span>
          <p className="text-gray-600">Lorem Ipsum</p>
        </li>
        <li className="flex items-center mb-4">
          <span className="bg-gray-200 p-2 rounded-md mr-4">.</span>
          <p className="text-gray-600">Lorem Ipsum</p>
        </li>
        <li className="flex items-center mb-4">
          <span className="bg-gray-200 p-2 rounded-md mr-4">•</span>
          <p className="text-gray-600">Lorem Ipsum</p>
        </li>
      </ul>
    </div>



        </>

    );
};

export default AcademicsHero;

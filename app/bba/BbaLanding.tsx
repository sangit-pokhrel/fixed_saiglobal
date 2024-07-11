"use client";



import React , { useState } from 'react'
import Link from "next/link"


const BbaLanding = () => {
    const [activeSection, setActiveSection] = useState('bba');
 
    const handleSectionChange = (section: string) => {
        setActiveSection(section);
    };
  return (
    <div> <div className='bg-[#fff]'>
    <div className="relative w-full h-48 flex items-center justify-center text-center">
        <img
            src="/images/eventcard.png"
            alt="Background"
            className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-white">
            <h1 className="text-5xl font-bold underline underline-offset-8">ACADEMICS BBA</h1>
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
        <Link
                href = 'grade10'
                className={`px-4 py-2 rounded-full bg-gray-200 `}
            >
                Grade 10
            </Link>
        <Link
                href = 'plustwo'
                className={`px-4 py-2 rounded-full ${activeSection === 'montessori' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
                Montessori
            </Link>

            <Link
                href = 'plustwo'
                className={`px-4 py-2 rounded-full ${activeSection === 'plustwo' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
                +2
            </Link>
            <Link
                href= '/bba'
                className={`px-8 py-2 rounded-full ${activeSection === 'bba' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
                BBA
            </Link>
        </div>
        <div className="relative z-10 bg-white bg-opacity-90 p-8 shadow-lg max-w-4xl">
         
                <div>
                    <h2 className="text-4xl font-bold mb-4 text-center">BBA</h2>
                    <p className="text-justify text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget...
                    </p>
                </div>
        
        </div>
    </div>
</div></div>
  )
}

export default BbaLanding
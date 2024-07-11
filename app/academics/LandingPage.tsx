import React from 'react';

const AcademicsHero: React.FC = () => {
    return (
        <div className='bg-gray-100'>
            <div className="relative w-full h-48 flex items-center justify-center text-center">
                <img
                    src="/images/eventcard.png" // Replace this with the path to your uploaded image
                    alt="Background"
                    className="absolute w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative text-white">
                    <h1 className="text-5xl font-bold underline underline-offset-8">ACADEMICS</h1>
                    <p className="text-2xl mt-2">Sai Global Academy</p>
                </div>
            </div>
            <div className="p-8 text-center flex-wrap">
                <h2 className="text-4xl font-bold">MONTESSORI</h2>
                <p className="text-justify bg-[#EFD9FD] leading-relaxed max-w-4xl mx-auto rounded-md text-gray-700 px-8 py-6" style={{borderLeft: "4px solid #6B46C1", borderRight: "4px solid #6B46C1"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget...
                </p>
            </div>
        </div>
    );
}

export default AcademicsHero;

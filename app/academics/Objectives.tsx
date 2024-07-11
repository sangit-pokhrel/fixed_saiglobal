import React from 'react';

const SchoolSection = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col lg:w-2/3 gap-4">
          <div className="bg-[#FFF1EF] p-4 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4 underline underline-offset-4 italic decoration-[#1B263B] text-[#1B263B]">
              OBJECTIVE
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
              fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
              justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
              ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
              metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi. Nam eget.....
            </p>
          </div>
          <div className="bg-[#FFF1EF] p-4 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4 underline underline-offset-4 italic decoration-[#1B263B] text-[#1B263B]">
              GRADING
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
              fringilla vel, aliquet nec, vulputate eget, arcu.
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</li>
              <li>Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</li>
              <li>Cras dapibus.</li>
              <li>Vivamus elementum semper nisi.</li>
            </ul>
          </div>
        </div>
        <div className="bg-[#FFF1EF] p-5 rounded shadow-md lg:w-1/3 h-fit my-auto">
          <h2 className="text-2xl font-bold mb-4 underline underline-offset-4 italic decoration-[#1B263B] text-[#1B263B]">
            ELIGIBILITY CRITERIA
          </h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
            fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
            justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</li>
            <li>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</li>
            <li>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</li>
            <li>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.</li>
            <li>Aenean imperdiet.</li>
            <li>Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget.....</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SchoolSection;

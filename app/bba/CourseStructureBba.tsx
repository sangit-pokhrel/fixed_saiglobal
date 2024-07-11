import React from 'react';

const CourseStructure = () => {
  return (
    <div className="container my-12">
        
    <div className="container bg-[rgba(0,0,0,0.04)] p-8 w-[80%] flex flex-col justify-center align-center m-auto">

      <h2 className="text-3xl font-bold mb-3 text-[#7E3F3F]">COURSE STRUCTURE</h2>
      <div className="container flex justify-center align-center m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%]">
        <div className="w-full">
          <table className="min-w-full border-collapse bg-white rounded shadow-md">
            <thead className="bg-[#7E3F3F] text-white">
              <tr>
                <th className="py-2 px-4">YEAR I / COURSE</th>
                <th className="py-2 px-4">CREDIT HOURS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border py-2 px-4">ABCDEFGHIJK</td>
                <td className="border py-2 px-4">PQ</td>
              </tr>
              <tr>
                <td className="border py-2 px-4">ABCDEFGHIJK</td>
                <td className="border py-2 px-4">PQ</td>
              </tr>
              <tr>
                <td className="border py-2 px-4">ABCDEFGHIJK</td>
                <td className="border py-2 px-4">PQ</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-full">
          <table className="min-w-full border-collapse bg-white rounded shadow-md">
            <thead className="bg-[#7E3F3F] text-white">
              <tr>
                <th className="py-2 px-4">YEAR II / COURSE</th>
                <th className="py-2 px-4">CREDIT HOURS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border py-2 px-4">ABCDEFGHIJK</td>
                <td className="border py-2 px-4">PQ</td>
              </tr>
              <tr>
                <td className="border py-2 px-4">ABCDEFGHIJK</td>
                <td className="border py-2 px-4">PQ</td>
              </tr>
              <tr>
                <td className="border py-2 px-4">ABCDEFGHIJK</td>
                <td className="border py-2 px-4">PQ</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-full">
          <table className="min-w-full border-collapse bg-white rounded shadow-md">
            <thead className="bg-[#7E3F3F] text-white">
              <tr>
                <th className="py-2 px-4">YEAR III / COURSE</th>
                <th className="py-2 px-4">CREDIT HOURS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border py-2 px-4">ABCDEFGHIJK</td>
                <td className="border py-2 px-4">PQ</td>
              </tr>
              <tr>
                <td className="border py-2 px-4">ABCDEFGHIJK</td>
                <td className="border py-2 px-4">PQ</td>
              </tr>
              <tr>
                <td className="border py-2 px-4">ABCDEFGHIJK</td>
                <td className="border py-2 px-4">PQ</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-full">
          <table className="min-w-full border-collapse bg-white rounded shadow-md">
            <thead className="bg-[#7E3F3F] text-white">
              <tr>
                <th className="py-2 px-4">YEAR IV / COURSE</th>
                <th className="py-2 px-4">CREDIT HOURS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border py-2 px-4">ABCDEFGHIJK</td>
                <td className="border py-2 px-4">PQ</td>
              </tr>
              <tr>
                <td className="border py-2 px-4">ABCDEFGHIJK</td>
                <td className="border py-2 px-4">PQ</td>
              </tr>
              <tr>
                <td className="border py-2 px-4">ABCDEFGHIJK</td>
                <td className="border py-2 px-4">PQ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>


      </div>
    </div>
  );
};

export default CourseStructure;

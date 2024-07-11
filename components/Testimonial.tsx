"use client";

import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";

const Testimonial = () => {
  const [showExtraImages, setShowExtraImages] = useState(false);

  const handleShowExtraImages = () => {
    setShowExtraImages(!showExtraImages);
  };

  return (
    <div className="bg-gray-100 py-10 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative bg-white rounded-lg shadow-lg overflow-hidden">
        <h2 className="text-3xl font-bold pt-2 text-center text-[#1B263B]">
          WITNESS OUR WORLD
        </h2>
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          emulateTouch={true}
          renderArrowPrev={(clickHandler, hasPrev) =>
            hasPrev && (
              <button
                onClick={clickHandler}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full shadow-lg"
                style={{ zIndex: 1 }}
              >
                &lt;
              </button>
            )
          }
          renderArrowNext={(clickHandler, hasNext) =>
            hasNext && (
              <button
                onClick={clickHandler}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full shadow-lg"
                style={{ zIndex: 1 }}
              >
                &gt;
              </button>
            )
          }
        >
          <div className="testimonial-wrapper flex flex-col md:flex-row gap-6 p-5 bg-white rounded-lg shadow-md">
            <div className="review flex flex-col items-center justify-center md:w-1/2 p-3">
              <img
                src="/images/eventcard.png"
                alt="review logo"
                className="rounded-lg shadow-md mb-4 w-full"
                style={{ height: "auto", maxHeight: "250px" }}
              />
              <p className="text-justify mt-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                accusamus quaerat illo minus unde nulla fugiat labore ducimus
                magni rerum. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Ipsa assumenda praesentium obcaecati corrupti
                exercitationem, quo, aliquam voluptates velit earum laborum quasi!
                Inventore vero expedita quibusdam doloremque eveniet consequatur
                vitae reprehenderit.
              </p>
              <div className="details self-end mt-4 text-right text-gray-900">
                <h1 className="font-semibold">ABCDEFGH</h1>
                <h1 className="mt-2">123456789</h1>
                <h1 className="mt-2">sdsdbfd fkssdf</h1>
              </div>
              <button
                onClick={handleShowExtraImages}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded block md:hidden"
              >
                {showExtraImages ? "Hide Images" : "Show More Images"}
              </button>
            </div>
            <div
              className={`image-wrapper flex flex-col gap-3 w-full md:w-1/2 ${
                showExtraImages ? "block" : "hidden md:flex"
              }`}
            >
              <img
                src="/images/eventcard.png"
                alt="testimonial"
                className="rounded-lg shadow-md w-full"
                style={{ height: "auto", maxHeight: "250px" }}
              />
              <img
                src="/images/eventcard.png"
                alt="testimonial"
                className="rounded-lg shadow-md w-full"
                style={{ height: "auto", maxHeight: "250px" }}
              />
            </div>
          </div>
          {/* Add more carousel items as needed */}
          <div className="testimonial-wrapper flex flex-col md:flex-row gap-6 p-5 bg-white rounded-lg shadow-md">
            <div className="review flex flex-col items-center justify-center md:w-1/2 p-5">
              <img
                src="/images/eventcard.png"
                alt="review logo"
                className="rounded-lg shadow-md mb-4 w-full"
                style={{ height: "auto", maxHeight: "250px" }}
              />
              <p className="text-justify mt-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                accusamus quaerat illo minus unde nulla fugiat labore ducimus
                magni rerum. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Ipsa assumenda praesentium obcaecati corrupti
                exercitationem, quo, aliquam voluptates velit earum laborum quasi!
                Inventore vero expedita quibusdam doloremque eveniet consequatur
                vitae reprehenderit.
              </p>
              <div className="details self-end mt-4 text-right text-gray-900">
                <h1 className="font-semibold">ABCDEFGH</h1>
                <h1 className="mt-2">123456789</h1>
                <h1 className="mt-2">sdsdbfd fkssdf</h1>
              </div>
              <button
                onClick={handleShowExtraImages}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded block md:hidden"
              >
                {showExtraImages ? "Hide Images" : "Show More Images"}
              </button>
            </div>
            <div
              className={`image-wrapper flex flex-col gap-3 w-full md:w-1/2 ${
                showExtraImages ? "block" : "hidden md:flex"
              }`}
            >
              <img
                src="/images/eventcard.png"
                alt="testimonial"
                className="rounded-lg shadow-md w-full"
                style={{ height: "auto", maxHeight: "250px" }}
              />
              <img
                src="/images/eventcard.png"
                alt="testimonial"
                className="rounded-lg shadow-md w-full"
                style={{ height: "auto", maxHeight: "250px" }}
              />
            </div>
          </div>
          <div className="testimonial-wrapper flex flex-col md:flex-row gap-6 p-5 bg-white rounded-lg shadow-md">
            <div className="review flex flex-col items-center justify-center md:w-1/2 p-5">
              <img
                src="/images/eventcard.png"
                alt="review logo"
                className="rounded-lg shadow-md mb-4 w-full"
                style={{ height: "auto", maxHeight: "250px" }}
              />
              <p className="text-justify mt-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                accusamus quaerat illo minus unde nulla fugiat labore ducimus
                magni rerum. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Ipsa assumenda praesentium obcaecati corrupti
                exercitationem, quo, aliquam voluptates velit earum laborum quasi!
                Inventore vero expedita quibusdam doloremque eveniet consequatur
                vitae reprehenderit.
              </p>
              <div className="details self-end mt-4 text-right text-gray-900">
                <h1 className="font-semibold">ABCDEFGH</h1>
                <h1 className="mt-2">123456789</h1>
                <h1 className="mt-2">sdsdbfd fkssdf</h1>
              </div>
              <button
                onClick={handleShowExtraImages}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded block md:hidden"
              >
                {showExtraImages ? "Hide Images" : "Show More Images"}
              </button>
            </div>
            <div
              className={`image-wrapper flex flex-col gap-3 w-full md:w-1/2 ${
                showExtraImages ? "block" : "hidden md:flex"
              }`}
            >
              <img
                src="/images/eventcard.png"
                alt="testimonial"
                className="rounded-lg shadow-md w-full"
                style={{ height: "auto", maxHeight: "250px" }}
              />
              <img
                src="/images/eventcard.png"
                alt="testimonial"
                className="rounded-lg shadow-md w-full"
                style={{ height: "auto", maxHeight: "250px" }}
              />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;

import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const FooterSection: React.FC = () => {
  return (
    <footer>
      <div className="footer bg-[#1B263B] text-white p-10">
        <div className="footer-container flex flex-col md:flex-row gap-10">
          <div className="left-footer w-full md:w-1/2 flex flex-col justify-center items-center m-auto">
            <img src="/images/slogo.png" alt="slogo" className="m-auto" style={{ width: "200px", height: "200px" }} />
            <p className="text-justify mt-4 md:mt-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
              provident omnis, cumque sunt officiis minima dignissimos
              repudiandae. Consequatur, accusantium cupiditate.
            </p>
          </div>
          <div className="right-footer flex flex-col gap-10 w-full md:w-2/3 mt-10 md:mt-0 md:border-l-2 md:border-white">
            <div className="top-right flex flex-col md:flex-row gap-10 justify-center md:justify-around">
              <div className="links text-center md:text-left">
                <ul className="text-md font-regular tracking-widest">
                  <li>About Us</li>
                  <li>Facilities</li>
                  <li>Calendar</li>
                  <li>Events</li>
                </ul>
              </div>
              <div className="links text-center md:text-left">
                <ul className="text-md font-regular tracking-widest">
                  <li>Gallery</li>
                  <li>Notice</li>
                  <li>Testimonials</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="links text-center md:text-left">
                <ul className="text-md font-regular tracking-widest">
                  <li>Montessori</li>
                  <li>Class 1 to 10</li>
                  <li>Services</li>
                  <li>+2</li>
                  <li>BBS</li>
                </ul>
              </div>
            </div>
            <div className="bottom-right flex flex-col md:flex-row gap-10 justify-between px-4 md:px-[5rem]">
              <div className="bottom-right-left flex flex-col justify-start text-start gap-3">
                <span className="flex items-center gap-3">
                  <FaPhone />
                  +977 9868618385 / +977 9827691222
                </span>
                <span className="flex items-center gap-3">
                  <FaLocationDot />
                  Location Address
                </span>
                <span className="flex items-center gap-3">
                  <IoMail />
                  Email Address
                </span>
              </div>
              <div className="bottom-right-right flex flex-col items-center md:items-end">
                <h3 className="text-lg">Follow Us</h3>
                <div className="social-media flex flex-row gap-4 mt-3">
                  <FaFacebook size={30} />
                  <FaSquareInstagram size={30} />
                  <FaLinkedin size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright bg-[#91C7ED] text-white p-1">
        <div className="container flex flex-col md:flex-row justify-around text-sm text-center md:text-left">
          <div className="left">
            <p>© 2021 School. All Rights Reserved.</p>
          </div>
          <div className="right">
            <p>
              Designed by:{" "}
              <a href="https://www.facebook.com/ashish.ghimire.399" target="_blank" rel="noreferrer">
                Shunya Tech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoCall } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import axios from "axios";

const Navbar = () => {
  const [announcements, setAnnouncements] = useState<{ title: string }[]>([]);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/v1/announcements/"
        );
        setAnnouncements(response.data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="relative z-20">
      {/* Topbar */}
      <div className="topbar px-3 py-3 bg-[#1B263B] text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="leftsidebar">
            <ul className="flex flex-col md:flex-row gap-2 md:gap-5 items-center text-sm md:text-base">
              <li className="flex items-center gap-1">
                <IoCall size={20} />
                <span>071-XXXXXXX, XXXXXXX</span>
              </li>
              <li className="flex items-center gap-1">
                <span>Busdiliya, Bhairahawa</span>
              </li>
            </ul>
          </div>
          <div className="rightsidebar mt-2 md:mt-0">
            <ul className="flex flex-col md:flex-row gap-2 md:gap-5 items-center text-sm md:text-base">
              <li>
                <Link href="/academics">Admission</Link>
              </li>
              <li>
                <Link href="/calendar">Calendar</Link>
              </li>
              <li>
                <Link href="/newsandevents">Events</Link>
              </li>
              <li>
                <Link href="/newsandevents">Media</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar h-16 bg-[#1B263B] text-white border-t-2 border-white relative px-5 md:px-10">
        <div className="container mx-auto flex justify-between items-center h-full">
          <div className="leftsidebar hidden md:flex">
            <ul className="flex flex-row gap-5 md:gap-10 items-center text-sm md:text-xl font-medium">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/academic">Academics</Link>
              </li>
            </ul>
          </div>
          <div className="relative flex items-center justify-center h-screen">
            <Link href="/">
              <img
                src="/images/slogo.png"
                alt="logo"
                className="z-10 h-6 w-6 sm:h-30 sm:w-30 md:h-30 md:w-30 lg:h-40 lg:w-40 cursor-pointer"
              />
            </Link>
          </div>

          <div className="rightsidebar hidden md:flex">
            <ul className="flex flex-row gap-5 md:gap-10 items-center text-sm md:text-xl font-medium">
              <li>
                <Link href="/contact-us">Contact</Link>
              </li>
              <li>
                <Link href="/newsandevents">Events</Link>
              </li>
              <li>
                <Link href="/profile">
                  <CgProfile size={20} />
                </Link>
              </li>
            </ul>
          </div>
          {/* Mobile Menu Button */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </div>
        </div>
        {/* Mobile Menu */}
        {showMenu && (
          <div className="md:hidden bg-[#1B263B] text-white text-center py-4 absolute top-16 left-0 right-0 z-50">
            <ul className="flex flex-col items-center text-base font-medium">
              <li className="py-2">
                <Link href="/about">About</Link>
              </li>
              <li className="py-2">
                <Link href="/academic">Academics</Link>
              </li>
              <li className="py-2">
                <Link href="/academics">Admission</Link>
              </li>
              <li className="py-2">
                <Link href="/calendar">Calendar</Link>
              </li>
              <li className="py-2">
                <Link href="/newsandevents">Events</Link>
              </li>
              <li className="py-2">
                <Link href="/newsandevents">Media</Link>
              </li>
              <li className="py-2">
                <Link href="/contact-us">Contact</Link>
              </li>
              <li className="py-2">
                <Link href="/profile">Profile</Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Scrolling Announcements */}
      <div className="scrolling-announcement bg-gray-50 text-black py-2 text-sm md:text-base">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            {announcements.map((announcement, index) => (
              <span key={index} className="mr-10">
                {announcement.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

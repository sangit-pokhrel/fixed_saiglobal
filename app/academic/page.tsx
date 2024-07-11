import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import AboutLanding from "./AboutLanding";
import Statistics from "@/components/Statistics"
import GoogleMapSection from "@/components/GoogleMapSection"
import Newsletter from "@/components/Newsletter"


const Home = () => {
  return (
    <div>
      <Navbar />
      <AboutLanding />
      <Statistics />
      <GoogleMapSection />
      <Newsletter />


      
      <Footer />
    </div>
  );
};

export default Home;

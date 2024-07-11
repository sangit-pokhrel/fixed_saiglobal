import React from 'react'
import Navbar from '@/components/Navbar';
import LandingPage from "../academics/LandingPage";
import Facilities from "../academics/Facilities";
import FeeTable from "../academics/FeeTable"
import SneakPeek from '../academics/SneakPeak';
import StatisticsSection from '@/components/Statistics';
import GoogleMapSection from "@/components/GoogleMapSection"
import Footer from "@/components/Footer"
import GradeTenLanding from "./gradeTenLanding"


const AcademicsPage = () => {
  return (
    <>
    <Navbar />
    <GradeTenLanding />
    <Facilities />
    <FeeTable />
    <SneakPeek />
    
    <StatisticsSection />
    <GoogleMapSection />
    <Footer />
    
    </>
    


  )
}

export default AcademicsPage
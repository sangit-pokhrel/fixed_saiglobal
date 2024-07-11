import React from 'react'
import Navbar from '@/components/Navbar';
import LandingPage from "../academics/LandingPage";
import Facilities from "../academics/Facilities";
import FeeTable from "../academics/FeeTable"
import SneakPeek from '../academics/SneakPeak';
import StatisticsSection from '@/components/Statistics';
import GoogleMapSection from "@/components/GoogleMapSection"
import Footer from "@/components/Footer"
import OurAffiliationsPlusTwo from "./OurAffiliationsPlusTwo"
import PlusTwoLanding from './PlusTwoLanding';



const AcademicsPage = () => {
  return (
    <>
    <Navbar />
    <PlusTwoLanding />
    <Facilities />
    <FeeTable />
    <OurAffiliationsPlusTwo />
    <SneakPeek />

    <StatisticsSection />
    <GoogleMapSection />
    <Footer />
    
    </>
    


  )
}

export default AcademicsPage
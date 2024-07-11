import React from 'react'
import Navbar from '../../components/Navbar';
import LandingPage from "../academics/LandingPage";
import Objectives from "../academics/Objectives";
import StatisticsSection from '@/components/Statistics';
import GoogleMapSection from "@/components/GoogleMapSection"
import Footer from "@/components/Footer"
import OurAffiliationsBba from "./OurAffiliationsBba"
import CourseStructureBba from "./CourseStructureBba"
import Gallery from "../academics/Gallery"
import BbaLanding from "./BbaLanding"




const AcademicsPage = () => {
  return (
    <>
    <Navbar />
    <BbaLanding />
    <Objectives />
    <OurAffiliationsBba />
    <CourseStructureBba />
    <Gallery />
    <StatisticsSection />
    <GoogleMapSection />
    <Footer />
    
    </>
    


  )
}

export default AcademicsPage
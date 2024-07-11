import React from 'react'
import Navbar from '../../components/Navbar';

import StatisticsSection from '@/components/Statistics';
import GoogleMapSection from "@/components/GoogleMapSection"
import Footer from "@/components/Footer"
import NewsAndEvents from './NewsAndEvents';
import RecentEvents from './RecentEvents';
import EventsGallery from "./MontessoriGallery"
import GradeTenGallery from "./GradeTenGallery"
import GradePlusTwoGallery from "./GradePlusTwoGallery"
import GradeBbaGallery from "./GradeBbaGallery"




const AcademicsPage = () => {
  return (
    <>
    <Navbar />
    <NewsAndEvents /> 
    <RecentEvents />
    <EventsGallery />
    <GradeTenGallery />
    <GradePlusTwoGallery />
    <GradeBbaGallery />
    <StatisticsSection />
    <GoogleMapSection />
    <Footer />
    
    </>
    


  )
}

export default AcademicsPage
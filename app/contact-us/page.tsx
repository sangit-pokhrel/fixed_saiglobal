import React from 'react'
import Navbar from '@/components/Navbar';

import GoogleMapSection from "@/components/GoogleMapSection"
import Footer from "@/components/Footer"



import ContactPage from "./ContactPage"
import NewsLetter from "@/components/Newsletter"



const AcademicsPage = () => {
  return (
    <>
    <Navbar />
   <ContactPage />
   <GoogleMapSection />
   <NewsLetter />
    <Footer />
    
    </>
    


  )
}

export default AcademicsPage
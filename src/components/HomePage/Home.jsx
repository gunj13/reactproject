import React from 'react';
import HomeSlider from './HomeSlider';
import FeatureSection from './FeatureSection';
import ServicesSlider from './ServicesSlider';
import AboutFounder from './AboutFounder';
import ContactSection from './ContactSection';
import Footer from '../Footer'

function Home(){ 
    return (
        <>
            <HomeSlider/>
            <FeatureSection/>
            <ServicesSlider/>
            <AboutFounder/>
            <ContactSection/>
            <Footer/>        
        </>
    );
}
export default Home;
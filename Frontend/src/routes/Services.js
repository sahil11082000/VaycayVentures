import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Destinations from '../components/Destinations';
function Services() {
  return (
    <>
        <Navbar />
        <Hero 
            cName = 'hero-mid'
            HeroImg='https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80'
            title='Services'
            text = 'Plan your Experience with the Best in class Services'
            btnClass='button-mid'
            btnText = 'Explore Now'
            url='/explore'
        />
        <Destinations />
        <Footer />
    </>
  );
}

export default Services;
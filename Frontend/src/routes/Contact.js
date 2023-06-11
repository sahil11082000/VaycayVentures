import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Form from '../components/Form';
function Contact() {
  return (
    <>
        <Navbar />
        <Hero 
            cName = 'hero-mid'
            HeroImg='https://images.unsplash.com/photo-1679312995136-4bfc25c1936f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
            title='Contact Us'
            text = ''
            btnClass=''
            btnText = ''
            url='/'
        />
        <Form />
        <Footer />
    </>
  );
}

export default Contact;
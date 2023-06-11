import React from 'react';
import Navbar from '../components/Navbar';
import SignUp from '../components/SignUp';
import Hero from '../components/Hero';
import signUpImage from '../assets/signup.jpg'
import Footer from '../components/Footer';
function Signup() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        HeroImg={signUpImage}
        title="Sign to begin your Journey with Us"
        text="Explore the World Full of Experiences"
      />
      <SignUp />
      <Footer />
    </>
  );
}

export default Signup;
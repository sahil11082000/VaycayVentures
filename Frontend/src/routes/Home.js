import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import homeHero from "../assets/1.jpg";
import Testimonials from "../components/Testimonials";
import Form from "../components/Form";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        HeroImg={homeHero}
        title="Your Journey your Story"
        text="Explore the World Full of Experiences"
        btnClass="button"
        btnText="Explore Now"
        url="/explore"
      />
      <Destinations />
      <Trip />
      <Testimonials />
      <Form />
      <Footer />
    </>
  );
}

export default Home;

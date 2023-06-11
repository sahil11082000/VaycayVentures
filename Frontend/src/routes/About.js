import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import aboutImg from '../assets/about.jpg'
import Footer from '../components/Footer';
import Team from '../components/Team';
import avatar1 from '../assets/avatar1.jpeg';
import avatar2 from '../assets/avatar2.jpeg';
import avatar3 from '../assets/avatar3.png';
import avatar4 from '../assets/avatar4.jpg';
function About() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        HeroImg={aboutImg}
        title="About Us"
        text=""
        btnClass=""
        btnText=""
        url="/"
      />
      <div className="about-container">
        <h1>Our Goal</h1>
        <p>
          Vaycay Ventures is a Platform which uses travel related data from
          world bank organization in tourism sector, and with the help machine
          learning model it will try to Predict the expenditure(or budget) of
          the passenger for related tour of a particular place. Vaycay Ventures
          is design to analyze the data present at world bank and help user to
          create an estimated budget for their travel in real time. It help in
          reducing the time to calculate the travel budget manually.
        </p>
        <h1>Our Team</h1>
        <div className="teammembers">
          <Team
            img={avatar1}
            name="Sahil Tomar"
            info="B.Tech (CSE)"
            role='Developer & Team Lead'
            email="sahiltomar199@gmail.com"
          />
          <Team
            img={avatar2}
            name="Priyal Bansal"
            info="B.Tech (CSE)"
            role="Data Team"
            email="priyalbansal1603@gmail.com"
          />
          <Team
            img={avatar3}
            name="Ritik Chandel"
            info="B.Tech (CSE)"
            role="Machine Learning Team"
            email="chandelritik123oklkd@gmail.com"
          />
          <Team
            img={avatar4}
            name="Vaishnavi Singh"
            info="B.Tech (CSE)"
            role="Machine Learning Team"
            email="vaishnavi.singh1291@gmail.com"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About

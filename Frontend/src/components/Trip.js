import './TripStyles.css';
import React from 'react'
import TripData from './TripData';
import Singapore from '../assets/singapore.jpg'
import Thailand from '../assets/Thailand.jpg';
import Bali from '../assets/bali.jpg';
function Trip() {
  return (<div className='trip'>
    <h1>Most Recent Adventures</h1>
    <p>Experience the Thrill of Wandering with our Map Explore</p>
    <div className='tripcard'>
        <TripData
            img={Singapore}
            heading='Singapore:(Republic of Singapore)'
            text="Singapore offers a myriad of captivating places to visit. Explore the futuristic Gardens by the Bay, featuring stunning Supertrees and immersive garden domes. Discover the iconic Marina Bay Sands with its rooftop infinity pool and panoramic city views. Dive into the vibrant culture of Chinatown and Little India, and experience the historical charm of the Singapore River and its quays. Don't miss the renowned Sentosa Island, home to Universal Studios Singapore and beautiful beaches"
        />
        <TripData
            img={Thailand}
            heading='Thailand: (Kingdom of Thailand)'
            text="Thailand is a treasure trove of enchanting destinations. Visit the bustling capital city of Bangkok, home to magnificent temples, vibrant street markets, and a thriving nightlife scene. Explore the ancient ruins of Ayutthaya and the cultural heritage of Chiang Mai's temples and night bazaars. Relax on the pristine beaches of Phuket and Krabi, or venture to the lush jungles of Chiang Rai and experience the awe-inspiring White Temple. Don't forget to indulge in the exquisite Thai cuisine and immerse yourself in the warm hospitality of the Thai people"
        />
        <TripData
            img={Bali}
            heading='Bali: (Shri Lanka)'
            text='Bali, known as the "Island of the Gods," is a tropical paradise that captivates visitors with its natural beauty and rich culture. Explore the ancient temples such as Tanah Lot and Uluwatu, perched on dramatic cliffs overlooking the ocean. Relax on the stunning beaches of Kuta, Seminyak, and Nusa Dua, or indulge in the lush landscapes of Ubud, known for its terraced rice fields and traditional arts. Immerse yourself in Balinese spirituality, enjoy vibrant festivals, and experience the warm hospitality of the locals. Bali truly offers a magical and unforgettable experience'
        />
    </div>
  </div>);
}

export default Trip

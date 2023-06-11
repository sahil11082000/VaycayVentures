import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";
import Eiffel1 from "../assets/Eiffel1.jpg";
import Eiffel2 from "../assets/Eiffel2.jpg";
import Taj1 from "../assets/Taj1.jpg";
import Taj2 from "../assets/Taj2.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destinations = () => {
  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      cost: "38,800",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);
  return (
    <>
      <div className="attractions">
        <h1>Popular Attractions around World</h1>
        <p>Traveling—it leaves you speechless, then turns you into a storyteller</p>
        <DestinationData
            cName = 'description'
            heading = "Eiffel Tower (Paris, France)"
            text="The Eiffel Tower is located in Paris, the capital city of France. France, officially known as the French Republic, is a country in Western Europe. It is renowned for its rich history, culture, art, cuisine, and fashion.The Eiffel Tower, or La Tour Eiffel in French, is one of the most famous landmarks in the world. It was designed by Gustave Eiffel and completed in 1889. The tower stands at a height of 330 meters (1,083 feet) and was the tallest man-made structure in the world until 1930. The Eiffel Tower is made of iron and consists of three levels that are accessible to the public. Visitors can ascend the tower using elevators or stairs and enjoy panoramic views of Paris from observation decks on each level. The tower also houses restaurants, a souvenir shop, and various exhibitions. It has become an enduring symbol of Paris and attracts millions of tourists annually. The Eiffel Tower is not only an architectural marvel but also a cultural and historical icon representing the beauty and charm of the city of Paris and the country of France."
            img1={Eiffel1}
            img2={Eiffel2}
        />
        <DestinationData 
            cName = 'description-reverse'
            heading = "Taj Mahal (Agra, India)"
            text="The Taj Mahal was commissioned by Mughal Emperor Shah Jahan in the 17th century as a mausoleum for his beloved wife, Mumtaz Mahal. It is considered one of the most iconic and romantic gestures in history, representing the depth of their love and devotion. The Taj Mahal is a masterpiece of Mughal architecture, blending influences from Persian, Islamic, and Indian architectural styles. The entire structure is made of white marble, exquisitely adorned with intricate carvings, calligraphy, and delicate inlay work using semi-precious stones. The main features of the Taj Mahal include its grand dome, four minarets at the corners, and a vast courtyard. The marble facade is embellished with detailed geometric patterns, floral motifs, and verses from the Quran. Inside the mausoleum, lies the cenotaphs of Shah Jahan and Mumtaz Mahal. The Taj Mahal is surrounded by well-manicured gardens on all sides. The gardens are designed in a symmetrical pattern, with pathways leading to the mausoleum. Reflecting pools add to the architectural beauty, creating a stunning visual effect, especially during sunrise and sunset."
            img1={Taj1}
            img2={Taj2}
        />
      </div>
      <Section id="recommend">
        <div className="title">
          <h1>Recommended Destinations</h1>
        </div>
        <div className="packages">
          <ul>
            {packages.map((pkg, index) => {
              return (
                <li
                  className={active === index + 1 ? "active" : ""}
                  onClick={() => setActive(index + 1)}
                >
                  {pkg}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="destinations">
          {data.map((destination) => {
            return (
              <div className="destination">
                <img src={destination.image} alt="" />
                <h3>{destination.title}</h3>
                <p>{destination.subTitle}</p>
                <div className="info">
                  <div className="services">
                    <img src={info1} alt="" />
                    <img src={info2} alt="" />
                    <img src={info3} alt="" />
                  </div>
                  <h4>{destination.cost}</h4>
                </div>
                <div className="distance">
                  <span>1000 Kms</span>
                  <span>{destination.duration}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}

export default Destinations;

const Section = styled.section`
  padding: 2rem 0;
  .title {
    font-size: 2rem;
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: aliceblue;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
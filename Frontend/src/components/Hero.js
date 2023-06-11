import React from "react";
import { Link } from "react-router-dom";
import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.HeroImg} alt="HeroImg" />

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <Link to={props.url} className={props.btnClass}>
            {props.btnText}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;

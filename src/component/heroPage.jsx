import { useState } from "react";
import "./hero.css";
import  ranbir from "../assets/ranbir.jpeg"
function Hero({ abc }) {


  return (
    <>
      <div className="card cards" style={{ width: "18rem" }}>
        <img src={ranbir} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{abc.cardTitle}</h5>
          <p>{abc.cardContent}</p>
          <a href="#" className="btn btn-primary">
            {abc.price}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;

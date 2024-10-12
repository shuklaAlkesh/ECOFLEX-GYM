import React from 'react';
import imageUrl from "./image/pricing.jpg"; // Make sure this path is correct
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
const pricing = [
  {
    imgUrl: imageUrl,
    title: "QUARTERLY",
    price: 3000,
    length: 3
  },
  {
    imgUrl: imageUrl, 
    title: "HALF_YEARLY",
    price: 5000,
    length: 6
  },
  {
    imgUrl: imageUrl, 
    title: "YEARLY",
    price: 8000,
    length: 12
  }
];

const Pricing = () => {
  return (
    <>
      <section className="pricing">
        <h1>ECOFLEX GYM PLANS</h1>
        <div className="wrapper">
          {pricing.map((element) => {
            return (
              <div className="card" key={element.title}>
                <img src={element.imgUrl} alt={element.title} />
                <div className="title">
                  <h1>{element.title}</h1>
                  <h1>PACKAGE</h1>
                  <h3>Rs {element.price}</h3>
                  <p>For {element.length} Months</p>
                </div>
                <div className="description">
                  <p>
                    <Check /> Equipment
                  </p>
                  <p>
                    <Check /> All Day Free Training
                  </p>
                  <p>
                    <Check /> Free Restroom
                  </p>
                  <p>
                    <Check /> 24/7 Skilled Support
                  </p>
                  <p>
                    <Check /> 20 Days Freezing Option
                  </p>
                  <Link to={"/"}>Join Now</Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Pricing;

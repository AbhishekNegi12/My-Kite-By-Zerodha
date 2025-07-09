import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    // In bootstrap we have a GoContainer which comprises of row and column and column in a row is 12
    // so column number or sum should not exceed 12
    <div className="container p-5 mb-3">
      <div className="row text-center">
        {/* <img className='mb-5 ' src="media/images/homeHero.png" style={{width:'80%'}} alt="Hero" /> */}
        <img
          className="mb-4 d-block mx-auto"
          src="media/images/homeHero.png"
          style={{ width: "80%" }}
          alt="Hero Image"
        />

        <h1 className="mt-4">Invest in everything</h1>
        <p className="fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link
          to="/signup"
          className="p-2 rounded btn btn-primary fs-5 mb-3"
          style={{ width: "15%", margin: "0 auto", display: "inline-block" }}
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;

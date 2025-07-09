import React from "react";

import { Link } from "react-router-dom";

const platforms = [
  {
    img: "media/images/zerodhaFundhouse.png",
    desc: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
  },
  {
    img: "media/images/sensibullLogo.svg",
    desc: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
  },
  {
    img: "media/images/tijori.svg",
    desc: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
  },
  {
    img: "media/images/streak-logo.png",
    desc: "Systematic trading platform that allows you to create and backtest strategies without coding.",
  },
  {
    img: "media/images/smallcaseLogo.png",
    desc: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
  },
  {
    img: "media/images/ditto-logo.png",
    desc: "Personalized advice on life and health insurance. No spam and no mis-selling. Sign up for free.",
  },
];

const Universe = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center mb-4">
        <h1>The Zerodha Universe</h1>
        <p className="text-muted fs-5 mb-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row justify-content-center">
        {platforms.slice(0, 3).map((p, i) => (
          <div
            className="col-md-4 mb-4 d-flex flex-column align-items-center"
            key={i}
          >
            <img
              src={p.img}
              alt="platform-logo"
              style={{
                width: "80px",
                height: "auto",
                marginBottom: "1rem",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              }}
            />
            <p
              className="text-muted"
              style={{
                fontSize: "0.98rem",
                marginTop: "0.5rem",
                minHeight: "80px",
              }}
            >
              {p.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="row justify-content-center">
        {platforms.slice(3, 6).map((p, i) => (
          <div
            className="col-md-4 mb-4 d-flex flex-column align-items-center"
            key={i + 3}
          >
            <img
              src={p.img}
              alt="platform-logo"
              style={{
                width: "80px",
                height: "auto",
                marginBottom: "1rem",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              }}
            />
            <p
              className="text-muted"
              style={{
                fontSize: "0.98rem",
                marginTop: "0.5rem",
                minHeight: "80px",
              }}
            >
              {p.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="row justify-content-center">
        {/* <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "220px", margin: "0 auto" }}
        >
          Signup for free
        </button> */}
        <Link
          to="/signup"
          className="p-2 rounded btn btn-primary fs-5 mb-3"
          style={{ width: "15%", margin: "0 auto", display: "inline-block" }}
        >
          Signup for free
        </Link>
      </div>
    </div>
  );
};

export default Universe;

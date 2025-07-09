import React from "react";

const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h4 className="mb-0">Support Portal</h4>
        <a href="" style={{ textDecoration: "underline", fontWeight: 500 }}>
          Track Tickets
        </a>
      </div>
      <div className="row px-4 pt-3 pb-5">
        <div className="col-6 p-3">
          <h5 className="fs-5 mb-4" >
            Search for an answer or browse help topics to create a ticket
          </h5>
          <input
            placeholder="Eg. how do I activate F&O"
            className="mb-4"
            style={{
              fontSize: 14,
              borderRadius: 5,
              padding: "14px 25px",
              width: "90%",
              border: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            }}
          />
          <div className="d-flex flex-wrap gap-4 mb-2">
            <a
              href=""
              style={{
                borderBottom: "1px solid ",
                textDecoration: "none",
                fontWeight: 400,
              }}
            >
              Track account opening
            </a>
            <a
              href=""
              className="ms-3"
              style={{
                borderBottom: "1px solid ",
                textDecoration: "none",
                fontWeight: 400,
              }}
            >
              Track segment activation
            </a>
            <a
              href=""
              className="ms-3"
              style={{
                borderBottom: "1px solid ",
                textDecoration: "none",
                fontWeight: 400,
              }}
            >
              Intraday margins
            </a>
            <a
              href=""
              className="ms-3"
              style={{
                borderBottom: "1px solid ",
                textDecoration: "none",
                fontWeight: 400,
              }}
            >
              Kite user manual
            </a>
          </div>
        </div>
        <div className="col-6 p-3 mt-3">
          <h1 className="fs-3 mb-4" style={{ fontWeight: 400 }}>
            Featured
          </h1>
          <ol className="ps-3">
            <li className="mb-2">
              <a
                href=""
                style={{
                  textDecoration: "underline",
                  color: "#fff",
                  fontWeight: 400,
                }}
              >
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  textDecoration: "underline",
                  color: "#fff",
                  fontWeight: 400,
                }}
              >
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;

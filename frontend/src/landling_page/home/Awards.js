import React from "react";

const Awards = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* <div className="col-lg-6 col-sm-12"></div> */}
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="largestBroker" style={{width:'80%'}} />
        </div>
        <div className="col-6 p-5 mt-3">
          <h2>Largest Stock broker in India</h2>
          <p className="mb-5">
            Millions of Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          <img src="media/images/pressLogos.png" style={{width:"90%"}} alt="largestBroker" />

        </div>
      </div>
    </div>
  );
};

export default Awards;

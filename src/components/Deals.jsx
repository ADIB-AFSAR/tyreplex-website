import React from "react";
import { deals } from "../data/dealItems"; // Import the deals array from dealItems

function Deals() {
  return (
    <>
      {/* Container for the deals section */}
      <div className="deal-container"> 
        <p className="deal-heading fw-semibold mt-1 mx-2"> Deals in</p> 
        {/* Iterate over the deals array to display each deal */}
        {deals && deals.map((deal, index) => (
          <div key={index}>
            {/* Card for each deal, with dynamic class for logo based on index */}
            <div className={`card deal-body logo-card logo-${index}`}>
              <div className="card-body pb-0" key={index}>
                {/* Link to the deal source */}
                <a className="text-decoration-none" href={deal.source}>
                  <p className="card-title deal-name text-secondary sm">{deal.name}</p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Deals; // Export the Deals component

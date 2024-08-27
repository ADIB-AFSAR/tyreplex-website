import React, { useState, useMemo } from "react";
import { tyres } from "../data/tyreItems";

function Tyres() {
  const [visibleCards, setVisibleCards] = useState(8);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortOrder, setSortOrder] = useState("most-popular");
  const [showAdvancedMessage, setShowAdvancedMessage] = useState(false);

  const handleAdvancedClick = () => {
    setShowAdvancedMessage(true);
  };

  const handleCloseMessage = () => {
    setShowAdvancedMessage(false);
  };

  const handleViewMore = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 4);
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
    setVisibleCards(8); 
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const brands = useMemo(() => ["All", ...new Set(tyres.map(tyre => tyre.mName))], []);

  const filteredTyres = useMemo(() => 
    selectedBrand === "All" ? tyres : tyres.filter(tyre => tyre.mName === selectedBrand), 
    [selectedBrand]
  );

  const sortedTyres = useMemo(() => {
    return [...filteredTyres].sort((a, b) => {
      if (sortOrder === "high-to-low") {
        return parseFloat(b.productPrice) - parseFloat(a.productPrice);
      } else if (sortOrder === "low-to-high") {
        return parseFloat(a.productPrice) - parseFloat(b.productPrice);
      } else {
        return b.rating - a.rating;  
      }
    });
  }, [filteredTyres, sortOrder]);

  return (
    <div className="container mt-2">
      <div className="row mb-4">
        <p className="fw-bold">Tyres sold by this Dealer</p>
        <div className="d-flex flex-row-reverse">
          <button className="btn btn-link mx-1" onClick={handleAdvancedClick}>
            Advanced
          </button>
          <div className="col-lg-3 col mx-1">       
            <select id="sortOrder" className="form-select" value={sortOrder} onChange={handleSortChange}>
              <option value="most-popular">Most Popular</option>
              <option value="high-to-low">Price: High to Low</option>
              <option value="low-to-high">Price: Low to High</option>
            </select>
          </div>
          <div className="col-lg-3 col  mx-1">  
           <select id="brandFilter" className="form-select" value={selectedBrand} onChange={handleBrandChange}>
              {brands.map((brand, index) => (
                <option key={index} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
          <div className="mx-2 my-1 fs-4">
             <i className="bi bi-funnel-fill"></i>
          </div>
        </div>
      </div>

      {/* Advanced Message */}
      {showAdvancedMessage && (
        <div className="alert alert-info alert-dismissible fade show" role="alert">
          Requires structured API data to do advanced search.
          <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseMessage}></button>
        </div>
      )}
      
      <div className="row">
        {sortedTyres.slice(0, visibleCards).map((tyre, index) => (
          <div key={index} className="col-12 col-md-3 col-sm-6 mb-4">
            <div className="card card-shadow tyre w-100 position-relative">
              <div className="position-absolute top-0 end-0 ms-2">
                <span className="text fw-semibold p-1 sm bg-warning text-dark">
                  <i className="text-success bi bi-shield-fill-check"></i> 5 Year Warranty
                </span>
              </div>
              <div className="d-flex overflow-hidden card-container">
                <div className="card-img-container">
                  <img className="card-img" src={tyre.img} alt={tyre.mName} />
                </div>
                <div className="card-body p-2 card-body-custom">
                  <h5 className="card-title fs-6 fw-bold">{tyre.mName}</h5>
                  <p className="card-title text-muted">{tyre.vName}</p>
                  <div className="d-flex align-items-center mb-2">
                    <span className="badge bg-success me-2">
                      <i className="bi bi-star-fill text-warning"></i> {tyre.rating}
                    </span>
                    <span className="text-muted sm">({tyre.reviews} Reviews)</span>
                  </div>
                  <h4 className="card-text text-success d-flex">
                    ₹{tyre.productPrice}
                    <p className="card-text text-danger sm text-decoration-line-through mx-1 my-auto">
                      ₹{(parseFloat(tyre.productPrice) * 1.5).toFixed(2)}
                    </p>
                  </h4>
                  <p className="sm text-success fw-semibold my-0 mb-1">Offer available</p>
                  <p className="card-text sm">{tyre.productFeature}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCards < sortedTyres.length && (
        <div className="text-center mt-4">
          <button className="btn btn-outline-secondary" onClick={handleViewMore}>
            View More
          </button>
        </div>
      )}
      <div>
        <p className="text-secondary my-4" style={{fontSize:'.8rem'}}>Home / Tyre Dealers / Tyre Dealers Ghaziabad /SHREE HEMKUNT TYRES AND SERVICES</p>
      </div>
    </div>
  );
}

export default Tyres;

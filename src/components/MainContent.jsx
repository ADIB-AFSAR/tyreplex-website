import React, { useState } from 'react';
import Carousels from './Carousel';
import RateModal from './RateModal';

function MainContent() {
    const [showRateModal, setShowRateModal] = useState(false);

    const handleRateClick = () => {
        setShowRateModal(true);
    };

    const handleCloseRateModal = () => {
        setShowRateModal(false);
    };

    return (
        <>
            <div className={`mt-3 container ${showRateModal ? 'blur-background' : ''}`}>
                <div className="row">
                    {/* Dealer Information Section */}
                    <div className="col-sm-5 col-12 dealer-content dealer-info-bg">
                        
                        {/* Dealer Name and Verification Status */}
                        <div className="d-flex">
                            <h4 className="col heading fw-semibold fs-5">SHREE HEMKUNT TYRES AND SERVICES</h4>
                            <p className="text text-success">
                                <i className="bi bi-shield-fill-check mx-1"></i>verified
                            </p>
                        </div>
                        
                        {/* Rating Section */}
                        <div className="d-flex align-items-center">
                            <p className="m-0 text-warning sm mx-2">
                                <span 
                                    style={{ padding: '0px 4px' }} 
                                    className="text-white sm bg-success mx-2 rounded"
                                >
                                    4.9
                                </span>
                                <i className="bi bi-star-fill mx-1"></i>
                                <i className="bi bi-star-fill mx-1"></i>
                                <i className="bi bi-star-fill mx-1"></i>
                                <i className="bi bi-star-fill mx-1"></i>
                                <i className="bi bi-star-half mx-1"></i>
                            </p>
                            <span className="sm text-decoration-underline">2278 Reviews</span>
                            <button 
                                style={{ padding: '0px 4px' }} 
                                type="button" 
                                className="btn btn-sm btn-outline-secondary mx-2"
                                onClick={handleRateClick}
                            >
                                Rate
                            </button>
                        </div>
                        
                        {/* Address and Hours Section */}
                        <div>
                            <div className="d-flex col">
                                <i className="bi bi-geo-alt fs-6 mx-1 col-1"></i>
                                <p className="sm col-11">
                                    PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
                                </p>
                            </div>
                            <div className="d-flex">
                                <i className="bi bi-clock fs-6 mx-1 col-1"></i>
                                <p className="col-11 fw-light">
                                    Open - Monday to Sunday - 10:00 AM to 8:00 PM
                                </p>
                            </div>
                            <button href="https://tyreplex.com/r/df64b" className="btn btn-outline-danger my-2 mx-4">Get Directions</button>
                        </div>
                    </div>
                    
                    {/* Carousel Component */}
                    <Carousels />
                </div>
            </div>

            {/* Rate Modal */}
            <RateModal show={showRateModal} handleClose={handleCloseRateModal} />
        </>
    );
}

export default MainContent;

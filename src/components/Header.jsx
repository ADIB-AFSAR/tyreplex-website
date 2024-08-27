import React, { useEffect, useState } from 'react';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Adjust the scroll threshold as needed
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg p-0 ms-auto bg-white ${isScrolled ? 'transparent' : ''} col-12`}>
            <div className="container-fluid">
                
                {/* Tyre icon section */}
                <div className="tyre-container col-2">
                    <img 
                        src={`${process.env.PUBLIC_URL}/assets/—Pngtree—black tire_6719712.png`} 
                        alt="Rolling Tyre" 
                        className="rolling-tyre"
                    />
                </div>
                
                {/* Logo section */}
                <a className="navbar-brand col-2 text-center" href="/">
                    <img src='https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60' alt="TyrePlex Logo"/>
                </a>
                
                {/* Navbar toggler button for smaller screens */}
                <button 
                    className="navbar-toggler ms-auto" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                {/* Collapsible section with navigation links */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
                        
                        {/* Dropdown for Car Tyres */}
                        <li className="nav-item dropdown">
                            <a 
                                className="nav-link dropdown-toggle" 
                                href="/" 
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                Car tyres
                            </a>
                            <ul className="dropdown-menu mt-1">
                                <p className='text mx-2 sm'>Popular car tyre brand</p>
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/car-tyres/mrf">MRF Tyres</a></li>
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/car-tyres/ceat">CEAT Tyres</a></li>
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/car-tyres/goodyear">Goodyear Tyres</a></li>
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/car-tyres/apollo">Apollo Tyres</a></li>
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/car-tyres/bridgestone">Bridgestone Tyres</a></li>
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/car-tyres/jk">JK Tyres</a></li>
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/car-tyres/michelin">Michelin Tyres</a></li>
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/car-tyres">All Car Tyres</a></li>
                            </ul>
                        </li>
                        
                        {/* Dropdown for Bike Tyres */}
                        <li className="nav-item dropdown">
                            <a 
                                className="nav-link dropdown-toggle" 
                                href="/" 
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                Bike tyres
                            </a>
                            <ul className="dropdown-menu mt-1">
                                <p className='text mx-2 sm'>Popular bike tyre brand</p>
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/bike-tyres/mrf">MRF Tyres</a></li>
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/bike-tyres/ceat">CEAT Tyres</a></li>
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/bike-tyres/goodyear">Goodyear Tyres</a></li>
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/bike-tyres/apollo">Apollo Tyres</a></li>
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/bike-tyres/bridgestone">Bridgestone Tyres</a></li>
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/bike-tyres/jk">JK Tyres</a></li>
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/bike-tyres/michelin">Michelin Tyres</a></li>
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/bike-tyres">All Bike Tyres</a></li>
                            </ul>
                        </li>
                        
                        {/* Dropdown for Tyre Pressure */}
                        <li className="nav-item dropdown">
                            <a 
                                className="nav-link dropdown-toggle" 
                                href="https://www.tyreplex.com/tyre-pressure" 
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                Tyre Pressure
                            </a>
                        </li>
                        
                        {/* Dropdown for Commercial Tyres */}
                        <li className="nav-item dropdown">
                            <a 
                                className="nav-link dropdown-toggle" 
                                href="/" 
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                Commercial Tyres
                            </a>
                            <ul className="dropdown-menu mt-1">
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/commercial-tyres">All Commercial Tyres</a></li>
                            </ul>
                        </li>
                        
                        {/* Dropdown for Accessories */}
                        <li className="nav-item dropdown">
                            <a 
                                className="nav-link dropdown-toggle" 
                                href="/" 
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                Accessories
                            </a>
                            <ul className="dropdown-menu mt-1">
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/accessories">Accessories</a></li>
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/batteries">Batteries</a></li>
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/alloy">Alloy wheels</a></li>
                            </ul>
                        </li>
                        
                        {/* Dropdown for More options */}
                        <li className="nav-item dropdown">
                            <a 
                                className="nav-link dropdown-toggle" 
                                href="/" 
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                More
                            </a>
                            <ul className="dropdown-menu mt-1">
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/offers-terms-conditions">CashBack Offer</a></li>
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/tyre-dealers-in-india">Find Tyre Dealers</a></li>
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/compare-tyres">Compare Tyres</a></li>
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/dealer-details">Are you a Tyre Dealer</a></li>
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/wheel-balancing">Wheel balancing</a></li>
                                <li><a className="dropdown-item" href="https://www.tyreplex.com/wheel-alignment">Wheel Alignment</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                
                {/* Login link */}
                <a className="nav-link text-dark mx-3" href="/">
                    <i className="bi bi-person fs-5"></i>Login
                </a>
            </div>
        </nav>
    );
}

export default Navbar;

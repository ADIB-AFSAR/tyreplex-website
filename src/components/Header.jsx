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
                                <li><a className="dropdown-item" href="/">MRF Tyres</a></li>
                                <li><a className="dropdown-item" href="/">CEAT Tyres</a></li>
                                <li><a className="dropdown-item" href="/">Goodyear Tyres</a></li>
                                <li><a className="dropdown-item" href="/">Apollo Tyres</a></li>
                                <li><a className="dropdown-item" href="/">Bridgestone Tyres</a></li>
                                <li><a className="dropdown-item" href="/">JK Tyres</a></li>
                                <li><a className="dropdown-item" href="/">Michelin Tyres</a></li>
                                <li><a className="dropdown-item" href="/">All Car Tyres</a></li>
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
                                <li><a className="dropdown-item" href="/">MRF Tyres</a></li>
                                <li><a className="dropdown-item" href="/">CEAT Tyres</a></li>
                                <li><a className="dropdown-item" href="/">Goodyear Tyres</a></li>
                                <li><a className="dropdown-item" href="/">Apollo Tyres</a></li>
                                <li><a className="dropdown-item" href="/">Bridgestone Tyres</a></li>
                                <li><a className="dropdown-item" href="/">JK Tyres</a></li>
                                <li><a className="dropdown-item" href="/">Michelin Tyres</a></li>
                                <li><a className="dropdown-item" href="/">All Car Tyres</a></li>
                            </ul>
                        </li>
                        
                        {/* Dropdown for Tyre Pressure */}
                        <li className="nav-item dropdown">
                            <a 
                                className="nav-link dropdown-toggle" 
                                href="/" 
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
                                <li><a className="dropdown-item" href="/">All Commercial Tyres</a></li>
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
                                <li><a className="dropdown-item" href="/">Accessories</a></li>
                                <li><a className="dropdown-item" href="/">Batteries</a></li>
                                <li><a className="dropdown-item" href="/">Alloy wheels</a></li>
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
                                <li><a className="dropdown-item" href="/">CashBack Offer</a></li>
                                <li><a className="dropdown-item" href="/">Find Tyre Dealers</a></li>
                                <li><a className="dropdown-item" href="/">Compare Tyres</a></li>
                                <li><a className="dropdown-item" href="/">Are you a Tyre Dealer</a></li>
                                <li><a className="dropdown-item" href="/">Wheel balancing</a></li>
                                <li><a className="dropdown-item" href="/">Wheel Alignment</a></li>
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

import React from 'react';

function Service() {
    const services = [
        {
            name: "Wheel Balancing",
            img: "https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100",
            source : 'https://www.tyreplex.com/order/checkout'
        },
        {
            name: "Wheel Alignment",
            img: "https://cdn.tyreplex.net/images/wheel-alignment.png?tr=w-100" ,
            source : 'https://www.tyreplex.com/order/checkout'
        }
    ];

    return (
        <div className="container mt-4">
            <div className="card p-3 mb-4 row ser-img">
                <p className="fw-semibold">Services offered by this dealer</p>
                <div className="row">
                    {services.map((service, index) => (
                        <div className="col-lg-3 col-md-4 mb-3" key={index}>
                            <div className="card card-shadow h-100 d-flex flex-column justify-content-between">
                                <div className="card-body text-center">
                                    <img className="card-img-top w-50 mx-auto" src={service.img} alt={service.name} />
                                    <div className="card-title mt-2 fw-semibold">{service.name}</div>
                                    <a className='text-decoration-none text-white' href='https://www.tyreplex.com/order/checkout'><button className="btn btn-danger mt-2 mb-4 col-6 mx-auto">Book</button></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Service;

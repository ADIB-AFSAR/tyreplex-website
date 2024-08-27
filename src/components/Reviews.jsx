import React from 'react';

function Reviews() {
    const reviews = [
        {
            id: 1,
            img: 'https://lh3.googleusercontent.com/a/AATXAJwZ5yHTyhlbUnanuJwLGdscP95OtAMhFGiAD8Bf=s128-c0x00000000-cc-rp-mo',
            name: "Md Nasir",
            review: "Excellent service from start to finish. 100% satisfaction with the job, professionalism, and overall service."
        },
        {
            id: 2,
            img: 'https://lh3.googleusercontent.com/a/AATXAJxi1FTLTnIbF-wcCFLUqffCFFV07qiTPPBbLVaO=s128-c0x00000000-cc-rp-mo',
            name: "Rohit Bhati",
            review: "Went for Tyre change. Ultimate service by shoppe boys. Highly recommend."
        },
        {
            id: 3,
            img: 'https://lh3.googleusercontent.com/a/AATXAJwahszZQxSMoUOJ3FOQwAgtMOeWI7bFaQnSRl1a=s128-c0x00000000-cc-rp-mo',
            name: "Pradeep Kumar",
            review: "Best tyre shop in Indirapuram. Price also reasonable. Overall good experience."
        }
    ];

    return (
        <div className="container mt-4 mb-4">
            <h3 className="fs-6">2278 Google Reviews</h3>
            <div className="row">
                {reviews.map((review) => (
                    <div key={review.id} className="col-md-4">
                        <div className="card  card-shadow h-100">
                            <div className="card-body">
                                <h6 className="card-title d-flex align-items-center">
                                    <img className="rounded-circle me-2" src={review.img} height="40px" alt={review.name} />
                                    {review.name}
                                </h6>
                                <p className="card-text text-secondary">{review.review}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reviews;

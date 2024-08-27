import React from 'react';

function Footer() {
  return (
    <>
      <div className='container'>
        {/* Question Section */}
        <div className='question p-4 h-100 d-flex justify-content-between col-12'>
          <div className='col-6'>
            <h5>Have a question about Tyres?</h5>
            <p className='text-secondary'>Get an answer in 24 hours from our expert.</p>
            {/* Input field for asking or searching a question */}
            <input 
              className='col-lg-8 col border-1 border-warning rounded-pill p-2' 
              placeholder='Ask or search your question'
            />
          </div>
          {/* Image related to questions */}
          <div className='text-center col-6'>
            <img 
              src='https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png?v=600&tr=q-60' 
              height='100px' 
              alt='Question Illustration'
            />
          </div>    
        </div>

        {/* Horizontal line separating sections */}
        <hr className='p-0 m-0' />

        {/* Info Section */}
        <div className='info p-4 d-flex col-12 justify-content-between pt-3 text-secondary'>
          {/* Logo and social media icons */}
          <div className='logo text-center col-2 d-flex flex-column'>
            <img 
              className='col-8 mt-2' 
              src='https://cdn.tyreplex.net/themes/moonlight/images/TP-logo-mbl.png?tr=w-150,q-77&v=512' 
              alt='TyrePlex Logo'
            />
            <span>
              <a className='text-secondary text-decoration-none' href='https://cdn.tyreplex.net/themes/moonlight/images/insta-icon.png?v=526&tr=w-24,q-40'><i className="mx-1 bi bi-facebook"></i></a>
              <a className='text-secondary text-decoration-none' href='https://cdn.tyreplex.net/themes/moonlight/images/fb-icon.png?v=526&tr=w-24,q-40'><i className="mx-1 bi bi-instagram"></i></a>
            </span>
          </div>

          {/* Links to company information */}
          <div className='col-2 '>
            <p className='info-p'><a className='text-secondary text-decoration-none' href='https://www.tyreplex.com/about-us'  >Who we are?</a></p>
            <p className='info-p'><a className='text-secondary text-decoration-none' href='https://www.tyreplex.com/dealer-details'>Are you a Tyre Dealer?</a></p>
          </div>

          {/* Links to legal information */}
          <div className='col-2'>
            <p className='info-p'><a className='text-secondary text-decoration-none' href='https://www.tyreplex.com/privacy-policy'>Privacy policy</a></p>
            <p className='info-p'><a className='text-secondary text-decoration-none' href='https://www.tyreplex.com/terms-of-use'>Terms of use</a></p>
          </div>

          {/* Contact information */}
          <div className='col-3'>
            <p className='info-p'><a className='text-secondary text-decoration-none' href='https://www.tyreplex.com/contact'>Contact Us</a></p>
            <p className='info-p'><a className='text-secondary text-decoration-none' href='https://www.tyreplex.com/career'>Career</a></p>
            <p className='info-p'><a className='text-secondary text-decoration-none' href='https://www.tyreplex.com/shipping-return-policy'>Shipping & Return Policy</a></p>
          </div>
        </div>

        {/* Horizontal line separating sections */}
        <hr className='m-0' />

        {/* Footer Section */}
        <div className='text-center text-secondary bg-white p-2'>
          <p>©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;

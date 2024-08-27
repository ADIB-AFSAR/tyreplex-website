import React from 'react'

function Payment() {
  return (
    <>
      <div className='container mb-3'>
         <div className='card p-2 row'>
          <h5 className='mt-1'>Payment Mode</h5>
          <div className='d-flex mt-2'>
            <div className='h-100 lh-1'>
               <ul className='p-0'>
                <li>
                    <p><i className="bi bi-check2 fs-5 text-success"></i>Deposite to Account</p>
                </li>
                <li>
                    <p><i className="bi bi-check2 fs-5 text-success"></i>Credit Card/Debit Card</p>
                </li>
                <li>
                    <p><i className="bi bi-check2 fs-5 text-success"></i>Wallets (PayTM/PhonePe/Amazon etc.)</p>
                </li>
               </ul>
            </div>
            <div className='h-100'>
                <ul>
                    <li>
                        <p><i className="bi bi-check2 fs-5 text-success"></i>Net Banking</p>
                    </li>
                    <li>
                        <p><i className="bi bi-check2 fs-5 text-success"></i>UPI</p>
                    </li>
                </ul>
            </div>
         </div>
      </div>
      </div>
    </>
  )
}

export default Payment
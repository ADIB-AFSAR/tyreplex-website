import React from 'react';
import Navbar from './components/Header';
import MainContent from './components/MainContent';
import Reviews from './components/Reviews'; 
import Deals from './components/Deals';
import Service from './components/Service';
import Footer from './components/Footer';
import Tyres from './components/Tyres';
import ScrollButtons from './components/ScrollBtn';
import Payment from './components/Payment';

function App() {
    return (
      <>
         <Navbar/>
        <div className='container w-100'>
        <div className='card mt-2'>
            <MainContent />
            <Reviews />
        </div>
        <div className='card mt-4 mb-4'>
            <Deals/>
        </div>
            <Service/>
             <Tyres/>
             <Payment/>
        </div>
             <ScrollButtons/>
            <Footer/>
        </>
    );
}

export default App;

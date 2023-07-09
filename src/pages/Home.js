import React from 'react';
import MonazImage from '../img/monaz.jpg';
import Footer from '../Components/Footer.js';

const Home = () => {
  return (
    <>
      <div className="responsive">
        <img src={MonazImage} className='w-full h-full object-cover absolute mix-blend-overlay' alt="Monas" />
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-black">WELCOME TO JAKARTA,</h1>
          <p className="text-black text-4xl font-bold">Monumen Nasional</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;

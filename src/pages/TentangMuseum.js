import React from 'react';
import 'tailwindcss/tailwind.css';
import Sejarah from '../Components/Sejarah';
import DaftarIsi from '../Components/DaftarIsi';
import Footer from '../Components/Footer.js';

function TentangMuseum() {
  return (
    <>
    <div className="pb-14 pt-5">
      <h1 className="text-4xl font-bold text-black text-center">Tentang Museum</h1><br></br>
      <Sejarah />
      <DaftarIsi />
    </div>
    </>
  );
}

export default TentangMuseum;
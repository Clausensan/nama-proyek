import React from 'react';
import Footer from '../Components/Footer.js';

const Contact = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="pb-14 pt-5">
          <h1 className="text-4xl font-bold text-black text-center">Unit Pengelola Monumen Nasional</h1>
          <p className="text-black text-3xl font-bold text-center">Jakarta - Indonesia</p><br></br>
          <p className="text-black text-2xl text-center">Telephone: <a href="tel:0213504333" className="link-transition underline">021 350 4333</a></p>
          <p className="text-black text-2xl text-center">Email: <a href="mailto:mtugumonas@yahoo.co.id" className="link-transition underline">mtugumonas@yahoo.co.id</a></p>
          <p className="text-black text-2xl text-center">Alamat: JL. Silang Monas, Gambir, Jakarta, DKI Jakarta, Indonesia</p>
        </div>
      </div>
      <div className="mapouter" style={{ backgroundColor: 'lightgray' }}>
        <div className="gmap_canvas" style={{ padding: '25px 50px' }}>
          <iframe
            className="gmap_iframe"
            title="Google Maps"
            width="100%"
            height="608"
            src="https://maps.google.com/maps?width=661&amp;height=608&amp;hl=en&amp;q=Jl. museum sejarah nasional, Gambir, Jakarta Pusat, DKI Jakarta, Indonesia,&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          </iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;

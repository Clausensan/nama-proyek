import React from 'react';

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
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=661&amp;height=608&amp;hl=en&amp;q=JL.%20Silang%20Monas,%20Gambir,%20Jakarta,%20DKI%20Jakarta,%20Indonesia&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;

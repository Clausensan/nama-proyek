import React from "react";
import 'tailwindcss/tailwind.css';
import bg from '../img/bg.jpg';
import img from '../img/img.png';
import soekarnosilaban from '../img/soekarnosilaban.jpg';
import tumblr from '../img/tumblr.jpg';
import ptsd from '../img/ptsd.jpg';
import museum from '../img/museum.jpg';
import lapmonas from '../img/lapmonas.jpeg';
import bagus from '../img/bagus.jpg'

function Sejarah() {
  return (
    <div className="font-serif tracking-widest text-justify px-24 ">
      <div className="grid grid-cols-2 gap-4">
        <div className="pb-14 pt-5">
          <h1 className="first-line:text-3xl p-10">Sejarah</h1>
          <p className="first-letter:text-3xl ">
            Monumen Nasional (Monas) adalah sebuah landmark yang menjadi simbol perjuangan kemerdekaan Indonesia. Pembangunannya dimulai pada tahun 1961 dan selesai pada tahun 1975. Monas dibangun sebagai penghormatan kepada perjuangan dan pengorbanan para pahlawan nasional yang berjuang untuk kemerdekaan Indonesia dari penjajahan Belanda. Monas juga menjadi pusat kebanggaan bangsa dan salah satu ikon terkenal di Jakarta. Didesain oleh arsitek terkenal Frederich Silaban, Monas memiliki struktur utama berupa menara setinggi 132 meter yang dilapisi dengan marmer.
          </p>
        </div>
        <div>
        <img src={bg} alt="Monas" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="pb-14 pt-5">
        <img src={tumblr} alt="tumblr" />
        </div>
        <div className="pb-14 pt-5">
          <h1 className="first-line:text-3xl p-10">Arsitektur</h1>
          <p className="first-letter:text-3xl">
            Arsitektur Monas merupakan salah satu ciri khas yang membedakan Monumen Nasional dari bangunan lainnya di Jakarta. Monas dirancang oleh arsitek terkenal Indonesia, Frederich Silaban, dengan bantuan tim arsitek lainnya. Struktur utama Monas terdiri dari menara setinggi 132 meter yang menjulang tinggi dan menjadi landmark yang mencolok di tengah kota. Menara tersebut dilapisi dengan marmer yang memberikan kesan megah dan elegan.
          </p>
        </div>
      </div>
        
      <div className="grid grid-cols-2 gap-4">
        <div className="pb-14 pt-5">
        <img src={img} alt="img" />
        </div>
        <div className="pb-14 pt-5">
        <img src={soekarnosilaban} alt="soekarnosilaban" />
        </div>
      </div>


      <div className="grid grid-cols-2 gap-4">
      <div className="pb-14 pt-5">
          <h1 className="first-line:text-3xl p-10">Tugu<br /> Selamat Datang</h1>
          <p className="first-letter:text-3xl">
            Tugu Selamat Datang adalah salah satu elemen penting yang ada di sekitar area Monumen Nasional (Monas). Tugu ini dirancang sebagai gerbang utama yang menyambut kedatangan tamu negara dan menjadi simbol kehormatan terhadap para pemimpin dunia yang berkunjung ke Indonesia. Tugu Selamat Datang memiliki desain yang elegan dan kokoh, menggambarkan kebesaran bangsa Indonesia.
          </p>
        </div>
        <div>
        <img src={ptsd} alt="ptsd" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
      <div>
      <img src={museum} alt="museum"/>
      </div>
      <div className="pb-14 pt-5">
          <h1 className="first-line:text-3xl p-10">Museum Sejarah Nasional</h1>
          <p className="first-letter:text-3xl">
            Museum Sejarah Nasional yang terletak di kompleks Monumen Nasional (Monas) adalah sebuah institusi penting yang memamerkan koleksi artefak dan informasi sejarah Indonesia. Museum ini menjadi tempat yang ideal bagi pengunjung yang ingin menjelajahi perjalanan sejarah Indonesia dari masa lampau hingga masa kini. Di dalam museum ini, terdapat berbagai benda bersejarah yang dipamerkan, termasuk lukisan, patung, peralatan, dan dokumen penting yang merekam peristiwa dan perkembangan penting dalam sejarah Indonesia.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
      <div className="pb-14 pt-5">
          <h1 className="first-line:text-3xl p-10">Lapangan Monas</h1>
          <p className="first-letter:text-3xl">
            Lapangan Monas adalah sebuah area terbuka yang luas yang terletak di sekitar Monumen Nasional (Monas). Lapangan ini memiliki peran penting sebagai tempat berkumpul, bersantai, dan beraktivitas bagi penduduk setempat dan wisatawan. Lapangan Monas sering digunakan untuk berbagai acara olahraga, konser, perayaan nasional, dan acara publik lainnya.
          </p>
        </div>
        <img src={lapmonas} alt="lapmonas" />
      </div>
      <div className="grid grid-cols-2 gap-4">
      <div>
        <img src={bagus} alt="bagus"/>
      </div>
      <div className="pb-14 pt-5">
          <h1 className="first-line:text-3xl p-10">Pengunjung <br />dan Wisata Monas</h1>
          <p className="first-letter:text-3xl">
            Monumen Nasional (Monas) menjadi salah satu tujuan wisata populer di Jakarta yang menarik ribuan pengunjung setiap tahunnya. Pengunjung datang ke Monas untuk menikmati keindahan dan kebersejarahan tempat ini serta untuk menghormati perjuangan pahlawan kemerdekaan Indonesia. Puncak Monas yang terletak di ketinggian 132 meter menawarkan panorama kota Jakarta yang memukau, memungkinkan pengunjung untuk melihat pemandangan perkotaan yang luas dan megah.
          </p>
        </div>
    
      </div>

    </div>
    
  );
}

export default Sejarah;
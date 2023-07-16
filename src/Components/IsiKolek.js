import React from 'react';
import 'tailwindcss/tailwind.css';
import Gallery from './Gallery';
import { motion } from 'framer-motion';
import { FiIconName } from 'react-icons/fi';
import Garuda from '../img/Garuda.jpg';


import nusantara from '../img/nusantara.jpeg';
import Proclamation from '../img/Proclamation.jpg';

function Isikolek() {
  return (
    <div>
      <div className="tracking-widest text-justify px-24">
        <div className="gap-4">
          <div className="pb-14 pt-5">
            <h1 className="text-4xl font-bold text-black text-center">Koleksi</h1>
            <h1 className="first-line:text-3xl p-10 text-center">Monumen<br />Sejarah Nasional Indonesia</h1>
            <p className="first-letter:text-3xl :hover">
              Di bagian dasar monumen pada kedalaman 3 meter di bawah permukaan tanah, terdapat Museum Sejarah Nasional Indonesia.
              Ruang besar museum sejarah perjuangan nasional dengan ukuran luas 80 x 80 meter, dapat menampung pengunjung sekitar 500 orang.
              Ruangan besar berlapis marmer ini terdapat 48 diorama pada keempat sisinya dan 3 diorama di tengah, sehingga menjadi total 51 diorama.
              Diorama ini menampilkan sejarah Indonesia sejak masa pra sejarah hingga masa Orde Baru.
              Diorama tersebut dimulai dari sudut timur laut bergerak searah jarum jam menelusuri perjalanan sejarah Indonesia yang dimulai dari:
            </p>
            <br />
            <ul>
              <li>Masa pra sejarah</li><br />
              <li>Masa Kerajaan Kuno seperti Sriwijaya dan Majapahit</li><br />
              <li>Masa Penjajahan Bangsa Eropa</li><br />
              <li>Perlawanan Pahlawan Nasional Melawan VOC</li><br />
            </ul>
          </div>
          <Gallery />

        </div>
      </div>

      <div className="tracking-widest text-justify px-24">
        <div className="gap-4">
          <div className="pb-14 pt-5">
            <h1 className="first-line:text-3xl p-10 text-center">Ruang<br />Kemerdekaan</h1>
            <p className="first-letter:text-3xl :hover">
              Ruang Kemerdekaan Garuda Pancasila Emas adalah salah satu ruangan yang memiliki makna simbolis yang tinggi dalam memperingati perjuangan kemerdekaan Indonesia. Ruangan ini dirancang secara khusus untuk menghormati dan mengenang semangat perjuangan bangsa Indonesia dalam mencapai kemerdekaan. Ruang Kemerdekaan Garuda Pancasila Emas menggambarkan semangat kebangsaan dan nilai-nilai Pancasila sebagai dasar negara Indonesia.
            </p>
            <br />
            <div className="font-serif tracking-widest text-justify px-24">
              <div className="grid grid-cols-2 gap-4">
                <div className="pb-14 pt-5">
                  <h1 className="first-line:text-3xl p-10">Garuda</h1>
                  <p className="first-letter:text-3xl">
                    Garuda Pancasila Emas: Di tengah ruangan terdapat patung Garuda Pancasila yang diukir dengan indah dan dihiasi dengan emas. Patung ini melambangkan semangat kebangsaan dan keberanian rakyat Indonesia dalam mencapai kemerdekaan.
                  </p>
                </div>
                <div>
                  <img src={Garuda} alt="Garuda Pancasila" />
                </div>
              </div><br></br>
            </div>
            <div className="font-serif tracking-widest text-justify px-24">
            <div className="grid grid-cols-2 gap-4">
                <div>
                <img src={nusantara} alt="Nusantara Emas" />
                </div>
                <div className="pb-14 pt-5">
                  <h1 className="first-line:text-3xl p-10">Nusantara</h1>
                  <p className="first-letter:text-3xl">
                    Nusantara Emas: Ruang ini juga dipenuhi dengan berbagai artefak dan benda bersejarah yang mewakili kekayaan budaya dan warisan Nusantara. Terdapat berbagai koleksi seni, kerajinan, dan barang berharga lainnya yang melambangkan kekayaan alam dan kebudayaan Indonesia.
                  </p>
                </div>
              </div>
            </div>
            <div className="font-serif tracking-widest text-justify px-24">
              <div className=" gap-4">
                <div className="pb-14 pt-5">
                  <h1 className="first-line:text-3xl p-10">Proklamasi</h1>
                  <p className="first-letter:text-3xl">
                    Teks Proklamasi: Salah satu highlight penting di Ruang Kemerdekaan Garuda Pancasila Emas adalah teks asli Proklamasi Kemerdekaan Indonesia. Teks ini memuat kata-kata yang diucapkan oleh Soekarno dan Hatta pada tanggal 17 Agustus 1945, yang secara resmi menyatakan kemerdekaan Indonesia dari penjajahan.
                  </p>
                  <div><br></br>
                    <img src={Proclamation} alt="Teks Proklamasi" style={{ width: '500px', height: 'auto',display: 'block', margin: '0 auto' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Isikolek;

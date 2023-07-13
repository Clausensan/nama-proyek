import React from 'react';
import Image1 from '../img/gambar1.jpeg';
import Image2 from '../img/gambar2.webp';
import Image3 from '../img/gambar3.jpg';
import Image4 from '../img/gambar4.jpeg';
import Image5 from '../img/gambar5.jpg';
import Image6 from '../img/gambar6.jpeg';
import Footer from '../Components/Footer.js';

const BeritaArtikel = () => {
  return (
    <>
    <div className="pb-14 pt-5">
      <h1 className="text-4xl font-bold text-black text-center">Berita</h1>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <div className="bg-white rounded-lg shadow-md">
          <img src={Image1} alt="gambar 1" className="w-full h-64 object-cover rounded-t-lg hover:scale-105 transition-all duration-300" />
          <div className="p-4">
            <a href="https://finance.detik.com/properti/d-6741398/monas-bakal-dipoles-mirip-central-park-di-as-nih-bocorannya" className="text-xl font-bold mb-2 hover:underline">Monas Bakal Dipoles Mirip Central Park di AS, Nih Bocorannya</a>
            <p className="text-gray-500">Jakarta - Kawasan Monumen Nasional (Monas) akan disulap menyerupai Central Park New York, Amerika Serikat (AS). Nantinya kawasan Monas akan dihijaukan kembali dan menjadi city centre di Jakarta.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <img src={Image2} alt="gambar 2" className="w-full h-64 object-cover rounded-t-lg hover:scale-105 transition-all duration-300" />
          <div className="p-4">
            <a href="https://www.liputan6.com/bisnis/read/5298585/kawasan-monas-bakal-punya-menara-kembar-dan-taman-besar-seperti-new-york" className="text-xl font-bold mb-2 hover:underline">Kawasan Monas Bakal Punya Menara Kembar dan Taman Besar Seperti New York</a>
            <p className="text-gray-500">Liputan6.com, Jakarta Menteri Badan Usaha Milik Negara (BUMN) Erick Thohir berencana menyiapkan Twin Tower atau Menara Kembar untuk mendukung City Center Baru di kawasan Monas, Jakarta.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <img src={Image3} alt="gambar 3" className="w-full h-64 object-cover rounded-t-lg hover:scale-105 transition-all duration-300" />
          <div className="p-4">
            <a href="https://megapolitan.kompas.com/read/2023/07/02/06240831/pelari-manfaatkan-water-station-saat-ikuti-ajang-lps-monas-half-marathon?page=all" className="text-xl font-bold mb-2 hover:underline">Pelari Manfaatkan "Water Station" Saat Ikuti Ajang LPS Monas Half Marathon</a>
            <p className="text-gray-500">JAKARTA, KOMPAS.com - Kegiatan lomba lari maraton Lembaga Penjamin Simpanan (LPS) Monas Half Marathon 2023 telah dimulai pada Minggu (2/7/2023) pagi.</p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <div className="bg-white rounded-lg shadow-md">
          <img src={Image4} alt="gambar 4" className="w-full h-64 object-cover rounded-t-lg hover:scale-105 transition-all duration-300" />
          <div className="p-4">
            <a href="https://news.detik.com/berita/d-6785389/harga-tiket-masuk-monas-2023-dan-cara-pembeliannya" className="text-xl font-bold mb-2 hover:underline">Harga Tiket Masuk Monas 2023 dan Cara Pembeliannya</a>
            <p className="text-gray-500">Jakarta - Berapa harga tiket masuk Monas? Dalam rangka peringatan HUT ke-496 DKI Jakarta, Pemprov Jakarta menggelar Monas Week 2023. Monas merupakan kawasan wisata yang terletak di Jakarta Pusat, DKI Jakarta.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <img src={Image5} alt="gambar 5" className="w-full h-64 object-cover rounded-t-lg hover:scale-105 transition-all duration-300" />
          <div className="p-4">
            <a href="https://jakarta.bisnis.com/read/20230411/77/1645863/pj-gubernur-dki-bertemu-menteri-pupr-bahas-revitalisasi-monas" className="text-xl font-bold mb-2 hover:underline">PJ Gubernur DKI Bertemu Menteri PUPR Bahas Revitalisasi Monas</a>
            <p className="text-gray-500">Bisnis.com, JAKARTA — Penjabat (Pj) Gubernur DKI Jakarta Heru Budi Hartono telah bertemu dengan Menteri Pekerjaan Umum dan Perumahan Rakyat (PUPR) Basuki Hadimuljono membahas revitalisasi kawasan Monumen Nasional (Monas). </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <img src={Image6} alt="gambar 6" className="w-full h-64 object-cover rounded-t-lg hover:scale-105 transition-all duration-300" />
          <div className="p-4">
            <a href="https://travel.detik.com/fototravel/d-6805850/anak-sekolah-masih-libur-monas-ramai-meski-di-hari-kerja" className="text-xl font-bold mb-2 hover:underline">Anak Sekolah Masih Libur, Monas Ramai Meski di Hari Kerja</a>
            <p className="text-gray-500">Anak Sekolah Masih Libur, Monas Ramai Meski di Hari Kerja, Warga ramai mengunjugi kawasan Monumen Nasional (Monas) di Jakarta Selasa, (4/7/2023)</p>
          </div>
        </div>
      </div>
      <div><br></br>
        <h1 className="text-4xl font-bold text-black text-center">Artikel</h1><br></br>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
        <a href="https://journal.binus.ac.id/index.php/Humaniora/article/view/3242" className="text-xl font-bold mb-2 hover:underline">Monas sebagai Wajah Dewasa Kota Jakarta: Analisis Manajemen Reputasi dalam Pengelolaan Monas sebagai Ikon Negara</a>
        <p className="text-gray-500">Artikel menjelaskan pengelolaan reputasi Monumen Nasional (Monas), Ikon Jakarta sekaligus simbol Indonesia. Penelitian ini menggunakan paradigma positivis, sifat penelitiannya adalah deskriptif dan pendekatan yang dipilih adalah kualitatif. Pengumpulan data dilakukan dengan wawancara mendalam dan observasi, analisis naratif digunakan.</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <a href="https://idec.ft.uns.ac.id/wp-content/uploads/2019/05/ID050.pdf" className="text-xl font-bold mb-2 hover:underline">Pemilihan Lokasi Parkir Penyewaan Sepeda Menggunakan Maximum Demand Covering Problem Studi Kasus: Kawasan Monas</a>
        <p className="text-gray-500">Penyewaan sepeda dengan konsep bike-sharing semakin populer belakangan ini. Salah satu konsep penyewaan sepeda bike-sharing yang sedang berkembang adalah dockless bike-sharing, yaitu sistem penyewaan sepeda di mana pengguna bebas memarkir sepedanya di manapun setelah selesai dipakai dan telah hadir di Monas.</p>
      </div>
      </div>
      </div>
    </div>
    <Footer />
</>    
    
  );
}

export default BeritaArtikel;


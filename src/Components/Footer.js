import React from "react";
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

function Foot() {
  return (
    <div className="bg-black bg-opacity-70 text-white bottom-0 left-0 w-full">
      <div className="container mx-auto px-4">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="py-2 md:px-4">Jam Operasional <br />
                Senin - Minggu 08.00 - 16.00 WIB</td>
              <td className="py-2 md:px-4">Tiket Reguler<br />
                Dewasa: 5000 Anak: 2000<br />
                Pelajar/Mahasiswa: 3000</td>
              <td className="py-2 md:px-4">
                Badan Layanan Umum <br />
                Monumen Nasional
              </td>
            </tr>
          </tbody>
        </table> <br></br>
        <table className='w-full'>
          <tbody>
              <h1 className='text-center'>&copy; 2023 Monumen Nasional. /Achmad Husein Rifansyah <br />
               Okta Gabriel Sinsaku Sinaga. </h1>
          </tbody>
        </table>
      </div><br />
    </div>
  );
}

export default function Footer() {
  return (
    <div>
      <Foot />
   </div>
  );
}
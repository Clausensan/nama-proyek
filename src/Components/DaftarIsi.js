import React, { useState } from 'react';
import { Link } from 'react-scroll';

function DaftarIsi() {
  const [isAsideOpen, setAsideOpen] = useState(false);

  const toggleAside = () => {
    setAsideOpen(!isAsideOpen);
  };

  return (
    <aside className={`bg-gray-200 p-4 ${isAsideOpen ? 'block' : 'hidden'}`}>
      <button className="bg-gray-400 px-2 py-1 mb-2 text-sm text-white" onClick={toggleAside}>
        {isAsideOpen ? 'Sembunyikan Daftar Isi' : 'Tampilkan Daftar Isi'}
      </button>
      <nav>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Bagian 1
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Bagian 2
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Bagian 3
            </Link>
          </li>
          {/* Tambahkan item daftar isi lainnya sesuai kebutuhan */}
        </ul>
      </nav>
    </aside>
  );
}

export default DaftarIsi;

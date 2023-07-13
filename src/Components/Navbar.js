import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className='max-w-8xl px-4 sm:px-6 lg:px-6'  >
      <div className='flex justify-between items-center h-16 '>
        <h1 className='text-3xl font-bold'>MONAS.</h1>
        <ul className='flex space-x-4 text-black'>
          <li className='p-4'>
            <Link to='/'><button className=' hover:bg-gray-300 text-black font-bold py-2 px-4 rounded hover:scale-105 transition-all duration-300'>Home</button></Link>
          </li>
          <li className='p-4'>
            <Link to='/tentangmuseum' ><button className=' hover:bg-gray-300 text-black font-bold py-2 px-4 rounded hover:scale-105 transition-all duration-300'>Tentang Museum</button></Link>
          </li>
          <li className='p-4'>
            <Link to='/koleksi'><button className=' hover:bg-gray-300 text-black font-bold py-2 px-4 rounded hover:scale-105 transition-all duration-300'>Koleksi</button></Link>
          </li>
          <li className='p-4'>
            <Link to='/beritaartikel'><button className=' hover:bg-gray-300 text-black font-bold py-2 px-4 rounded hover:scale-105 transition-all duration-300'>Berita dan Artikel</button></Link>
          </li>
          <li className='p-4'>
            <Link to='/contact'><button className=' hover:bg-gray-300 text-black font-bold py-2 px-4 rounded hover:scale-105 transition-all duration-300'>Contact</button></Link>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Navbar;

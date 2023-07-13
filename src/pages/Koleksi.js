import { motion } from 'framer-motion';
import { FiIconName } from 'react-icons/fi';
import React from 'react';
import 'tailwindcss/tailwind.css';
import Isikolek from '../Components/IsiKolek';
import Footer from '../Components/Footer.js';

function Koleksi() {
  return (
    <div>
    <Isikolek />
    <Footer />
    </div>
  );
}

export default Koleksi;
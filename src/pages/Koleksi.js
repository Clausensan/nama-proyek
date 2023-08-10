import { motion } from 'framer-motion';
import { FiIconName } from 'react-icons/fi';
import React from 'react';
import 'tailwindcss/tailwind.css';
import Isikolek from '../Components/IsiKolek';
import AudioComponent from '../Components/AudioComponent.js';
import Footer from '../Components/Footer.js';



function Koleksi() {
  return (
    <div>
    <Isikolek />
    <AudioComponent />
    </div>
  );
}

export default Koleksi;
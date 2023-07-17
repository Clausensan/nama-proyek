import React from 'react';
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';

import Screenshot1 from '../img/Screenshot1.png';
import Screenshot2 from '../img/Screenshot2.png';
import Screenshot3 from '../img/Screenshot3.png';
import Screenshot4 from '../img/Screenshot4.png';
import Screenshot5 from '../img/Screenshot5.png';
import Screenshot6 from '../img/Screenshot6.png';
import Screenshot7 from '../img/Screenshot7.png';

const Gallery = () => {
  const images = [
    { name: "Momen Proklamir Kemerdekaan", src: Screenshot1 },
    { name: "Momen Pertempuran Surabaya", src: Screenshot2 },
    { name: "Momen Perang Gerilya", src: Screenshot3 },
    { name: "Momen Persatuan", src: Screenshot4 },
    { name: "Indonesia Masuk Panggung Dunia", src: Screenshot5 },
    { name: "Lubang Buaya", src: Screenshot6 },
    { name: "Ir. Soekarno Sedang Sakit", src: Screenshot7 },
  ];

  const handleImageClick = (image) => {
    console.log('Clicked image:', image);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Gallery Foto Diorama di Ruang Sejarah</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-lg cursor-pointer bg-white"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-full object-cover"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50"
            >
            </motion.div>
            <div className="bg-gray-800 text-white text-center py-2">
              <p className="text-lg font-semibold">{image.name}</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white p-2">
              <p className="text-center">{image.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
  
        }  
export default Gallery;

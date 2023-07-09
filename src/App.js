import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import TentangMuseum from './pages/TentangMuseum';
import Koleksi from './pages/Koleksi';
import BeritaArtikel from './pages/BeritaArtikel';
import Contact from './pages/Contact';
import './style.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/tentangmuseum" element={<TentangMuseum />} />
            <Route path="/koleksi" element={<Koleksi />} />
            <Route path="/beritaartikel" element={<BeritaArtikel />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;

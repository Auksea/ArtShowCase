import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Header';
import Footer from './components/Footer1';
import Home from './components/Home';
import Store from './components/Store';
import About from './components/About';
import Contact from './components/Contact';
import SingleProduct from './components/SingleProduct';
import products from './components/productsData'; // Import the products array

function App() {
  return (
    <Router>
      <div>
        <NavBar /> {/* Include the NavBar component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<SingleProduct products={products} />} />
        </Routes>
        <Footer /> {/* Include the Footer component */}
      </div>
    </Router>
  );
}

export default App;


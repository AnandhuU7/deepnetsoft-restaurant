import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header/Header';
import MenuCarsouler from './components/Menu/MenuCarsoluer';
import Footer from './components/Footer/Footer';
import Footer2 from './components/Footer2/Footer2';
import Menu from './pages/Menu/Menu';
import Create from './pages/Create/Create'; 
import Home from './pages/Home';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MenuCarsouler/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Create />} />
        </Routes>
      </main>
      <Footer />
      <Footer2 />
    </div>
  );
};

export default App;

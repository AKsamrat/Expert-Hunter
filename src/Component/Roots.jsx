import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Roots = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={`${darkMode ? 'dark' : 'light'} dark:bg-[#0F172A] h-screen `}
    >
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode}></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Roots;

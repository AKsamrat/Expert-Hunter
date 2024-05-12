import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Roots = () => {
  const [darkMode, setDarkMode] = useState(false);
  const loc = useLocation();
  useEffect(() => {
    if (loc.pathname === '/') {
      document.title = `Expert-Home`;
    } else {
      document.title = `Expert${loc.pathname.replace('/', '-')}`;
    }
    if (loc.state) {
      document.title = loc.state;
    }
  }, [loc.pathname]);
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

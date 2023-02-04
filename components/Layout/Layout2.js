import React, { useState } from 'react';
import Header from '../header';
import Footer from '../footer';

const LayoutNegro = ({ children }) => {
  const [isTop, setIsTop] = useState(true);


  return (
    <div className='content-public' >
      <div className='header-container'>
        <Header isTop={isTop} />
      </div>
      <main className='contenido'>
        {children}
      </main>
      <footer className='footer-container'>
        <Footer />
      </footer>
    </div>
  );
}

export default LayoutNegro;
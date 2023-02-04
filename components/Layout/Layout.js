import React, { useState } from 'react';
import Header from '../header';
import Footer from '../footer';

const Layout = ({ children }) => {
  const [isTop, setIsTop] = useState(false);
  const changeScroll = () => {
    if (window.pageYOffset > 1200) {
      setIsTop(true);
    } else if (window.pageYOffset < 1200) {
      setIsTop(false);
    };
  }

  return (
    <div className='content-public' onWheel={() => changeScroll()}>
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

export default Layout;
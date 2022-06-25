import React from 'react';
import css from '../styles/Navbar.module.css';
import Image from 'next/image';

const MainNavbar = () => {
  return (
    <div>
      <nav className={css.container}>
        <ul className={css.flex}>
          <div>
            <Image src='/Eoin.svg' alt='' width={100} height={100} />
          </div>
          <div className={css.links}>
            <li>Home</li>
            <li>Categories</li>
            <li>Contact</li>
            <li>About</li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavbar;

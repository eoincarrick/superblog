import React from 'react';
import css from '../styles/Navbar.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const path: string = router.pathname;
  const queryPath: string = router.query;
  console.log('queryPath', queryPath);
  console.log(router.asPath);

  switch (path) {
    case '/blog/authors':
    case '/blog/categories':
    case '/blog/contact':
    case '/blog/posts':
    case '/blog/topics':
    case '/blog/search':
      return <div>Blog Navbar</div>;
      break;

    case '/':
    case '/authors':
    case '/categories':
    case '/contact':
    case '/posts':
    case '/topics':
    case '/search':
      return (
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
      );
      break;

    default:
      break;
  }
};

export default Navbar;

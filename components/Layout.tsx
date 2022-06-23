import React from 'react';

import { useRouter } from 'next/router';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }) => {
  const router = useRouter();
  const path: string = router.pathname;
  console.log(router);

  switch (path) {
    case '/blog*':
      return <div>Blog Navbar</div>;
      break;

    case '/*':
      return <div>Home Page</div>;
      break;

    default:
      break;
  }
};

export default Layout;

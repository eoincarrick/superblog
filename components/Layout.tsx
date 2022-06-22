import React from 'react';

import { useRouter } from 'next/router';

const Layout = () => {
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

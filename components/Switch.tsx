import React from 'react';
import { useRouter } from 'next/router';
import { MainNavbar, BlogNavbar } from './index';

const Switch: React.FunctionComponent<{}> = () => {
  const router = useRouter();
  console.log('slug', router.query.post);
  const path: string = router.pathname;
  // const queryPath: string = router.query;
  // console.log('queryPath', queryPath);
  console.log(router.asPath);

  switch (path) {
    case `/blog/authors`:
    case '/blog/categories':
    case '/blog/contact':
    case '/blog/posts':
    case '/blog/topics':
    case '/blog/search':
      return <BlogNavbar />;
      break;

    case '/':
    case '/authors':
    case '/categories':
    case '/contact':
    case `/posts/${router.query && router.query.post}`:
    case '/topics':
    case '/search':
      return <MainNavbar />;
      break;

    default:
      break;
  }
};

export default Switch;

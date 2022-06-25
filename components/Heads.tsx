import Head from 'next/head';

import React from 'react';

const Heads = ({ title = 'The is a title' }) => {

  

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name='description' content='t' />
        <meta charSet='UTF-8' key='charset' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1'
          key='viewport'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </React.Fragment>
  );
};

export default Heads;

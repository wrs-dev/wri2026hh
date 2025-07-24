import React from 'react';
import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';

const Layout = ({ children, title, description, socialImage }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {socialImage && (
          <>
            <meta property="og:image" content={socialImage} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={socialImage} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
          </>
        )}
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
import React from 'react';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Main from '../src/components/Main';
import SEO from '../src/components/SEO';

export default function Home() {
  return (
    <>
      <SEO />

      <Header />

      <Main />

      <Footer />
    </>
  );
}

import React from 'react';

import Header from '../src/components/Header';
import SEO from '../src/components/SEO';
import Main from '../src/components/Main';

export default function Home() {
  return (
    <>
      <SEO />

      <Header />

      <Main />

      <footer className="bg-blue-900 flex flex-col items-center p-8">
        <p className="font-fira text-base text-blue-400 mt-2">
          Desenvolido por
          {' '}
          <a className="text-white" href="http://www.mateusjbarbosa.dev.br" target="_blank" rel="noreferrer">mateusjbarbosa.dev</a>
          {' '}
          | 2021
        </p>
      </footer>
    </>
  );
}

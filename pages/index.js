import React from 'react';
import Header from '../src/components/Header';

import SEO from '../src/components/SEO';

export default function Home() {
  return (
    <>
      <SEO />

      <Header />

      <main className="bg-blue-800">
        <section className="flex flex-col items-center">
          <h3 className="font-fira font-semibold text-2xl text-blue-400 mt-8 mb-4">
            Quem sou eu?
          </h3>
          <p className="font-fira font-semibold text-3xl text-white text-center max-w-3xl">
            Sou Bacharel em Sistemas de Informação em atuação no mercado a quase
            4 anos e estou focado no mercado de desenvolvimento fullstack.
          </p>
          <p className="font-fira font-light text-xl text-blue-400 text-center max-w-3xl mt-4 mb-4">
            Tenho como objetivo carregar o lema ”da base ao acabamento”, sendo
            assim, ser capaz de receber uma ideia e transformá-la em algo
            tangível, aplicável e que traga sucesso a quem o solicitou!
          </p>
        </section>

        <section className="flex flex-col items-center pb-8">
          <h3 className="font-fira font-semibold text-2xl text-blue-400 mt-8 mb-4">
            Últimas do blog
          </h3>
          <article className="flex flex-col items-start w-1/3 p-4 bg-blue-700 shadow-md rounded-lg mb-4">
            <h4 className="font-fira font-semibold text-xl text-white max-w-3xl">
              Título do artigo
            </h4>
            <p className="font-fira font-light text-lg text-blue-400 max-w-3xl mt-2 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elementum id risus a mollis. Vestibulum id fermentum quam. Vivamus
              vitae neque tellus. Nulla aliquet nibh erat, sed efficitur massa
              tristique ut. In hac habitasse platea dictumst. In vel massa
              sagittis, interdum est ac, malesuada nisl. Vivamus ut placerat
              est.
            </p>
            <button className="uppercase font-bold text-white border-2 rounded px-4 py-2 opacity-50 transition hover:opacity-100" type="button">
              Confira &#8594;
            </button>
          </article>
        </section>
      </main>
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

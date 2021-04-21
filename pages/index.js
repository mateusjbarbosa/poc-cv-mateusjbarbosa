import React from 'react';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>CV - Mateus José Barbosa</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="bg-blue-900 flex flex-col items-center">
        <img
          className="w-48 h-48 rounded-full mx-auto mt-8"
          src="https://unavatar.now.sh/telegram/mateusjbarbosa"
          alt="Esse sou eu!"
        />
        <h1 className="font-fira text-4xl text-white font-bold mt-8">
          Mateus José Barbosa
        </h1>
        <h2 className="font-fira text-base text-blue-400 mt-2">
          Fullstack Developer JR | Mobile Developer JR
        </h2>

        <section className="my-4 flex flex-row">
          <a href="https://www.linkedin.com/in/mateusjbarbosa/" target="_blank" rel="noreferrer">
            <img
              className="w-8 h-8 mx-4 opacity-50 hover:opacity-100 transition"
              src="linkedin.png"
              alt="Meu Linkedin"
            />
          </a>
          <a href="https://www.github.com/mateusjbarbosa/" target="_blank" rel="noreferrer">
            <img
              className="w-8 h-8 mx-4 opacity-50 hover:opacity-100 transition"
              src="github.png"
              alt="Meu Github"
            />
          </a>
          <a href="https://www.instagram.com/_mateusjbarbosa/" target="_blank" rel="noreferrer">
            <img
              className="w-8 h-8 mx-4 opacity-50 hover:opacity-100 transition"
              src="instagram.png"
              alt="Meu Instagram"
            />
          </a>
          <a href="https://t.me/mateusjbarbosa/" target="_blank" rel="noreferrer">
            <img
              className="w-8 h-8 mx-4 opacity-50 hover:opacity-100 transition"
              src="telegram.png"
              alt="Meu Telegram"
            />
          </a>
        </section>
      </header>
    </>
  );
}

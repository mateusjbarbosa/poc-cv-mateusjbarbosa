import React from 'react';

import Image from '../commons/Image';
import { Highlight, Title } from '../commons/Heading';

const Header = () => (
  <>
    <header className="bg-blue-900 flex flex-col items-center">
      <Image variant="profile" url="https://unavatar.now.sh/telegram/mateusjbarbosa" alternative="Esse sou eu!" />

      <Title>
        Mateus José Barbosa
      </Title>
      <Highlight>
        Fullstack Developer JR | Mobile Developer JR
      </Highlight>

      <section className="my-4 flex flex-row">
        <a
          href="https://www.linkedin.com/in/mateusjbarbosa/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-8 h-8 mx-4 opacity-50 hover:opacity-100 transition"
            src="linkedin.png"
            alt="Meu Linkedin"
          />
        </a>
        <a
          href="https://www.github.com/mateusjbarbosa/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-8 h-8 mx-4 opacity-50 hover:opacity-100 transition"
            src="github.png"
            alt="Meu Github"
          />
        </a>
        <a
          href="https://www.instagram.com/_mateusjbarbosa/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-8 h-8 mx-4 opacity-50 hover:opacity-100 transition"
            src="instagram.png"
            alt="Meu Instagram"
          />
        </a>
        <a
          href="https://t.me/mateusjbarbosa/"
          target="_blank"
          rel="noreferrer"
        >
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

export default Header;

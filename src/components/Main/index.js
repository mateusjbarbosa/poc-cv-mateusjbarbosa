import React from 'react';

import Card from '../commons/Card';
import { Subtitle, Text } from '../commons/Heading';

const Hero = () => (
  <section className="flex flex-col items-center">
    <Subtitle>Quem sou eu?</Subtitle>

    <Text variant="hero">
      Sou Bacharel em Sistemas de Informação em atuação no mercado a quase
      4 anos e estou focado no mercado de desenvolvimento fullstack.
    </Text>

    <Text variant="subHero">
      Tenho como objetivo carregar o lema ”da base ao acabamento”, sendo
      assim, ser capaz de receber uma ideia e transformá-la em algo
      tangível, aplicável e que traga sucesso a quem o solicitou!
    </Text>
  </section>
);

const Blog = () => (
  <section className="flex flex-col items-center pb-8">
    <Subtitle>Últimas do blog</Subtitle>

    <Card
      title="Título do artigo"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
      elementum id risus a mollis. Vestibulum id fermentum quam. Vivamus
      vitae neque tellus. Nulla aliquet nibh erat, sed efficitur massa
      tristique ut. In hac habitasse platea dictumst. In vel massa
      sagittis, interdum est ac, malesuada nisl. Vivamus ut placerat
      est."
      ctaText="Confira &#8594;"
    />

  </section>
);

const Main = () => (
  <>
    <main className="bg-blue-800">
      <Hero />

      <Blog />
    </main>
  </>
);

export default Main;

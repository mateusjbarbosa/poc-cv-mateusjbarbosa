import React from 'react';
import { Text } from '../commons/Text';

const Footer = () => (
  <footer className="bg-blue-900 flex flex-col items-center p-8">
    <Text variant="small">
      Desenvolido por
      {' '}
      <a className="text-white" href="http://www.mateusjbarbosa.dev.br" target="_blank" rel="noreferrer">mateusjbarbosa.dev</a>
      {' '}
      | 2021
    </Text>
  </footer>
);

export default Footer;

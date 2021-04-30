import React from 'react';

import PropTypes from 'prop-types';

const Title = ({ children }) => (
  <h1 className="font-fira text-4xl text-white font-bold mt-8">{children}</h1>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

const Subtitle = ({ children }) => (
  <h2 className="font-fira font-semibold text-2xl text-blue-400 mt-8 mb-4">
    {children}
  </h2>
);

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
};

const MinorTitle = ({ children }) => (
  <h3 className="font-fira font-semibold text-xl text-white max-w-3xl">{children}</h3>
);

MinorTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

const Highlight = ({ children }) => (
  <h6 className="font-fira text-base text-blue-400 mt-2">{children}</h6>
);

Highlight.propTypes = {
  children: PropTypes.node.isRequired,
};

const textVariants = {
  default: '',
  hero: 'font-fira font-semibold text-3xl text-white text-center max-w-3xl',
  subHero: 'font-fira font-light text-xl text-blue-400 text-center max-w-3xl mt-4 mb-4',
  highlight: 'font-fira font-light text-lg text-blue-400 max-w-3xl mt-2 mb-4',
  small: 'font-fira text-base text-blue-400 mt-2',
};

const Text = ({ variant, children }) => (
  <p className={textVariants[variant]}>
    {children}
  </p>
);

Text.defaultProps = {
  variant: 'default',
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

export {
  Title, Subtitle, MinorTitle, Highlight, Text,
};

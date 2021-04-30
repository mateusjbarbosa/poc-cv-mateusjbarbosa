import React from 'react';

import PropTypes from 'prop-types';

const Title = ({ children }) => <h1 className="font-fira text-4xl text-white font-bold mt-8">{children}</h1>;

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

const Highlight = ({ children }) => <h6 className="font-fira text-base text-blue-400 mt-2">{children}</h6>;

Highlight.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Title, Highlight };

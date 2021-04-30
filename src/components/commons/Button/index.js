import React from 'react';

import PropTypes from 'prop-types';

const variants = {
  default: '',
  cardButton: 'uppercase font-bold text-white border-2 rounded px-4 py-2 opacity-50 transition hover:opacity-100',
};

const Button = ({ variant, children }) => (
  <button className={variants[variant]} type="button">
    {children}
  </button>
);

Button.defaultProps = {
  variant: 'default',
};

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;

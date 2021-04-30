import React from 'react';

import PropTypes from 'prop-types';

const variants = {
  profile: 'w-48 h-48 rounded-full mx-auto mt-8',
};

const Image = ({ variant, url, alternative }) => (
  <img className={variants[variant]} src={url} alt={alternative} />
);

Image.defaultProps = {
  variant: '',
};

Image.propTypes = {
  url: PropTypes.string.isRequired,
  alternative: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default Image;

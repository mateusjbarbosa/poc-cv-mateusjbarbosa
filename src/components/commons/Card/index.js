import React from 'react';

import PropTypes from 'prop-types';

import Button from '../Button';
import { MinorTitle, Text } from '../Heading';

const Card = ({ title, content, ctaText }) => (
  <div className="flex flex-col items-start w-1/3 p-4 bg-blue-700 shadow-md rounded-lg mb-4">
    <MinorTitle>{title}</MinorTitle>

    <Text variant="highlight">
      {content}
    </Text>

    <Button variant="cardButton">{ctaText}</Button>
  </div>
);

Card.defaultProps = {
  ctaText: '',
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  ctaText: PropTypes.string,
};

export default Card;

import React from 'react';
import PropTypes from 'prop-types';

export const TechMessage = ({ messageError }) => (
  <div className="tech-message">
    <p className="tech-message__text">
      {messageError}
    </p>
  </div>
);

TechMessage.propTypes = {
  messageError: PropTypes.string.isRequired,
};

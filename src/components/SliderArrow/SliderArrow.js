import React from 'react';
import PropTypes from 'prop-types';

export function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <button
      type="button"
      className={className}
      style={
        {
          ...style,
          display: 'block',
        }}
      onClick={onClick}
    >
      <img src="./img/icons/arrow_right.svg" alt="Arrow right" />
    </button>
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <button
      type="button"
      className={className}
      style={
        {
          ...style,
          display: 'block',
        }}
      onClick={onClick}
    >
      <img src="./img/icons/arrow_left.svg" alt="Arrow left" />
    </button>
  );
}

SampleNextArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.any),
};

SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.any),
};

SampleNextArrow.defaultProps = {
  className: '',
  onClick: undefined,
  style: undefined,
};

SamplePrevArrow.defaultProps = {
  className: '',
  onClick: undefined,
  style: undefined,
};

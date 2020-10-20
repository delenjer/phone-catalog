import React from 'react';
import PropTypes from 'prop-types';

export const Photos = ({ detail, slidePhoto }) => (

  <>
    {
      detail.images.map(photo => (
        <button
          key={photo}
          type="button"
          className="details__photo-toggle"
          onClick={e => slidePhoto(e, photo)}
        >
          <img
            src={photo}
            alt="Phone"
            className="details__photo-item"
          />
        </button>
      ))
    }
  </>
);

Photos.propTypes = {
  detail: PropTypes.shape({
    images: PropTypes.array,
  }).isRequired,
  slidePhoto: PropTypes.func.isRequired,
};

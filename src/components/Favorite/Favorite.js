import React from 'react';
import PropTypes from 'prop-types';

import { FavoritePhone } from '../FavoritePhone/FavoritePhone';

export const Favorite = (
  {
    likePhoneId,
    phones,
    addLike,
    addCart,
    handlePush,
  },
) => (
  <div className="wrapper">
    {
      likePhoneId.length > 0 ? (
        <FavoritePhone
          likePhoneId={likePhoneId}
          phones={phones}
          addLike={addLike}
          addCart={addCart}
          handlePush={handlePush}
        />
      ) : (
        <div className="message">
          <p className="message__text">No favorite phones</p>
        </div>
      )
    }
  </div>
);

Favorite.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.object).isRequired,
  likePhoneId: PropTypes.arrayOf(PropTypes.string).isRequired,
  addLike: PropTypes.func.isRequired,
  addCart: PropTypes.func.isRequired,
  handlePush: PropTypes.func.isRequired,
};

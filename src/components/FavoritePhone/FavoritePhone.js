import React from 'react';
import PropTypes from 'prop-types';

import { CardPhone } from '../CardPhone/CardPhone';

export const FavoritePhone = ({ likePhoneId, phones, addLike }) => (
  <section className="catalog">
    {
      phones.filter(item => likePhoneId.includes(item.id)).map(phone => (
        <CardPhone
          key={phone.id}
          phone={phone}
          addLike={addLike}
          likePhoneId={likePhoneId}
        />
      ))
    }
  </section>
);

FavoritePhone.propTypes = {
  phone: PropTypes.shape({
    phone: PropTypes.string,
  }),
  phones: PropTypes.arrayOf(PropTypes.object).isRequired,
  likePhoneId: PropTypes.arrayOf(PropTypes.string).isRequired,
  addLike: PropTypes.func.isRequired,
};

FavoritePhone.defaultProps = {
  phone: undefined,
};

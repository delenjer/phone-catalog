import React from 'react';
import PropTypes from 'prop-types';

import { CardPhone } from '../CardPhone/CardPhone';

export const Phones = ({ phones, addLike, likePhoneId }) => (
  <section className="catalog">
    {
      phones.map(phone => (
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

Phones.propTypes = {
  phone: PropTypes.shape({
    id: PropTypes.string,
  }),
  phones: PropTypes.arrayOf(PropTypes.object).isRequired,
  likePhoneId: PropTypes.arrayOf(PropTypes.string).isRequired,
  addLike: PropTypes.func.isRequired,
};

Phones.defaultProps = {
  phone: undefined,
};

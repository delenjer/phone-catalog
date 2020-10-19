import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Phones } from '../Phones/Phones';
import { Form } from '../Form/Form';
import { Select } from '../Select/Select';

export const PhonesCatalog = (
  {
    phones,
    addLike,
    likePhoneId,
    addCart,
    handlePush,
  },
) => {
  const [query, setQuery] = useState('');
  const [sorted, setSorted] = useState('all');

  const preparePhones = () => {
    const title = query.toLocaleLowerCase();

    switch (sorted) {
      case 'from expensive to cheap':
        return [...phones].sort((a, b) => b.price - a.price)
          .filter(phone => phone.name.toLocaleLowerCase().includes(title));

      case 'from cheap to expensive':
        return [...phones].sort((a, b) => a.price - b.price)
          .filter(phone => phone.name.toLocaleLowerCase().includes(title));

      default:
        return phones
          .filter(phone => phone.name.toLocaleLowerCase().includes(title));
    }
  };

  return (
    <section className="phones">
      <div className="wrapper">
        <h1 className="main-title phones__main-title">Mobile phones</h1>

        <p className="phones-count phones__count">
          {
            `${phones.length} models`
          }
        </p>

        <div className="phones__sorted">
          <Form
            setQuery={setQuery}
          />

          <Select setSorted={setSorted} />
        </div>

        {
          preparePhones().length > 0 ? (
            <Phones
              phones={preparePhones()}
              addLike={addLike}
              likePhoneId={likePhoneId}
              addCart={addCart}
              handlePush={handlePush}
            />
          ) : (
            <div className="message">
              <p className="message__text">No search phones</p>
            </div>
          )
        }
      </div>
    </section>
  );
};

PhonesCatalog.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.object).isRequired,
  likePhoneId: PropTypes.arrayOf(PropTypes.string).isRequired,
  addLike: PropTypes.func.isRequired,
  addCart: PropTypes.func.isRequired,
  handlePush: PropTypes.func.isRequired,
};

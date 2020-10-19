import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const CardPhone = (
  {
    phone,
    addLike,
    likePhoneId,
    addCart,
    handlePush,
  },
) => (
  <Link
    to={`/phones/${phone.id}`}
    className="card"
    onClick={e => handlePush(e, phone.id)}
  >
    <div className="card__img-box">
      <img
        src={phone.imageUrl}
        alt="Phone"
        className="card__img"
      />
    </div>

    <h3 className="card__title">
      {phone.name}
    </h3>

    <p className="card__price">
      <span className="card__price--current">
        {phone.price}
      </span>

      <span className="card__price--old">
        $799
      </span>
    </p>

    <ul className="card__description">
      <li className="card__description-item">
        <h4 className="card__description-title">
          Screen
        </h4>

        <p className="card__description-text">
          {phone.screen}
        </p>
      </li>

      <li className="card__description-item">
        <h4 className="card__description-title">
          Capacity
        </h4>

        <p className="card__description-text">
          {phone.capacity}
        </p>
      </li>

      <li className="card__description-item">
        <h4 className="card__description-title">
          RAM
        </h4>

        <p className="card__description-text">
          {phone.ram}
        </p>
      </li>
    </ul>

    <div className="card__btn-box">
      <button
        type="button"
        className="card__btn card__btn--add"
        onClick={(e) => {
          addCart(e, phone.id);
        }}
      >
        Add to cart
      </button>

      <button
        type="button"
        className="card__btn card__btn--like"
        onClick={(e) => {
          addLike(e, phone.id);
        }}
      >

        <span
          className={
            likePhoneId.includes(phone.id)
              ? 'icon-favorite card__btn-icon like-color'
              : 'icon-favorite card__btn-icon'
          }
        />
      </button>
    </div>
  </Link>
);

CardPhone.propTypes = {
  phone: PropTypes.shape({
    imageUrl: PropTypes.string,
    ram: PropTypes.string,
    capacity: PropTypes.string,
    screen: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  likePhoneId: PropTypes.arrayOf(PropTypes.string).isRequired,
  addLike: PropTypes.func.isRequired,
  addCart: PropTypes.func.isRequired,
  handlePush: PropTypes.func.isRequired,
};

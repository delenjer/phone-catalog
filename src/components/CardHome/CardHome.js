import React from 'react';
import PropTypes from 'prop-types';

export const CardHome = ({ phone }) => (
  <article className="card">
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
  </article>
);

CardHome.propTypes = {
  phone: PropTypes.shape({
    imageUrl: PropTypes.string,
    ram: PropTypes.string,
    capacity: PropTypes.string,
    screen: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

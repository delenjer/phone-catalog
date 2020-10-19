import React from 'react';
import PropTypes from 'prop-types';

export const Cart = ({ cart, handleClick }) => {
  const Total = () => cart.map(item => item.price).reduce((a, b) => a + b, 0);

  return (
    <div className="wrapper">
      <section className="cart">
        <h1 className="cart__title">Cart</h1>

        {
          cart.length > 0 ? (
            <div className="cart__container">
              <ul className="cart__list">
                {
                  cart.map(item => (
                    <li key={item.id} className="cart__item">
                      <button
                        type="button"
                        className="cart__btn"
                        onClick={() => handleClick(item.id)}
                      />

                      <img
                        src={item.imageUrl}
                        alt="img"
                        className="cart__img"
                      />

                      <p className="cart__text">{item.name}</p>

                      <p className="cart__price">{`$${item.price}`}</p>
                    </li>
                  ))
                }
              </ul>

              <div className="cart__total">
                <p className="cart__total-text">
                  {`$${Total()}`}

                  <span className="cart__total-text--description">
                    Total for
                    {' '}
                    {cart.length}
                    {' '}
                    items
                  </span>
                </p>
              </div>
            </div>
          ) : (
            <div className="message">
              <p className="message__text">No add phones</p>
            </div>
          )
        }
      </section>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
};

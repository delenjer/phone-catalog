import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

export const Form = ({ setQuery }) => (
  <form
    action="#"
    className="form phones__form"
  >
    <label htmlFor="input" className="form__label">Search phones</label>
    <input
      type="text"
      name="search"
      id="input"
      placeholder="Enter the title phone"
      className="form__input"
      onChange={e => setQuery(e.target.value)}
    />
  </form>
);

Form.propTypes = {
  setQuery: PropTypes.func.isRequired,
};

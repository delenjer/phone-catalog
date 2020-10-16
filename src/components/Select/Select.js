import React from 'react';
import PropTypes from 'prop-types';

export const Select = ({ setSorted }) => (
  <select
    className="select"
    onChange={e => setSorted(e.target.value)}
  >
    <option value="all">All</option>
    <option value="from expensive to cheap">From expensive to cheap</option>
    <option value="from cheap to expensive">From cheap to expensive</option>
  </select>
);

Select.propTypes = {
  setSorted: PropTypes.func.isRequired,
};

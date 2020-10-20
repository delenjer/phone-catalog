import React from 'react';
import PropTypes from 'prop-types';

export const Details = ({ detail }) => (
  <ul className="details__specs-list">
    <li className="details__specs-item">
      <h3 className="details__title details__title--specs-title">
        Screen
      </h3>

      <p className="details__specs-text">
        {detail.display.screenResolution}
      </p>
    </li>

    <li className="details__specs-item">
      <h3 className="details__title details__title--specs-title">
        Processor
      </h3>

      <p className="details__specs-text">
        {detail.hardware.cpu}
      </p>
    </li>

    <li className="details__specs-item">
      <h3 className="details__title details__title--specs-title">
        Ram
      </h3>

      <p className="details__specs-text">
        {detail.storage.ram}
      </p>
    </li>

    <li className="details__specs-item">
      <h3 className="details__title details__title--specs-title">
        Built in memory
      </h3>

      <p className="details__specs-text">
        {detail.storage.flash}
      </p>
    </li>

    <li className="details__specs-item">
      <h3 className="details__title details__title--specs-title">
        Camera
      </h3>

      <p className="details__specs-text">
        {detail.camera.primary}
      </p>
    </li>

    <li className="details__specs-item">
      <h3 className="details__title details__title--specs-title">
        Cell
      </h3>

      <p className="details__specs-text">
        {detail.connectivity.cell}
      </p>
    </li>
  </ul>
);

Details.propTypes = {
  detail: PropTypes.shape({
    display: PropTypes.object,
    screenResolution: PropTypes.string,
    hardware: PropTypes.object,
    cpu: PropTypes.string,
    storage: PropTypes.object,
    ram: PropTypes.string,
    flash: PropTypes.string,
    camera: PropTypes.object,
    primary: PropTypes.string,
    connectivity: PropTypes.object,
    cell: PropTypes.string,
  }).isRequired,
};

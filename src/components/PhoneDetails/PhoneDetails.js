import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { GetDetailsURL } from '../../api/api';

export const PhoneDetails = () => {
  const [details, setDetails] = useState([]);
  const { phoneId } = useParams();

  useEffect(() => {
    fetch(GetDetailsURL(phoneId))
      .then(response => response.json())
      .then(data => setDetails([...details, data]));
  }, [phoneId]);

  return (
    <div className="wrapper">
      <section className="details">
        <h1 className="details__title">{phoneId}</h1>

        <article className="details__specs">
          <h2 className="details__title">Tech specs</h2>

          <ul className="details__specs-list">
            {
              details.map(detail => (
                <li className="details__specs-item">
                  <h3 className="details__specs-title">
                    Screen
                  </h3>

                  <p className="details__specs-text">
                    {detail.display.screenResolution}
                  </p>
                </li>
              ))
            }
          </ul>
        </article>
      </section>
    </div>
  );
};

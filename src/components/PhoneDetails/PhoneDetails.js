import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { GetDetailsURL } from '../../api/api';
import { Details } from '../Details/Details';

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
          <h2 className="details__title details__title--tech">Tech specs</h2>

          {
            details.map(detail => (
              <Details key={detail.id} detail={detail} />
            ))
          }
        </article>
      </section>
    </div>
  );
};

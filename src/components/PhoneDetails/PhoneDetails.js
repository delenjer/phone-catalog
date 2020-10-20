import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { GetDetailsURL } from '../../api/api';
import { Details } from '../Details/Details';
import { Photos } from '../Photos/Photos';
import { BackPath } from '../BackPath/BackPath';

export const PhoneDetails = () => {
  const [details, setDetails] = useState([]);
  const [photoId, setPhotoId] = useState('');
  const [isPhotoClicked, setPhotoClicked] = useState(false);
  const { phoneId } = useParams();

  useEffect(() => {
    fetch(GetDetailsURL(phoneId))
      .then(response => response.json())
      .then(data => setDetails([...details, data]));
  }, [phoneId]);

  const slidePhoto = (e, photo) => {
    setPhotoId(photo);
    setPhotoClicked(true);
  };

  return (
    <div className="wrapper">
      <BackPath />

      {
        details.map(detail => (
          <section key={detail.id} className="details">
            <h1 className="details__title">{detail.name}</h1>

            <article className="details__photo">
              <div className="details__photo-big">
                <img
                  src={isPhotoClicked ? photoId : detail.images[0]}
                  alt="Phone"
                  className="details__photo-big"
                />
              </div>

              <div className="details__photo-wrap">
                <Photos
                  detail={detail}
                  slidePhoto={slidePhoto}
                />
              </div>
            </article>

            <article className="details__about">
              <h2
                className="details__title details__title--about-title"
              >
                About
              </h2>

              <p className="details__about-text">
                {detail.description}
              </p>
            </article>

            <article className="details__specs">
              <h2
                className="details__title details__title--tech"
              >
                Tech specs
              </h2>

              <Details detail={detail} />
            </article>
          </section>
        ))
      }
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';
import '../../styles/slick.scss';
import { SampleNextArrow, SamplePrevArrow } from '../SliderArrow/SliderArrow';

import { CardHome } from '../CardHome/CardHome';

import './new-phones.scss';

export const NewPhone = ({ newPhones }) => {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    setSettings(({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    }));
  }, []);

  return (
    <>
      <h2 className="hot-price__title">Brand new models</h2>

      <div className="slider-offer">
        <Slider
          {...settings}
          className="slider-offer slider-hot"
        >
          {
            newPhones.map(phone => (
              <div key={phone.id} className="slider-offer__item">
                <CardHome phone={phone} />
              </div>
            ))
          }
        </Slider>
      </div>
    </>
  );
};

NewPhone.propTypes = {
  newPhones: PropTypes.arrayOf(PropTypes.object).isRequired,
};

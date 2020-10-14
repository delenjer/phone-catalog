import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';
import '../../styles/slick.scss';
import { SampleNextArrow, SamplePrevArrow } from '../SliderArrow/SliderArrow';

import { Card } from '../Card/Card';

import './hot-price.scss';

export const HotPrice = ({ hotPricesPhones }) => {
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
      <h2 className="hot-price__title">Hot prices</h2>

      <div className="slider-offer">
        <Slider
          {...settings}
          className="slider-offer slider-hot"
        >
          {
            hotPricesPhones.map(phone => (
              <div key={phone.id} className="slider-offer__item">
                <Card phone={phone} />
              </div>
            ))
          }
        </Slider>
      </div>
    </>
  );
};

HotPrice.propTypes = {
  hotPricesPhones: PropTypes.arrayOf(PropTypes.object).isRequired,
};

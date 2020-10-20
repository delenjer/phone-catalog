import React, { useState, useEffect } from 'react';

import Slider from 'react-slick';
import '../../styles/slick.scss';
import { SampleNextArrow, SamplePrevArrow } from '../SliderArrow/SliderArrow';

import './banner.scss';

export const Banner = () => {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    setSettings(({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    }));
  }, []);

  return (
    <Slider
      {...settings}
      className="banner"
    >
      <div className="banner__item">
        <img
          src="./img/banner/banner.png"
          alt="banner"
          className="banner__img"
        />
      </div>

      <div className="banner__item">
        <img
          src="./img/banner/banner-2.png"
          alt="banner"
          className="banner__img"
        />
      </div>
    </Slider>
  );
};

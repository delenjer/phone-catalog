import React, { useState, useEffect } from 'react';

import Slider from 'react-slick';
import '../../styles/slick.scss';

export const Banner = () => {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    setSettings(({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }));
  }, []);

  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider>
  );
};

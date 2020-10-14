import React, { useState, useEffect } from 'react';

import { Banner } from '../Banner/Banner';
import { HotPrice } from '../HotPrice/HotPrice';
import { NewPhone } from '../NewPhone/NewPhone';
import { getPhone } from '../../api/api';

export const Home = () => {
  const [hotPricesPhones, setHotPricesPhones] = useState([]);
  const [newPhones, setNewPhones] = useState([]);

  useEffect(() => {
    const hotPhoneFromServer = async() => {
      const hotPhones = await getPhone();

      setHotPricesPhones(hotPhones.slice(0, 6));
    };

    hotPhoneFromServer().then();
  }, []);

  useEffect(() => {
    const newPhoneFromServer = async() => {
      const getNewPhones = await getPhone();

      setNewPhones(getNewPhones.slice(6, 12));
    };

    newPhoneFromServer().then();
  }, []);

  return (
    <div className="wrapper">
      <div className="banner-container">
        <Banner />
      </div>

      <div className="hot-price">
        <HotPrice
          hotPricesPhones={hotPricesPhones}
        />
      </div>

      <div className="new-phones">
        <NewPhone
          newPhones={newPhones}
        />
      </div>
    </div>
  );
};

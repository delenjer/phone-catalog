import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { PhonesCatalog } from './components/PhonesCatalog/PhonesCatalog';
import { Favorite } from './components/Favorite/Favorite';
import { Footer } from './components/Footer/Footer';

import './App.scss';
import { getPhone } from './api/api';
import { addLikePhone } from './helpers/helpers';

const App = () => {
  const [phones, setPhones] = useState([]);
  const [likePhoneId, setLikePhoneId] = useState([]);

  useEffect(() => {
    const phoneFromServer = async() => {
      const data = await getPhone();

      setPhones(data);
    };

    phoneFromServer().then();
  }, []);

  const addLike = (e, id) => {
    e.preventDefault();

    addLikePhone(id, likePhoneId, setLikePhoneId);
  };

  return (
    <>
      <Header likePhoneId={likePhoneId} />

      <Switch>
        <Route
          path="/"
          exact
          component={Home}
        />

        <Route
          path="/phones"
        >
          <PhonesCatalog
            phones={phones}
            addLike={addLike}
            likePhoneId={likePhoneId}
          />
        </Route>

        <Route
          path="/favorite"
        >
          <Favorite
            likePhoneId={likePhoneId}
            phones={phones}
            addLike={addLike}
          />
        </Route>
      </Switch>

      <Footer />
    </>
  );
};

export default App;

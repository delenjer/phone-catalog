import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { PhonesCatalog } from './components/PhonesCatalog/PhonesCatalog';
import { Favorite } from './components/Favorite/Favorite';
import { Cart } from './components/Cart/Cart';
import { Footer } from './components/Footer/Footer';

import './App.scss';
import { getPhone } from './api/api';
import { addLikePhone } from './helpers/helpers';

const App = () => {
  const [phones, setPhones] = useState([]);
  const [likePhoneId, setLikePhoneId] = useState([]);
  const [cart, setCart] = useState([]);

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

  const addCart = (e, id) => {
    e.preventDefault();

    const price = phones.filter(phone => phone.id === id)
      .map(phone => phone.price).join('');

    const images = phones.filter(phone => phone.id === id)
      .map(phone => phone.imageUrl).join('');

    setCart([
      ...cart,
      {
        id: +new Date(),
        phone: id,
        price: +price,
        imageUrl: images,
      },
    ]);
  };

  const handleClick = (id) => {
    setCart([...cart].filter(item => item.id !== id));
  };

  return (
    <div className="main">
      <Header
        likePhoneId={likePhoneId}
        cart={cart}
      />

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
            addCart={addCart}
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

        <Route
          path="/cart"
        >
          <Cart
            cart={cart}
            handleClick={handleClick}
          />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
};

export default App;

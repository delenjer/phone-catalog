import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { PhonesCatalog } from './components/PhonesCatalog/PhonesCatalog';
import { Favorite } from './components/Favorite/Favorite';
import { Cart } from './components/Cart/Cart';
import { PhoneDetails } from './components/PhoneDetails/PhoneDetails';
import { Footer } from './components/Footer/Footer';
import { TechMessage } from './components/TechMessage/TechMessage';

import './App.scss';
import { getPhone } from './api/api';
import {
  addLikePhone,
  getWindowSize,
  messageErrorData,
  messageErrorWidth,
} from './helpers/helpers';

const App = () => {
  const [phones, setPhones] = useState([]);
  const [likePhoneId, setLikePhoneId] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoaded, setLoaded] = useState(true);
  const [isError, setError] = useState(false);
  const [windowWidth, setWindowWidth] = useState(getWindowSize());
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    const phoneFromServer = async() => {
      try {
        const data = await getPhone();

        setPhones(data);
        setTimeout(() => setLoaded(false), 1000);
        setError(false);
      } catch (e) {
        setError(true);

        // eslint-disable-next-line no-console
        console.error(e);
      }
    };

    phoneFromServer().then();
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowSize());
    }

    window.addEventListener('resize', handleResize);
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

  const handlePush = (e, phoneId) => {
    e.preventDefault();

    history.push(`/details/${phoneId}`);
  };

  return (
    <>
      {
        isError ? (
          <TechMessage messageError={messageErrorData} />
        ) : (
          <>
            {
              windowWidth.width < 1200 ? (
                <TechMessage messageError={messageErrorWidth} />
              ) : (
                <>
                  {
                    isLoaded ? (
                      <div className="loader-container">
                        <div className="loader">Loading...</div>
                      </div>
                    ) : (
                      <div className="main">
                        <Header
                          likePhoneId={likePhoneId}
                          cart={cart}
                          pathname={pathname}
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
                              handlePush={handlePush}
                            />
                          </Route>

                          <Route
                            path="/favorite"
                          >
                            <Favorite
                              likePhoneId={likePhoneId}
                              phones={phones}
                              addLike={addLike}
                              addCart={addCart}
                              handlePush={handlePush}
                            />
                          </Route>

                          <Route
                            path="/details/:phoneId"
                          >
                            <PhoneDetails />
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
                    )
                  }
                </>
              )
            }
          </>
        )
      }
    </>
  );
};

export default App;

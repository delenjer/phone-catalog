import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Phones } from './components/Phones/Phones';
import { Footer } from './components/Footer/Footer';

import './App.scss';

const App = () => (
  <>
    <Header />

    <Switch>
      <Route
        path="/"
        exact
        component={Home}
      />

      <Route
        path="/phones"
        component={Phones}
      />
    </Switch>

    <Footer />
  </>
);

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages';
import Checkout from './pages/checkout';
import NotFound from './pages/404';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/checkout" component={Checkout} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;

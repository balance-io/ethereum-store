import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages';
import OrderConfirmation from './pages/OrderConfirmation';
import NotFound from './pages/404';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/order-confirmation" component={OrderConfirmation} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages';
import OrderConfirmation from './pages/OrderConfirmation';
import NotFound from './pages/404';

class Router extends Component {
  componentDidMount() {
    window.browserHistory = this.context.router.history;
  }
  render = () => (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/order-confirmation" component={OrderConfirmation} />
      <Route component={NotFound} />
    </Switch>
  );
}

Router.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Router;

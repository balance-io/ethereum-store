import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { globalStyles } from './styles';
import Router from './Router';

// eslint-disable-next-line
injectGlobal`${globalStyles}`;

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

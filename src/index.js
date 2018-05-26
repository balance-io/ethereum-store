import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { globalStyles } from './styles';
import Homepage from './pages';

// eslint-disable-next-line
injectGlobal`${globalStyles}`;

const Root = () => <Homepage />;

ReactDOM.render(<Root />, document.getElementById('root'));

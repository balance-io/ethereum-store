import { combineReducers } from 'redux';
import order from './_order';
import modal from './_modal';
import walletconnect from './_walletconnect';

export default combineReducers({
  order,
  modal,
  walletconnect
});

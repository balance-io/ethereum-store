import {
  walletConnectInit,
  walletConnectGetAccounts,
  walletConnectSignTransaction
} from '../walletconnect';
import { orderUpdateShipping } from './_order';
import { modalClose } from './_modal';

// -- Constants ------------------------------------------------------------- //

const WALLET_CONNECT_MODAL_INIT_REQUEST =
  'walletConnect/WALLET_CONNECT_MODAL_INIT_REQUEST';
const WALLET_CONNECT_MODAL_INIT_SUCCESS =
  'walletConnect/WALLET_CONNECT_MODAL_INIT_SUCCESS';
const WALLET_CONNECT_MODAL_INIT_FAILURE =
  'walletConnect/WALLET_CONNECT_MODAL_INIT_FAILURE';

const WALLET_CONNECT_SUBMIT_ORDER_REQUEST =
  'walletConnect/WALLET_CONNECT_SUBMIT_ORDER_REQUEST';
const WALLET_CONNECT_SUBMIT_ORDER_SUCCESS =
  'walletConnect/WALLET_CONNECT_SUBMIT_ORDER_SUCCESS';
const WALLET_CONNECT_SUBMIT_ORDER_FAILURE =
  'walletConnect/WALLET_CONNECT_SUBMIT_ORDER_FAILURE';

const WALLET_CONNECT_CLEAR_FIELDS = 'walletConnect/WALLET_CONNECT_CLEAR_FIELDS';

// -- Actions --------------------------------------------------------------- //

export const walletConnectSubmitOrder = () => (dispatch, getState) => {
  dispatch({ type: WALLET_CONNECT_SUBMIT_ORDER_REQUEST });
  walletConnectGetAccounts((error, data) => {
    if (error) {
      console.log('walletConnectGetAccounts ERROR');
      dispatch({ type: WALLET_CONNECT_SUBMIT_ORDER_FAILURE });
    } else if (data) {
      console.log('walletConnectGetAccounts SUCCESS');
      const accountAddress = data.address.toLowerCase();
      console.log('data', data);
      const { modalData } = getState().modal;
      const order = {
        ...modalData,
        shipping: {
          name: data.personalData.personalDetails.name,
          email: data.personalData.personalDetails.email,
          phone: data.personalData.personalDetails.phone,
          ...data.personalData.shippingAddress
        }
      };
      console.log('order', order);
      dispatch(orderUpdateShipping(order.shipping));
      const transaction = {
        from: accountAddress,
        to: '0x9b7b2B4f7a391b6F14A81221AE0920A9735B67Fb',
        value: '0x2386f26fc10000',
        data: '0x',
        gasPrice: '0x165a0bc00',
        gasLimit: '0x5208'
      };
      console.log('transaction', transaction);
      walletConnectSignTransaction(transaction)
        .then(txHash => {
          if (txHash) {
            console.log('walletConnectSignTransaction SUCCESS');
            dispatch({
              type: WALLET_CONNECT_SUBMIT_ORDER_SUCCESS,
              payload: txHash
            });
            this.setState({ txHash });
          } else {
            console.log('walletConnectSignTransaction ERROR');
            throw new Error('Could not send transaction via Wallet Connect');
          }
        })
        .catch(error => {
          console.error(error);
          console.log('walletConnectSignTransaction ERROR');
          dispatch({ type: WALLET_CONNECT_SUBMIT_ORDER_FAILURE });
        });
    }
  });
};

export const walletConnectModalInit = () => async (dispatch, getState) => {
  dispatch({ type: WALLET_CONNECT_MODAL_INIT_REQUEST });
  walletConnectInit()
    .then(walletConnectInstance => {
      const webConnector = walletConnectInstance.webConnector;
      const request = {
        domain: walletConnectInstance.bridgeDomain,
        sessionId: webConnector.sessionId,
        sharedKey: webConnector.sharedKey,
        dappName: webConnector.dappName
      };
      const qrcode = JSON.stringify(request);
      dispatch({
        type: WALLET_CONNECT_MODAL_INIT_SUCCESS,
        payload: { webConnector, qrcode }
      });
      dispatch(walletConnectSubmitOrder());
    })
    .catch(error => {
      console.error(error);
      dispatch({ type: WALLET_CONNECT_MODAL_INIT_FAILURE });
    });
};

export const walletConnectClearFields = () => dispatch => {
  dispatch({ type: WALLET_CONNECT_CLEAR_FIELDS });
  dispatch(modalClose());
};

// -- Reducer --------------------------------------------------------------- //
const INITIAL_STATE = {
  fetching: false,
  webConnector: null,
  qrcode: '',
  txHash: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WALLET_CONNECT_MODAL_INIT_REQUEST:
      return {
        ...state,
        fetching: true,
        error: ''
      };
    case WALLET_CONNECT_MODAL_INIT_SUCCESS:
      return {
        ...state,
        fetching: false,
        webConnector: action.payload.webConnector,
        qrcode: action.payload.qrcode
      };
    case WALLET_CONNECT_MODAL_INIT_FAILURE:
      return {
        ...state,
        fetching: false,
        webConnector: null
      };
    case WALLET_CONNECT_SUBMIT_ORDER_SUCCESS:
      return {
        ...state,
        txHash: action.payload
      };
    case WALLET_CONNECT_CLEAR_FIELDS:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};

// -- Constants ------------------------------------------------------------- //

const ORDER_UPDATE_PRODUCT = 'order/ORDER_UPDATE_PRODUCT';
const ORDER_UPDATE_SHIPPING = 'order/ORDER_UPDATE_SHIPPING';
const ORDER_UPDATE_STATUS = 'order/ORDER_UPDATE_STATUS';

// -- Actions --------------------------------------------------------------- //

export const orderUpdateProduct = productData => (dispatch, getState) => {
  console.log('productData', productData);
  let { product } = getState().order;
  product = { ...product, ...productData };
  dispatch({
    type: ORDER_UPDATE_PRODUCT,
    payload: product
  });
};

export const orderUpdateShipping = shippingData => (dispatch, getState) => {
  console.log('shippingData', shippingData);
  let { shipping } = getState().order;
  shipping = { ...shipping, ...shippingData };
  dispatch({
    type: ORDER_UPDATE_SHIPPING,
    payload: shipping
  });
};

export const orderUpdateStatus = statusData => (dispatch, getState) => {
  let { status } = getState().order;
  status = { ...status, ...statusData };
  dispatch({
    type: ORDER_UPDATE_STATUS,
    payload: status
  });
};

// -- Reducer --------------------------------------------------------------- //
const INITIAL_STATE = {
  product: {
    name: 'Ethereum T-Shirt',
    description: 'The perfect t-shirt for buidlers on Ethereum',
    size: 'M',
    price: 20,
    currency: { value: 'USD', symbol: '$' }
  },
  shipping: {
    name: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  },
  status: { completed: false, paid: false }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ORDER_UPDATE_PRODUCT:
      return { ...state, product: action.payload };
    case ORDER_UPDATE_SHIPPING:
      return { ...state, shipping: action.payload };
    case ORDER_UPDATE_STATUS:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};

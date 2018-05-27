// -- Constants ------------------------------------------------------------- //

const MODAL_OPEN = 'modal/MODAL_OPEN';
const MODAL_CLOSE = 'modal/MODAL_CLOSE';

// -- Actions --------------------------------------------------------------- //

export const modalOpen = modalData => ({
  type: MODAL_OPEN,
  payload: modalData
});

export const modalClose = () => ({ type: MODAL_CLOSE });

// -- Reducer --------------------------------------------------------------- //
const INITIAL_STATE = {
  modalShow: false,
  modalData: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return { ...state, modalShow: true, modalData: action.payload };
    case MODAL_CLOSE:
      return { ...state, modalShow: false, modalData: {} };
    default:
      return state;
  }
};

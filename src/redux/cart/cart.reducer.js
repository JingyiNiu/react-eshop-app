import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

// set initial state
const INITIAL_STATE = {
  hidden: true,
  cartItem: [],
};

// set corresponding return value for each case
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // change hidden state to opposite
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    // add payload to cartItem array
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItem: addItemToCart(state.cartItem, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;

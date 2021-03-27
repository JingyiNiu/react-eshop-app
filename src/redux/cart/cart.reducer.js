import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

// set initial state
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
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

    // add payload(item) to cartItem array
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    // remove payload(item) to cartItem array
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        // if the id of payload we pass doesn't match item's id, stay
        // if not, return a new item array without it
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;

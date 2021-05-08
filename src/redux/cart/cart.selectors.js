import { createSelector } from "reselect";

// Selector可以保留数据，其他状态变化（signin signout）不会影响购物车里的内容

// get cart object from whole state
const selectCart = (state) => state.cart;

// select state.cart.cartItems
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// select state.cart.hidden
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
)

// select state.cart.cartItems, get each cartItem.quantity and calculate itemsCount
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
  cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

// select state.cart.cartItems and calculate total price of all items
export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
  cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
)

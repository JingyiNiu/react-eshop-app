import { createSelector } from "reselect";

// Selectork可以保留数据，其他状态变化（signin signout）不会影响购物车里的内容

// get cart object from state
const selectCart = (state) => state.cart;

// output cartItems
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// get cartItems and calculate itemsCount
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
  cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

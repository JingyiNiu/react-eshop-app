import { createSelector } from "reselect";

// Selectork可以保留数据，其他状态变化（signin signout）不会影响购物车里的内容

// get cart object from state
const selectCart = (state) => state.cart;

// output cartItems
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// cart.hidden
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
)

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

// get total price of all items
export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
  cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
)

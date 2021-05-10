// FUNCTION: item quantity + 1
export const addItemToCart = (cartItems, cartItemToAdd) => {
  // check if item id we are going to add matches any item's id already exists in cart
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  // if there is a match(we are adding an existing item), return an array with existing item and quantity + 1
  if (existingCartItem) {
    return cartItems.map((cartItem) => // map all items
      cartItem.id === cartItemToAdd.id // find the match item's id
        ? { ...cartItem, quantity: cartItem.quantity + 1 } // return a new array with quantity + 1
        : cartItem // if no match, return previous array
    );
  }
  // if no match found(we are adding a new item), return an array with new item and quantity of 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};


// FUNCTION: item quantity - 1
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  // check if item id we are going to minus matches any item's id already exists in cart
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  // if the quantity of this item is already 1, keeps its value of 1
  if (existingCartItem.quantity === 1) {
    return cartItems;
  }
  // if the quantity is not 1, then - 1
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

// FUNCTION: item quantity + 1
export const addItemToCart = (cartItem, cartItemToAdd) => {
  // check if item id we are going to add
  // matches any item's id already exists in cart
  const existingCartItem = cartItem.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  // if there is a match(we are adding an existing item)
  // return an array with existing item and quantity + 1
  if (existingCartItem) {
    // map all items
    return cartItem.map((cartItem) =>
      // find the match item's id
      cartItem.id === cartItemToAdd.id
        ? // return a new array with quantity + 1
          { ...cartItem, quantity: cartItem.quantity + 1 }
        : // if no match, return previous array
          cartItem
    );
  }
  // if no match found(we are adding a new item)
  // return an array with new item and quantity of 1
  return [...cartItem, { ...cartItemToAdd, quantity: 1 }];
};

// FUNCTION: item quantity - 1 or remove item
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  // check if item id we are going to minus 
  // matches any item's id already exists in cart
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  // if the quantity of this item is already 1
  // keeps its value of 1
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

export const addItemToCart = (cartItem, cartItemToAdd) => {
  // check if item id we are going to add matches any item's id already exists in cart
  const existingCartItem = cartItem.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // if there is a match(we are adding an existing item), return an array with existing item and quantity + 1
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

  // if no match found(we are adding a new item), return an array with new item and quantity of 1
  return [...cartItem, { ...cartItemToAdd, quantity: 1 }];
};

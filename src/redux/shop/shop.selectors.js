import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

// state.shop.collections
export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// select state.shop.collections and convert it to an array
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  // object has paired kay and value, we map all keys in the collection and find the match one
  (collections) => Object.keys(collections).map((key) => collections[key])
);

// we pass collectionUrlParam and get back corresponding collection object
export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );

import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.config';

export const fetchCollectionsStart = () => ({ // switch reducer's fetching state
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

// redux thunk allow us return a function in a function and get access to dispatch
// so we can dispatch multiple actions and handle asynchronous code
export const fetchCollectionsStartAsync = () => { 
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
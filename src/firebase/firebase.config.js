import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAtMFpRF9zeWhndfirNcAT7QGk9zLeRzs4",
  authDomain: "njy-react-eshop-app.firebaseapp.com",
  projectId: "njy-react-eshop-app",
  storageBucket: "njy-react-eshop-app.appspot.com",
  messagingSenderId: "968184561240",
  appId: "1:968184561240:web:9249d71e4652441f32942d",
  measurementId: "G-4ZB2ZG0P73",
};

firebase.initializeApp(config);

// create new user document in firebase
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // if userAuth object doesn't exist(no user log in), just return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    // check if user already exist in database. if not, store user data
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error createing user", error.message);
    }
  }

  return userRef;
};

// add collections and documents in firebase
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch(); // batch or group all the calls together
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

// convert collections snapshot to objects
export const convertCollectionsSnapshotToMap = (collections) => {
  
  // get all collections from firebase(每个collection object的key是index： hats的key是0, jackets的key是1, 以此类推)
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data(); // pull off title and items of doc data
    return {
      routeName: encodeURI(title.toLowerCase()), // format routename that url can read
      id: doc.id,
      title,
      items,
    };
  });

  // 让每个collection object的key是它们对应的title： hats的key是hats, jackets的key是jackets
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

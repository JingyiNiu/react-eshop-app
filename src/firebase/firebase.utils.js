import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAtMFpRF9zeWhndfirNcAT7QGk9zLeRzs4",
    authDomain: "njy-react-eshop-app.firebaseapp.com",
    projectId: "njy-react-eshop-app",
    storageBucket: "njy-react-eshop-app.appspot.com",
    messagingSenderId: "968184561240",
    appId: "1:968184561240:web:9249d71e4652441f32942d",
    measurementId: "G-4ZB2ZG0P73"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
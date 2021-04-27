// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD27urLUK2f3vuWZsPYIEpH-vmaG0PVSJw",
  authDomain: "disney-clone-64884.firebaseapp.com",
  projectId: "disney-clone-64884",
  storageBucket: "disney-clone-64884.appspot.com",
  messagingSenderId: "486598101509",
  appId: "1:486598101509:web:d40d4ca478f1ff6e68ea6c",
  measurementId: "G-E24X2CSKH7"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;
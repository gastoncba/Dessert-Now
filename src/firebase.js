import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDoEmdaI7OkhYtfaGRVMTFonTJ89Lx35Fo",
  authDomain: "dessert-now.firebaseapp.com",
  projectId: "dessert-now",
  storageBucket: "dessert-now.appspot.com",
  messagingSenderId: "8933082954",
  appId: "1:8933082954:web:795d050e5c37cde43963b3"
};

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore(); //El metodo firestore nos permite trabajar con la base de datos.

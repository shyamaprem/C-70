import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDc79n3Q8Co20c2Tc_wch1uUU5h6LYiiVI",
  authDomain: "wily-app-dbb3e.firebaseapp.com",
  projectId: "wily-app-dbb3e",
  storageBucket: "wily-app-dbb3e.appspot.com",
  messagingSenderId: "663690779157",
  appId: "1:663690779157:web:fcc0e169b98f8a9c224c1c"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

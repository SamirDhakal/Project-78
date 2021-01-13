import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAgf94K_E50wl_5UyfFLaVo_dMtA0NjUIE",
  authDomain: "book-santa-8add8.firebaseapp.com",
  projectId: "book-santa-8add8",
  storageBucket: "book-santa-8add8.appspot.com",
  messagingSenderId: "811280556237",
  appId: "1:811280556237:web:f66d6adce15304385ec984"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

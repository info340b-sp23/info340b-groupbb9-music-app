import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCOl1uTuGqQDt_n8QqtC2l4Ue4SBgGxGb0",
  authDomain: "beat-buds-cc1b1.firebaseapp.com",
  databaseURL: "https://beat-buds-cc1b1-default-rtdb.firebaseio.com",
  projectId: "beat-buds-cc1b1",
  storageBucket: "beat-buds-cc1b1.appspot.com",
  messagingSenderId: "277774928024",
  appId: "1:277774928024:web:1b2e1e7a4be08bcd9e68ed"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const db = firebase.firestore();

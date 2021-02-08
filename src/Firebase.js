import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCOYnfNDgicw47ggxEsbo_IcQhwpZ2aDmc",
  authDomain: "friends-1f6cc.firebaseapp.com",
  databaseURL: "https://friends-1f6cc.firebaseio.com",
  projectId: "friends-1f6cc",
  storageBucket: "friends-1f6cc.appspot.com",
  messagingSenderId: "439894712446",
  appId: "1:439894712446:web:aee7037faf4e020fda782f",
  measurementId: "G-Y6T2CPDF28"
});

const db = firebaseApp.firestore();

export default db;
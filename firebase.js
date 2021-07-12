 import firebase from "firebase"
 import  "firebase/storage"

 const firebaseConfig = {
  apiKey: "AIzaSyAW7Ns0gdPz2omWWNmdRHwH4pZqkBvnAyg",
  authDomain: "facebook-95bb2.firebaseapp.com",
  projectId: "facebook-95bb2",
  storageBucket: "facebook-95bb2.appspot.com",
  messagingSenderId: "38474343136",
  appId: "1:38474343136:web:246861d849768a61e06685"
};


  const app= !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db= app.firestore();
  const storage=firebase.storage();

  export {db,storage};

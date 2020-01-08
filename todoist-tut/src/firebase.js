import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBEVrYwD0aD0ItArJtDd6_tMe-rZ1mpQ1I",
  authDomain: "todoist-clone-92c09.firebaseapp.com",
  databaseURL: "https://todoist-clone-92c09.firebaseio.com",
  projectId: "todoist-clone-92c09",
  storageBucket: "todoist-clone-92c09.appspot.com",
  messagingSenderId: "238334752981",
  appId: "1:238334752981:web:65d70d24894b74b66eca5c",
  measurementId: "G-GDLMR90VL3"
});

export { firebaseConfig as firebase };

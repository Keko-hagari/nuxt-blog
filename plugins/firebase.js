import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCHIQPW6Xz-DwrEilXnLHpmjokaNGl8XZ8",
    authDomain: "my-blog-69bc3.firebaseapp.com",
    databaseURL: "https://my-blog-69bc3.firebaseio.com",
    projectId: "my-blog-69bc3",
    storageBucket: "my-blog-69bc3.appspot.com",
    messagingSenderId: "993969273689",
    appId: "1:993969273689:web:7fd64f85e1530612186a48",
    measurementId: "G-WEXDGCBLLW"
  });
}

export default firebase;

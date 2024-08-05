import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBC3gpdKI9fG4zitlcQySJtXWvVv8v-xVY",
    authDomain: "react-redux-toolkit-57974.firebaseapp.com",
    projectId: "react-redux-toolkit-57974",
    storageBucket: "react-redux-toolkit-57974.appspot.com",
    messagingSenderId: "1026252384849",
    appId: "1:1026252384849:web:a6502460f090d020e42670"
  };

  const app = initializeApp(firebaseConfig)

  const auth = getAuth(app)

  const db = getFirestore(app)


  export {auth,db}
import * as firebase from "firebase/app";
import "firebase/database";
import 'firebase/storage';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDpsu9N4GdpUWUPwMIA5BkJbcYyfIBTg4o",
    databaseURL: "https://thang-portfolio.firebaseio.com/",
    projectId: "thang-portfolio",
    storageBucket: "thang-portfolio.appspot.com",
    messagingSenderId: "sender-id",
};
firebase.initializeApp(firebaseConfig);
firebase.auth();

const Firebase = {
    database: firebase.database(),
    storageRef: firebase.storage().ref()
};

export default Firebase;
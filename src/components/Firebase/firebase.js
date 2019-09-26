import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDg3tS5vh2rJ2NmsDAJQWhzpLXpsc2UTrQ",
    authDomain: "enwords-4dbad.firebaseapp.com",
    databaseURL: "https://enwords-4dbad.firebaseio.com",
    projectId: "enwords-4dbad",
    storageBucket: "enwords-4dbad.appspot.com",
    messagingSenderId: "240995826226",
    appId: "1:240995826226:web:8a0bb9ce1687d1c806da2b"
}
firebase.initializeApp(config);
export default firebase;

// class Firebase {
//     constructor() {
//         firebase.initializeApp(config)
//     }
// }
// export default Firebase;

// export const todosRef = databaseRef.child("todos")
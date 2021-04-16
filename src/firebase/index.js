import firebase from 'firebase/app';
import 'firebase/firestore';



const app = firebase.initializeApp({
    apiKey: "AIzaSyAXQkEZq40W6RGArCDVqANm4dlYUZZJtHM",
    authDomain: "ecommerce-serendipia.firebaseapp.com",
    projectId: "ecommerce-serendipia",
    storageBucket: "ecommerce-serendipia.appspot.com",
    messagingSenderId: "769903740543",
    appId: "1:769903740543:web:19ed4a353731a82eeb214a"
});

export const getFirebase = () => {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore(app);
}

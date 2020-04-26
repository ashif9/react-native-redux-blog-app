import * as firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyDZvgw6rwtxIYRJrErDyeBmg9AtLyOT7f4",
    authDomain: "blog-app-e8773.firebaseapp.com",
    databaseURL: "https://blog-app-e8773.firebaseio.com",
    projectId: "blog-app-e8773",
    storageBucket: "blog-app-e8773.appspot.com",
    messagingSenderId: "538548410266",
    appId: "1:538548410266:web:9a1b2d150e0834b504cc23",
    measurementId: "G-EBFTMFHW1J"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

// export default firebase
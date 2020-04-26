import * as firebase from "firebase"

var firebaseConfig = {
    apiKey: "YOUR_API",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATA_BASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_API_ID",
    measurementId: "YOUR_ID"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

// export default firebase

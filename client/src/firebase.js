import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQ-rSITmEmdWdeAeabLkmajjYZlW8UMN0",
  authDomain: "tesla-clone-497f5.firebaseapp.com",
  projectId: "tesla-clone-497f5",
  storageBucket: "tesla-clone-497f5.appspot.com",
  messagingSenderId: "389307732532",
  appId: "1:389307732532:web:6f25e700f94a522b06b061"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };

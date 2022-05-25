import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSBiGOqXB1u1wCVVNQTzm2kHqzB8cL-UQ",

  authDomain: "fir-project-c9d6a.firebaseapp.com",

  projectId: "fir-project-c9d6a",

  storageBucket: "fir-project-c9d6a.appspot.com",

  messagingSenderId: "254273831459",

  appId: "1:254273831459:web:4152da3ecff85b8eb2a796",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };

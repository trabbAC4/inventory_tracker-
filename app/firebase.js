// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDpxHSuVYTq1OsmyoauYn0LrMKfjaQB5c",
  authDomain: "inventory-management-app-7d813.firebaseapp.com",
  projectId: "inventory-management-app-7d813",
  storageBucket: "inventory-management-app-7d813.appspot.com",
  messagingSenderId: "633421070438",
  appId: "1:633421070438:web:e6bf66ef150a34c02d6da7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export {app, firebaseConfig}

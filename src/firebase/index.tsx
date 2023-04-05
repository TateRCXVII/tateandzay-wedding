// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxz9nU4eWZ1VK0L6-I7D0AQ9CMu-0PDJ8",
  authDomain: "wedding-rsvp-zate.firebaseapp.com",
  projectId: "wedding-rsvp-zate",
  storageBucket: "wedding-rsvp-zate.appspot.com",
  databaseURL: "https://wedding-rsvp-zate-default-rtdb.firebaseio.com",
  messagingSenderId: "554105169785",
  appId: "1:554105169785:web:4a1b4f51f60cd317a6b1a8",
  measurementId: "G-14VL06ZLNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export const database = getDatabase(app);

export const writeUserData = (userId: string, name: any, email: any, imageUrl: any) => {
  set(ref(database, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl
  });
}


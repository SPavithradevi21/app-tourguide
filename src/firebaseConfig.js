import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; // ✅ Add this line

const firebaseConfig = {
  apiKey: "AIzaSyB992JLPgS78WyPD0CLam9AbFZ306686yE",
  authDomain: "tour-guide-app21.firebaseapp.com",
  projectId: "tour-guide-app21",
  storageBucket: "tour-guide-app21.appspot.com", // ✅ bucket format is usually *.appspot.com
  messagingSenderId: "193729850828",
  appId: "1:193729850828:web:37401462c4a29f68728169",
  measurementId: "G-XQG89XPRQF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app); // ✅ Initialize storage

export { storage }; // ✅ Export it correctly
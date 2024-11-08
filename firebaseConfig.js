import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_WEB_API_KEY,
  authDomain: "native-37316.firebaseapp.com",
  databaseURL: "https://native-37316.europe-west1.firebasedatabase.app",
  projectId: "native-37316",
  storageBucket: "native-37316.appspot.com",
  messagingSenderId: "407015276051",
  appId: "1:407015276051:ios:f1887b70f253a6fcfc49e6",
  measurementId: "G-XRTFSZFXNS",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

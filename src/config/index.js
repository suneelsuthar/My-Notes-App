// initialize auth
// export { auth, db, storage };
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDrZq_y0pU8vetAOW1ahCbg75NuKICCM6c",
  authDomain: "restaurant-fb1bc.firebaseapp.com",
  databaseURL: "https://restaurant-fb1bc-default-rtdb.firebaseio.com",
  projectId: "restaurant-fb1bc",
  storageBucket: "restaurant-fb1bc.appspot.com",
  messagingSenderId: "160807831200",
  appId: "1:160807831200:web:02efeae18f8f8e3456abc5",
};

// initialize firebase
initializeApp(firebaseConfig);
const storage = getStorage();

// initialize auth
// const auth = getAuth();

export { storage };

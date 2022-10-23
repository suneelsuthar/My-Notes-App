// initialize auth
// export { auth, db, storage };
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
 
};

// initialize firebase
initializeApp(firebaseConfig);
const storage = getStorage();

// initialize auth
// const auth = getAuth();

export { storage };

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyD8XW0B7Sbgw1yCcusGGLAEdbgNav7Xyk4",
  authDomain: "volunteer-4521d.firebaseapp.com",
  projectId: "volunteer-4521d",
  storageBucket: "volunteer-4521d.appspot.com",
  messagingSenderId: "416661504885",
  appId: "1:416661504885:web:f3ea29b00e276cad63093c",
  measurementId: "G-YCGW0HGY69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
export default auth ;
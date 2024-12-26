import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc, setDoc   } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDk2znYtmg1sujNhgCoZLpCNe4W1_nBr24",
  authDomain: "majesticer-api-data.firebaseapp.com",
  projectId: "majesticer-api-data",
  storageBucket: "majesticer-api-data.firebasestorage.app",
  messagingSenderId: "421041101621",
  appId: "1:421041101621:web:bc280eba8a5d8934538a7c",
  measurementId: "G-VE7H22NK0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function callRequest(){
    const docRef = doc(collection(db, 'apiCall'), 'number');
    
    const docSnap = await getDoc(docRef);
    const callValue = docSnap.data().value + 1;

    const data = {
      'value':callValue
    }
    await setDoc(docRef, data);

} 

export async function pureCallRequest(){
  const docRef = doc(collection(db, 'apiCall'), 'number');
  
  const docSnap = await getDoc(docRef);
  const callValue = docSnap.data().value;
  console.log(callValue);

  return callValue
} 
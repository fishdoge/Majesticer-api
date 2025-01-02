import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc, setDoc  } from 'firebase/firestore';
import dotenv from 'dotenv';

dotenv.config();


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);

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
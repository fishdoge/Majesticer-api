import { db } from '@/lib/firebaseConfig'
import { collection, query, getDocs } from 'firebase/firestore';
//import { callRequest } from '@/lib/firebaseConfig.js'

export async function callSuiHistoricalData(){

  const queryData = []
  const q = query(collection(db, "suiDataCatch"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    queryData.push(doc.data())

  });

  return queryData;

}


export default async function handler(req, res) {

  //await callRequest()
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
  const suiPriceInString = await callSuiHistoricalData()
  res.send(suiPriceInString);

}
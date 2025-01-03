import { suiPrice } from '../../components/price/deepbook.ts'
import { callRequest } from '@/lib/firebaseConfig.js'

export default async function handler(req, res) {
    await callRequest()
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
    const suiPriceInString = await suiPrice()
    console.log(suiPriceInString)
    res.send(suiPriceInString);

}
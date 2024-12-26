import { suiPriceInNumber } from '../../components/price/deepbook.ts'
import { callRequest } from './NumberOfRequests.js'  

export default async function handler(req, res) {
    callRequest()
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
    const suiPrice = await suiPriceInNumber()
    console.log(suiPrice)
    res.send(suiPrice);

}
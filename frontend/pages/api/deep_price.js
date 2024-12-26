import { preSwapDeep } from '../../components/price/deepbook.ts'
import { callRequest } from './NumberOfRequests.js'  
export default async function handler(req, res) {
    callRequest()
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
    const suiPriceInString = await preSwapDeep()
    console.log(suiPriceInString)
    res.send(suiPriceInString);

}
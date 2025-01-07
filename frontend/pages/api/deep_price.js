import { preSwapDeep } from '../../components/price/deepbook.ts'
//import { callRequest } from '@/lib/firebaseConfig.js'

export default async function handler(req, res) {
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');

    //await callRequest()
    const suiPriceInString = await preSwapDeep()
    console.log(suiPriceInString)
    res.send(suiPriceInString);

}
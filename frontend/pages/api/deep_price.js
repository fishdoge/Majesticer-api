import { preSwapDeep } from '../../components/price/deepbook.ts'

export default async function handler(req, res) {
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
    const suiPriceInString = await preSwapDeep()
    console.log(suiPriceInString)
    res.send(suiPriceInString);

}
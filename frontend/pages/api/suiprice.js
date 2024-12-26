import { suiPrice } from '../deepbook.ts'

export default async function handler(req, res) {

    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
    const suiPriceInString = await suiPrice()
    console.log(suiPriceInString)
    res.send(suiPriceInString);

}
import { pureCallRequest } from '@/lib/firebaseConfig.js'

export default async function handler(req, res) {

    const callValue = await pureCallRequest();

    console.log(callValue)
    res.send(callValue);

}
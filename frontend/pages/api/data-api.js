//import { callRequest } from './numberOfRequests.js'

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');

    //const callVAlue = await callRequest();
    res.send('test');

}
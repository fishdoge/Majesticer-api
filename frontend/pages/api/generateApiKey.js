import crypto from "crypto";


export async function generateApiKey() {
    const { length, encoding } = { length: 32, encoding: "base64"};
    const key = crypto.randomBytes(length).toString(encoding);
    const apiKeyFinal = 'majesticerkey_'+key
    return apiKeyFinal
}



export default async function handler(req, res) {
    const apiKey = await generateApiKey()
    res.send(apiKey);
}
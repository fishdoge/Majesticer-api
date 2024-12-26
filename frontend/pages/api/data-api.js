

export default async function handler(req, res) {

    res.setHeader('Access-Control-Allow-Origin', 'https://www.pudding.one/');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
    res.setHeader('Access-Control-Allow-Origin', 'https://fortune-tell-web.vercel.app/');


    const date = Date.now();
    const dataToday = new Date(date);
    const enterMessage = `今天是日期是${dataToday}`
    console.log(enterMessage)
    res.send(enterMessage.toString());

}
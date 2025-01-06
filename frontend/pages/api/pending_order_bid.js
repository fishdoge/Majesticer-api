import { queryOrder } from '../../components/price/deepbookOrder.ts'
//import { callRequest } from '@/lib/firebaseConfig.js'

export default async function handler(req, res) {
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
    //await callRequest()
    console.log(req.query)
    try {
        // 檢查請求方法是否為 GET 或 POST
        if (req.method !== 'GET' && req.method !== 'POST') {
            res.status(405).json({ error: 'Method not allowed' });
            return;
        }

        // 從請求中獲取參數 (GET 或 POST 支援)
        const { list } = req.query;
        
        // 檢查 volume 是否為有效的數字
        if (!list) {
            res.status(400).json({ error: 'Invalid or missing "list" parameter' });
            return;
        }

        // 調用 queryOrder 函數並傳入參數
        const suiOrder = await queryOrder(true,Number(list));

        // 返回結果
        res.status(200).json(suiOrder);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
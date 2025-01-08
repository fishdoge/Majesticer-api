import axios from 'axios';
import axiosRetry from 'axios-retry';
import dotenv from 'dotenv';

dotenv.config();

// 啟用重試機制
axiosRetry(axios, {
    retries: 3, // 最大重試次數
    retryDelay: (retryCount) => {
      console.log(`Retry attempt: ${retryCount}`);
      return retryCount * 1000; // 每次重試延遲時間
    },
    retryCondition: (error) => {
      return error.response?.status === 429 || error.code === 'ECONNABORTED';
    },
});


async function getTransactions() {

  const url = 'https://api.blockberry.one/sui/v1/widgets/total-transactions?period=DAY&size=SMALL';
  const headers = {
    accept: '*/*',
    'x-api-key': process.env.NEXT_PUBLIC_BLOCKBERRY, // 請填入你的 API 金鑰
  };

  try {
    const response = await axios.get(url, { headers });
    console.log(response.data.changeValue); // Axios 返回的數據在 `data` 屬性中

    return response.data.changeValue
  } catch(e) {
    console.log(e)
    return 0
  }
}



export default async function handler(req, res) {

    const blockdata = await getTransactions()
    console.log(blockdata)
    res.send(blockdata);

}
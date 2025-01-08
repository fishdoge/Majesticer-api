import axios from 'axios';
import axiosRetry from 'axios-retry';

// 啟用重試機制
axiosRetry(axios, {
  retries: 3, // 最大重試次數
  retryDelay: (retryCount) => {
    console.log(`Retry attempt: ${retryCount}`);
    return retryCount * 1000; // 每次重試延遲時間
  },
  retryCondition: (error) => {
    // 只有在以下條件下才重試
    return error.response?.status === 500 || error.code === 'ECONNABORTED';
  },
});

export async function getTransaction() {
  const url = 'https://api.blockberry.one/sui/v1/widgets/total-transactions?period=DAY&size=SMALL';
  const headers = {
    accept: '*/*',
    'x-api-key': 'gb9KEFhfHP2EaOf5YFL8pUHFc25HF1', // 請填入你的 API 金鑰
  };

  try {
    const response = await axios.get(url, { headers });
    console.log(response.data.changeValue); // Axios 返回的數據在 `data` 屬性中

    return response.data.changeValue
  } catch (error) {
    console.error('Error fetching transactions:', error.message);
  }
}

getTransaction()

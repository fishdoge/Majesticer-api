import axios from 'axios';
const sui_tvl = 'https://api.llama.fi/v2/historicalChainTvl/sui';


export async function fetchTvl() {

    try {
        const response = await axios.get(sui_tvl);
        const data = response.data
        const info = data[data.length-1];

        console.log(Math.round(info.tvl))
        return Math.round(info.tvl);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}


import axios from 'axios';
const sui_tvl = 'https://api.llama.fi/v2/historicalChainTvl/sui';


async function fetchUsers() {

    try {
        const response = await axios.get(sui_tvl);
        const data = response.data
        const info = data[data.length-1];
        console.log(info)
        return Math.round(info.tvl);
    } catch (error) {
        console.log(error)
        return 0
    }
}

fetchUsers()

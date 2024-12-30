import axios from 'axios';

const array = ['sui_price','deep_price']

async function fetchUsers() {

    for(let a= 0;a<1200;a++){
        array.forEach(async(index)=>{
            console.log(index);
            try {
                const response = await axios.get(`https://www.majesticer.xyz/api/${index}`);
                console.log('GET Response:', response.data);
                return response.data;
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        })
    }

}

fetchUsers()

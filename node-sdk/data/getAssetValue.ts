
import { getFullnodeUrl, SuiClient} from '@mysten/sui/client';

// use getFullnodeUrl to define Devnet RPC location
const rpcUrl = getFullnodeUrl('mainnet');


// create a client connected to devnet
const client = new SuiClient({ url: rpcUrl });

async function getAssetValue(address:string) {
    
}

async function getAllCoinObject() {
    try {
      const currentEpoch = await client.getAllBalances({owner:'0xff9a1e70f9287d6681cbc25dd4061fc478af2fee7b6bf16f6361b6a600644aa9'});
      console.log(currentEpoch);

      console.log(currentEpoch.length)
    } catch (error) {
      console.error('Error fetching current epoch:', error);
    }
}

async function getAllOenObject() {
    
    try {
      const currentEpoch = await client.getOwnedObjects({owner:'0xff9a1e70f9287d6681cbc25dd4061fc478af2fee7b6bf16f6361b6a600644aa9'});
      currentEpoch.data.forEach((element) => {
        console.log(element)
      });

      
    } catch (error) {
      console.error('Error fetching current epoch:', error);
    }
}

getAllCoinObject()
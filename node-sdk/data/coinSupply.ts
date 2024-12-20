import { getFullnodeUrl, SuiClient,CoinSupply } from '@mysten/sui/client';

// use getFullnodeUrl to define Devnet RPC location
const rpcUrl = getFullnodeUrl('mainnet');

const address = '0x526b031f8607fa3b751d9004992df2cb3e850899f294ea039fbc93e843e75a16'

// create a client connected to devnet
const client = new SuiClient({ url: rpcUrl });

async function getBalance(){
    const balance = await client.getBalance({ owner: address });

    console.log(balance);
}

getBalance()
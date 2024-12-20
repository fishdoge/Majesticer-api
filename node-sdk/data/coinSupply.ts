import { getFullnodeUrl, SuiClient,CoinSupply, GetCoinMetadataParams, GetCoinsParams, PaginatedCoins } from '@mysten/sui/client';

// use getFullnodeUrl to define Devnet RPC location
const rpcUrl = getFullnodeUrl('mainnet');

const address = '0x526b031f8607fa3b751d9004992df2cb3e850899f294ea039fbc93e843e75a16'

// create a client connected to devnet
const client = new SuiClient({ url: rpcUrl });

async function getBalance(){
    const balance = await client.getBalance({ owner: address });

    console.log(balance);
}

async function name(user: any) {
    const balance = await client.getCoins({ owner: user })

    console.log(balance)
}

async function fetchObjectIngo() {
    //const clienttest = new SuiClient({ url: 'https://fullnode.devnet.sui.io' });
    try {
      const currentEpoch = await client.getObject({id:'0x188d3060ad8ede6429f06460d4736c6f0d714fcd55e736e5f6c65f2bf8c2207c'});
      console.log(currentEpoch);
    } catch (error) {
      console.error('Error fetching current epoch:', error);
    }
  }

  async function test2() {
   
    try {
      const currentEpoch = await client.getTotalSupply({ coinType:'0xfe3afec26c59e874f3c1d60b8203cb3852d2bb2aa415df9548b8d688e6683f93::alpha::ALPHA'});
      console.log(currentEpoch);
    } catch (error) {
      console.error('Error fetching current epoch:', error);
    }
  }

async function test3() {
   
    try {
      const currentEpoch = await client.getValidatorsApy();
      console.log(currentEpoch);
    } catch (error) {
      console.error('Error fetching current epoch:', error);
    }
}



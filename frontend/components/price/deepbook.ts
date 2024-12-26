import { Transaction } from "@mysten/sui/transactions";
import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import { bcs } from "@mysten/sui/bcs";

const POOL =
  "0xe05dafb5133bcffb8d59f4e12465dc0e9faeaa05e3e342a08fe135800e3e4407"; // sui_usdc
const MOCK_SENDER =
  "0xfb58f3db6e97678ecbe3f3f9fa2a5f5f4f16cca39a5987aaede60df468c59661";
const USDC =
  "0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7::usdc::USDC";

async function preSwapSui() {
  const rpcUrl = getFullnodeUrl("mainnet");
  const client = new SuiClient({ url: rpcUrl });

  const tx = new Transaction();

  // Swap SUI -> USDC
  tx.moveCall({
    target:
      "0x2c8d603bc51326b8c13cef9dd07031a408a48dddb541963357661df5d3204809::pool::get_quote_quantity_out",
    typeArguments: ["0x2::sui::SUI", USDC],
    arguments: [tx.object(POOL), tx.pure.u64(1_000_000_000), tx.object.clock],
  });

  try {
    const res = await client.devInspectTransactionBlock({
      sender: MOCK_SENDER,
      transactionBlock: tx,
    });

    const baseOut = Number(
      bcs.U64.parse(new Uint8Array(res.results![0].returnValues![0][0]))
    );
    const quoteOut = Number(
      bcs.U64.parse(new Uint8Array(res.results![0].returnValues![1][0]))
    );
    const deepRequired = Number(
      bcs.U64.parse(new Uint8Array(res.results![0].returnValues![2][0]))
    );

    const suiPrize = decimals(baseOut, quoteOut, deepRequired,1e11);

    console.log(suiPrize);

    return suiPrize;
  } catch (e) {
    console.log(e);
  }
}


const DeepPool = '0xf948981b806057580f91622417534f491da5f61aeaf33d0ed8e69fd5691c95ce'

export async function preSwapDeep():Promise<number> {
  const rpcUrl = getFullnodeUrl("mainnet");
  const client = new SuiClient({ url: rpcUrl });

  const tx = new Transaction();

  // Swap Deep -> USDC
  tx.moveCall({
    target:
      "0x2c8d603bc51326b8c13cef9dd07031a408a48dddb541963357661df5d3204809::pool::get_quote_quantity_out",
    typeArguments: ["0xdeeb7a4662eec9f2f3def03fb937a663dddaa2e215b8078a284d026b7946c270::deep::DEEP", USDC],
    arguments: [tx.object(DeepPool), tx.pure.u64(1_000_000_000), tx.object.clock],
  });

  try {
    const res = await client.devInspectTransactionBlock({
      sender: '0x8cf2285fb2ae4a5dd23a0fd28dbd129917fcd59b04f6272ff2b5eb358349e5f2',
      transactionBlock: tx,
    });

    const baseOut = Number(
      bcs.U64.parse(new Uint8Array(res.results![0].returnValues![0][0]))
    );
    const quoteOut = Number(
      bcs.U64.parse(new Uint8Array(res.results![0].returnValues![1][0]))
    );
    const deepRequired = Number(
      bcs.U64.parse(new Uint8Array(res.results![0].returnValues![2][0]))
    );

    const deepPrize: number | undefined = decimals(baseOut, quoteOut, deepRequired, 1e14);

    if (deepPrize === undefined) {
      return 0; // 確保返回值為數字
    }
  
    return deepPrize; // deepPrize 一定是 number
  } catch (e) {
    console.log(e);
    return 0
  }
}

export async function suiPrice():Promise<string>{
  const suiPrice:number | undefined =  await preSwapSui()
  if(suiPrice == undefined){
    return '0'
  }
  return suiPrice?.toString().substr(0, 5)
}

export async function suiPriceInNumber():Promise<number>{
  const suiPrice:number | undefined =  await preSwapSui()
  const suiFixPrice:number | undefined  = Number(suiPrice?.toFixed(4))
  if(suiFixPrice == undefined){
    return 0
  }
  return suiFixPrice;
}


function decimals(baseOut:number,quoteOut:number,deepRequired:number,dec:number){
  const decimalValue = baseOut * 1e10 + quoteOut * 1e5 + deepRequired;
  const value =  decimalValue/dec;
  return value;
}


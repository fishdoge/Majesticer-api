import { Transaction } from "@mysten/sui/transactions";
import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import { bcs } from "@mysten/sui/bcs";
import { Order } from "./types";

const POOL =
  "0xe05dafb5133bcffb8d59f4e12465dc0e9faeaa05e3e342a08fe135800e3e4407"; // sui_usdc
const MOCK_SENDER =
  "0xfb58f3db6e97678ecbe3f3f9fa2a5f5f4f16cca39a5987aaede60df468c59661";
const USDC = 
  "0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7::usdc::USDC";


export async function queryOrder(isBid: boolean,list:number) {
    const rpcUrl = getFullnodeUrl("mainnet");
    const client = new SuiClient({ url: rpcUrl });
  
    const tx = new Transaction();
    
    const [orderPage] = tx.moveCall({
      target:
        "0x2c8d603bc51326b8c13cef9dd07031a408a48dddb541963357661df5d3204809::order_query::iter_orders",
      typeArguments: ["0x2::sui::SUI", USDC],
      arguments: [
        tx.object(POOL),
        tx.pure.option("u128", null),
        tx.pure.option("u128", null),
        tx.pure.option("u64", null),
        tx.pure.u64(list),
        tx.pure.bool(isBid),
      ],
    });
  
    tx.moveCall({
      target:
        "0x2c8d603bc51326b8c13cef9dd07031a408a48dddb541963357661df5d3204809::order_query::orders",
      typeArguments: [],
      arguments: [orderPage],
    });
  
    try {
        const res = await client.devInspectTransactionBlock({
            sender: MOCK_SENDER,
            transactionBlock: tx,
        });
  
        const orders = bcs
            .vector(Order)
            .parse(new Uint8Array(res.results![1].returnValues![0][0]));

        const dataInfo: (string | number)[][] = [];
  
        orders.forEach((order) => {
            console.log("Quantity: ", order.quantity);
            const { price } = decodeOrderId(BigInt(order.order_id));
            console.log("Price: ", price);

            dataInfo.push([order.quantity,Number(price)])
        });

        console.log(dataInfo)

        return dataInfo;
    } catch (e) {
        console.error(e);
    }
}


function decodeOrderId(encodedOrderId: bigint): {
    isBid: boolean;
    price: bigint;
    orderId: bigint;
} {
    const isBid = encodedOrderId >> BigInt(127) === BigInt(0);
    const price =
      (encodedOrderId >> BigInt(64)) & ((BigInt(1) << BigInt(63)) - BigInt(1));
    const orderId = encodedOrderId & ((BigInt(1) << BigInt(64)) - BigInt(1));
  
    return { isBid, price, orderId };
}
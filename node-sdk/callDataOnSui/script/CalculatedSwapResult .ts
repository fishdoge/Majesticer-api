import { SuiClient } from '@mysten/sui/client';
import { Transaction } from "@mysten/sui/transactions";
import { bytesToUint64 } from './bytesToU64'//帶入decode轉換

const suiClient = new SuiClient({ url: 'https://fullnode.main.sui.io' });

const cetusPricePool = '0x3a5aa90ffa33d09100d7b69410x3a5aa90ffa33d09100d7b6941ea1c0ffe6ab66e77062ddd26320c1b073aabb10::router::swap'

const poolConfig = {
    GLOBAL_CONFIG :"0xdaa46292632c3c4d8f31f23ea0f9b36a28ff3677e9684980e4438403a67a3d8f",
    POOL : "0xb2c4bca4e375c31638a5379aabe2e846e2e286c47bc5960acbcc49ac46d2f5c3",
    PARTNER : "0x639b5e433da31739e800cd085f356e64cae222966d0f1b11bd9dc76b322ff58b",
    CLOCK : "0x0000000000000000000000000000000000000000000000000000000000000006"
}


async function callContractFunction() {
    try {
        
        const tx = new Transaction();

        
        tx.moveCall({
            target: cetusPricePool,
            arguments:[tx.pure.u64(200)],
        });

        // 取得鏈上資訊
        const result = await suiClient.devInspectTransactionBlock({
            transactionBlock: tx,
            sender: '0xa527021ed9bc4f362e299eabb7ce4f7b4670b1417500a13060269a817a013b94',
        });

        console.log('Function Result:', result);

        const firstReturnValues = result.results?.[0]?.returnValues || [];
        console.log('undecode value',firstReturnValues[0][0])

        const trueValue = bytesToUint64(firstReturnValues[0][0]);

        console.log('true value :',trueValue)
    } catch (error) {
        console.error('Error calling contract function:', error);
    }
}

callContractFunction();

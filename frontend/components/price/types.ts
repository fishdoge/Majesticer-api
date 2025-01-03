import { bcs } from "@mysten/sui/bcs";
import { fromHex, toHex } from "@mysten/sui/utils";

const ID = bcs.fixedArray(32, bcs.u8()).transform({
  input: (id: string) => fromHex(id),
  output: (id) => toHex(Uint8Array.from(id)),
});

const OrderDeepPrice = bcs.struct("OrderDeepPrice", {
  asset_is_base: bcs.bool(),
  deep_per_asset: bcs.u64(),
});

//! Original Move code
// public struct Order has store, drop {
//     balance_manager_id: ID,
//     order_id: u128,
//     client_order_id: u64,
//     quantity: u64,
//     filled_quantity: u64,
//     fee_is_deep: bool,
//     order_deep_price: OrderDeepPrice,
//     epoch: u64,
//     status: u8,
//     expire_timestamp: u64,
// }

export const Order = bcs.struct("Order", {
  balance_manager_id: ID,
  order_id: bcs.u128(),
  client_order_id: bcs.u64(),
  quantity: bcs.u64(),
  filled_quantity: bcs.u64(),
  fee_is_deep: bcs.bool(),
  order_deep_price: OrderDeepPrice,
  epoch: bcs.u64(),
  status: bcs.u8(),
  expire_timestamp: bcs.u64(),
});

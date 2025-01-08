import crypto from "crypto";


// 預設選項
const defaultOptions = {
    length: 32, // 預設生成 32 字元長度的 Key
    encoding: "hex", // 預設使用 Hex 編碼
};

// 生成 API Key 的函數
export function generateApiKey(options) {
    const { length, encoding } = { ...defaultOptions, ...options };

    // 使用 crypto 隨機生成 Key
    const key = crypto.randomBytes(length).toString(encoding);
    const apiKeyFinal = 'majesticerkey_'+key
    return apiKeyFinal
}

// 測試生成 API Key
const apiKey = generateApiKey({ length: 32, encoding: "base64" });
console.log("Generated API Key:", apiKey);

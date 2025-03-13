"use client";

import {
  useCurrentAccount,
  useCurrentWallet,
} from "@mysten/dapp-kit";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/components/context/authContext";

export default function SignAndLogin() {
  // const { mutate: signPersonalMessage } = useSignPersonalMessage();
  const currentAccount = useCurrentAccount();
  const { connectionStatus } = useCurrentWallet();
  const { login, logout } = useContext(AuthContext);

  useEffect(() => {
    const checkLogin = async () => {
      if (connectionStatus == "connected" && currentAccount?.address) {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api-keys`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              walletAddress: currentAccount.address,
            }),
          });

          if (!response.ok) {
            throw new Error("Failed to generate API key");
          }

          const { apiKey, walletAddress } = await response.json();

          login({
            name: walletAddress,
            apiKey: apiKey,
          });

          console.log("API Key generated successfully");
        } catch (error) {
          console.error("Error generating API key:", error);
        }
      } else if (connectionStatus == "disconnected") {
        logout();
      }
    };

    checkLogin();
  }, [connectionStatus, currentAccount]);

  return (
    <div style={{ padding: 10 }}>
      {/* {currentAccount && (
				<>
					<button className='bg-white text-blue font-bold py-1 px-2 rounded'
						onClick={() => {
							signPersonalMessage(
								{
									message: new TextEncoder().encode(message),
								},
								{
									onSuccess: (result) => setSignature(result.signature),
								},
							);
						}}
					>
						Sign message
					</button>
					<div className='text-white'>Signature: {signature.substring(0,15)}</div>
				</>
			)} */}
    </div>
  );
}

"use client"

import { useCurrentAccount, useSignPersonalMessage,useCurrentWallet } from '@mysten/dapp-kit';
import { useContext, useEffect } from 'react';
import { AuthContext } from '@/components/context/authContext';

export default function SignAndLogin() {
	const { mutate: signPersonalMessage } = useSignPersonalMessage();
	const currentAccount = useCurrentAccount();
	const { connectionStatus } = useCurrentWallet();

	const {user, login, logout } = useContext(AuthContext);
	const message = 'Majesticer API login';

	// async function loginCheck(signInfo:any):Promise<boolean> {
	// 	try {
	// 		const url = 'https://example.com/api/data';
	// 		const data = {
	// 		  username: currentAccount?.address,
	// 		  password: signInfo,
	// 		};
		
	// 		const config = {
	// 		  headers: {
	// 			'Content-Type': 'application/json',
	// 			Authorization: 'Bearer your_token_here',
	// 		  },
	// 		};
		
	// 		const response = await axios.post(url, data, config);
		
	// 		console.log('Response:', response.data);

	// 		return true
	// 	  } catch (error) {
	// 		console.error('Error:', error);
	// 		return false
	// 	  }
	// }

	useEffect(()=>{

		const checkLogin =async()=>{
			if(connectionStatus == 'connected'){
				login({ name: currentAccount?.address })

				const signInfo = signPersonalMessage(
					{
						message: new TextEncoder().encode(message),
					},
					{
						onSuccess: (result) => {return result},
					},
				);

				console.log(signInfo)
				
				console.log(user)
			}else if(connectionStatus == 'disconnected'){
				logout()
			}
		}

		checkLogin()

	},[connectionStatus])

    

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
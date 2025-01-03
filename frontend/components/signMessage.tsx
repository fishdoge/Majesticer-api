"use client"

import { useCurrentAccount, useSignPersonalMessage } from '@mysten/dapp-kit';
import { useState } from 'react';

export default function SignAndLogin() {
	const { mutate: signPersonalMessage } = useSignPersonalMessage();
	const [signature, setSignature] = useState('');
	const currentAccount = useCurrentAccount();

    const message = 'Majesticer,login';

	return (
		<div style={{ padding: 10 }}>
			{currentAccount && (
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
			)}
		</div>
	);
}
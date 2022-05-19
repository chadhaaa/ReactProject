import React, { useEffect, useState } from 'react';
import { useParams ,  Navigate} from 'react-router-dom';
import { getInvitationData } from '../services/invitation';

export default function Inviration() {
	const { invitationToken } = useParams();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(async () => {
		if (isLoading) {
            
            const res = await getInvitationData(invitationToken);
            console.log(res);
            if(!res.data){
                Navigate('/error');
            }
            setIsLoading(false);;
            

            return <Navigate to="/error" error="invitation link not working "/>;
        }
            
		// send request to verify invitation token in the backend !
		// get the email and the data of the user from the backend and store it in the local storage
		// redirect to the home page
	}, [isLoading]);
	return (
		<div className='relative w-full'>
			<div>
				<h1>You have been invited by coach : {}</h1>
			</div>
			<div>
				<form className='w-full max-w-lg mx-auto'>
					<div className='flex flex-wrap -mx-3 mb-6'>
						<div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='grid-first-name'>
								First Name
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-first-name'
								type='text'
								placeholder='Jane'
							/>
						</div>
						<div className='w-full md:w-1/2 px-3'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='grid-last-name'>
								Last Name
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-last-name'
								type='text'
								placeholder='Doe'
							/>
						</div>
					</div>
					<div className='flex flex-wrap -mx-3 mb-6'>
						<div className='w-full px-3'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='grid-password'>
								Password
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-password'
								type='password'
								placeholder='******************'
							/>
						</div>
					</div>

					<div className='flex flex-wrap -mx-3 mb-2'>
						<div className='w-full px-3'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='grid-password'>
								Confirm Password
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-password'
								type='password'
								placeholder='******************'
							/>
						</div>
					</div>
					<div className='flex flex-wrap -mx-3 mb-2'>
						<div className='w-full px-3'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='grid-password'>
								Email
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-password'
								type='password'
								placeholder='******************'
							/>
						</div>
					</div>
					<div className='flex flex-wrap -mx-3 mb-2'>
						<div className='w-full px-3'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='grid-password'>
								Phone
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-password'
								type='password'
								placeholder='******************'
							/>
						</div>
					</div>
					<div className='flex flex-wrap -mx-3 mb-2'>
						<div className='w-full px-3'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='grid-password'>
								Address
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-password'
								type='password'
								placeholder='******************'
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

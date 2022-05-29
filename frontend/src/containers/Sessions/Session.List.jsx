import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {toast } from 'react-toastify';

export default function SessionList({ sessions }) {
	
	return (
		<div className='shadow-md sm:rounded-lg overflow-x-scroll mx-4 min-h-[400px]'>
			<table className='text-sm text-left text-gray-500 dark:text-gray-400 mx-5'>
				<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 '>
					<tr className=''>
						<th>session id</th>
						<th>day</th>
						<th>hour</th>
						<th>canceleation</th>
						<th>reason</th>
						<th>feedback</th>
						<th>Coach</th>
						<th>Player</th>
						<th>Place</th>
						<th>Program</th>
						<th>
                            VIEW
                        </th>
					</tr>
				</thead>
				<tbody>
					{sessions && sessions?.length === 0 ? (
						<tr>
							<td>
								<h2>No data</h2>
							</td>
						</tr>
					) : (
						sessions.map((session) => (
							<tr
								className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 overflow-x-auto'
								key={session._id}>
								<td>{session._id}</td>
								<td>{session.day}</td>
								<td>{session.hour}</td>
								<td>{session.cancellation}</td>
								<td>{session.reason}</td>
								<td>{session.feedback}</td>
                                <td>{session.idCoach}</td>
                                <td>{session.idPlayer}</td>
                                <td>{session.idPlace}</td>
                                <td>{session.programId}</td>

									<td className='px-6 py-4 text-right'>
										<Link
											to={`/session/${session._id}`}
											    className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
											See
										</Link>
									</td>
							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
	);
}

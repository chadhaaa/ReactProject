import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {toast } from 'react-toastify';
import { deleteProgramById } from '../../services/program';
export default function ProgramList({ programs,setIsLoading }) {
	const handleDelete = async (id) => {
        await deleteProgramById(id);
        toast.error(`Program with id : ${id} Deleted `, { position: toast.POSITION.TOP_RIGHT });
        setIsLoading(true);
	};
	return (
		<div className='mx-10 relative overflow-x-auto shadow-md sm:rounded-lg'>
			<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
				<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
					<tr className='table-row'>
						{programs && programs?.length === 0 ? (
							<th>no data</th>
						) : (
							Object.keys(programs[0]).map((key) => (
								<th className='px-6 py-3' key={key}>
									{key}
								</th>
							))
						)}
						<th scope='col' className='px-6 py-3'>
							<span >Edit</span>
						</th>
						<th scope='col' className='px-6 py-3'>
							<span >delete</span>
						</th>
					</tr>
				</thead>
				<tbody>
					{programs && programs?.length === 0 ? (
						<tr>
							<td>
								<h1>No data</h1>
							</td>
						</tr>
					) : (
						programs.map((program) => (
							<tr
								className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
								key={program._id}>
								<td>{program._id}</td>
								<td>{program.title}</td>
								<td>{program.link}</td>
								<td>{program.description}</td>
								<td>{program.picture}</td>
									<td className='px-6 py-4 text-right'>
										<Link
											to={`/program/${program._id}/edit`}
											className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
											Edit
										</Link>
									</td>
									<td className='px-6 py-4 text-right'>
										<button
											className='font-medium text-red-600 dark:text-red-500 hover:underline'
											onClick={() => {
												handleDelete(program._id);
											}}>
											Delete
										</button>
									</td>

							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
	);
}

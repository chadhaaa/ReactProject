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
		<div className='overflow-x-scroll  w-full shadow-md sm:rounded-lg'>
			<table className='w-full  left-0 text-sm text-left text-gray-500 dark:text-gray-400'>
				<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
					<tr className='table-row'>
						{ programs && programs.length === 0 ? (
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
								<h2>No data</h2>
							</td>
						</tr>
					) : (
						programs.map((program,index) => (
							<tr
								className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
								key={program._id}>
								<td>{program._id}</td>
								<td>{program.title}</td>
								<td>{program.link}</td>
								<td>{program.description}</td>
								<td>{program.picture}</td>
								<td>{program.__V}</td>
									<td className='px-6 py-4 text-right'>
										<Link
											to={`/program/edit/${program._id}`}
											className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
											Edit
										</Link>
									</td>
									<td className='px-6 py-4 text-right'>
										<button
											className='font-medium text-red-600 dark:text-red-500 hover:underline'
											onClick={() => {
												handleDelete(program._id);
											}}
											data-idtest={ index === programs.length - 1 ? "lastAddedelement" : ""}
											>
											
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

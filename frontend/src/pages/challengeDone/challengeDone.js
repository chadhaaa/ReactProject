import axios from 'axios'
import { useEffect, useState } from 'react'


const GetChallenges = () => {
	const [challenges, setChallenges] = useState([])
	useEffect(() => {
		getChallenges()
	}, [])

	const getChallenges = async () => {
		const response = await axios.get('http://localhost:8000/api/challenges')
		setChallenges(response.data)
	}

    const setDone = async (id) =>{
        const doneToSend={
            done: true
        }
        const response = await axios.put(`http://localhost:8000/api/challenge/${id}`,doneToSend)



    }
	return (
		<table>
			<caption>Challenge List</caption>
			{challenges.map(function (challenge) {
                console.log(challenge)
				return (
					<table>
                        <tr>
                            <th scope='col'>Link</th>
                            <th scope='col'>Goal</th>
                            <th scope='col'>Done</th>
                        </tr>
						<tr>
                            <td>{challenge.link}</td>
                            <td>{challenge.goal}</td>
                            <td>{(challenge.done)? 'Done' : 'On Going'}</td>
                            <td>
                                <button disabled={challenge.done} onClick={() => setDone(challenge._id)}>Done!</button>
                            </td>
						</tr>
					</table>
				)
			})}
		</table>
	)
}
export default GetChallenges
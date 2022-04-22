import axios from 'axios'
import './stat.css'
import { useNavigate } from 'react-router-dom'

export default function Statistic({
	title,
	description,
	link,
	visibility,
	currentState,
	id,
}) {
	const history = useNavigate()

	const deleteStatistic = async (event) => {
		event.preventDefault()
		await axios.delete(`/api/statistic/${id}`)
		history('/addStat')
	}

	function renderActions() {
		return (
			<div className='actions'>
				<button onClick={() => history(`/updateStat/${id}`)}>UPDATE</button>
				<button onClick={deleteStatistic}> DELETE</button>
			</div>
		)
	}

	return (
		<div className='statistic'>
			<div className='title'>
				<ul>
					<li>{title}</li>
					<li>{description}</li>
					<li>{currentState}</li>
					<li>{visibility}</li>
					<li>{link}</li>
				</ul>
			</div>
			{renderActions()}
			<br />
			<button onClick={() => history('/addStat')}> Add New Statistic </button>
		</div>
	)
}

import axios from 'axios'
import { useEffect, useState } from 'react'
//import Profile from './profilePageByCoach'
import { useParams } from 'react-router-dom'



function CoachViewPlayer() {
    const [profile, setProfile] = useState([])
	const [stat, setStat] = useState([])
	const [Comp, setComp] = useState([])
	const [session, setSession] = useState([])
	const [numberSession, setNumberSession] = useState(0)
    const { id } = useParams()

    const weekNumber = (dateToTest)=>{
        var oneJan = new Date(dateToTest.getFullYear(),0,1);
        var numberOfDays = Math.floor((dateToTest - oneJan) / (24 * 60 * 60 * 1000));
        var result = Math.ceil(( dateToTest.getDay() + 1 + numberOfDays) / 7);
        return result
    }

    const getProfile = async () => {
		const response = await axios
			.get(`http://localhost:8000/api/getProfileByCoach/${id}`)
			.then((response) => {
				setProfile(response.data.player)
				setStat(response.data.stats)
				setComp(response.data.comp)
				setSession(response.data.session)
                
			})
            /* const currentDate = new Date();
            console.log(weekNumber(currentDate)) */
           

	}
    const getSessionNumber = (session,numberSession)=>{
        console.log("entered get session number")
        const today = new Date();
        console.log(today)
        
        session.map((item) =>{
            var itemDate = new Date(item.day)
            console.log('date of session' , weekNumber(itemDate) )
             if (weekNumber(itemDate) == weekNumber(today))
            {
                setNumberSession(numberSession + 1)
                console.log(numberSession)
                
            } 
        })
    }

    useEffect(() => {
		getProfile()

        
	}, [])
    useEffect(() => {
        getSessionNumber(session,numberSession)
        
	}, [session])



    return (
		<div className='App'>
			<table>
            <tr>
                    <td>firstname:</td>
                    <td>lastname</td>
                    <td>weight</td>
                    <td>email</td>
                    <td>height</td>
                    <td>tel</td>
                    <td>goal</td>
                    <td>sessions/week</td>
				</tr>
				<tr>
                    <td>{profile.firstName}</td>
                    <td>{profile.lastName}</td>
                    <td>{profile.weight}</td>
                    <td>{profile.email}</td>
                    <td>{profile.height}</td>
                    <td>{profile.phone}</td>
                    <td>{profile.goal}</td>
                    <td>{ numberSession}


                    </td>
					
				</tr>
				<tr>
					<th>{profile.firstName} statistics</th>
                    <td>
                        <tr>
                            <td>
                                <strong> Title</strong>
                            </td>
                        </tr>


                        <tr>
                                <td>
                                    
                                    <strong>Unit</strong>
                                </td>
                        </tr>
                        <tr>

                            <td>
                                
                                <strong>Link</strong>
                            </td>
                        </tr>
                        <tr>

                            <td>
                                <strong>Type</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Min or Max ?</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong> Description</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Current State</strong>
                            </td>
                        </tr>
                    </td>
					
						{stat.map((item, index) => {
								return (
                                    <td>
									<table key={index}>
										<tbody>
											<tr>
												
												<td> {item.statId.title} </td>
											</tr>
											<tr>
											
												<td> {item.statId.unit && item.statId.unit[0].value} </td>
											</tr>
											<tr>
												<td> {item.statId.link} </td>
											</tr>
											<tr>
												<td> {item.statId.type && item.statId.type[0].value} </td>
											</tr>
											<tr>
												
												<td> {item.statId.minMax && item.statId.minMax[0].value} </td>
											</tr>
											<tr>
												<td> {item.statId.description} </td>
											</tr>
											<tr>
												<td> {item.statId.currentState} </td>
											</tr>
										</tbody>
									</table>
                                    </td>
								)
							
						})}
				</tr>
				<tr>
                <th>{profile.firstName} competences</th>
                    <td>
                        <tr>
                            <td>
                                <strong> Name</strong>
                            </td>
                        </tr>


                        <tr>
                                
                            <td>
                                <strong> Description</strong>{' '}
                            </td>
                        </tr>
                        <tr>

                            <td>
                                <strong> Link</strong>
                            </td>
                        </tr>
                        <tr>

                            <td>
                                <strong> Rating</strong>
                            </td>
                        </tr>
                        </td>

						{Comp.map((item, index) => {
							
								return (
                                    <td>
                                        <table key={index}>
                                            <tbody>
                                                <tr>
                                                    
                                                    <td> {item.compId.name} </td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td> {item.compId.description} </td>
                                                </tr>
                                                <tr>
                                                    <td> {item.compId.link} </td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        {item.compId.stars}   
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
								    )
                                })}
                           </tr>
			</table>
		</div>
	)
}

export default CoachViewPlayer;
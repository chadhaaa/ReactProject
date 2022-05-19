import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const FirstLogin = () =>{
    const history = useNavigate()
	const { id } = useParams()

	// DATA TO UPDATE FOR PLAYER BY COACH
    const [discipline, setDiscipline] = useState('')
	const [alertType, setAlertType] = useState([])


    const updateCoachProfile = (event) => {
		// event.preventDefault()

		const formdata = {
			discipline : discipline,
            alerts : alertType,
            new : false,
        }
		axios.put(`http://localhost:8000/api/coachUpdate/${id}`, formdata)
	}



    return (
		<div class='form' encType='multipart/form-data'>
			<div class='title'>Setup new Coach Infos</div>
			<div class='input-container ic1'>
				<input
					id='discipline'
					class='input'
					type='text'
					placeholder=' '
					value={discipline}
					onChange={(e) => setDiscipline(e.target.value)}
				/>
				<div class='cut'></div>
				<label for='Enter new first Name' class='placeholder'>
					Enter your discipline
				</label>
                                            <h3>Select alert types</h3>
                                <ul style={{listStyleType:'none'}}>
                                    
                                    <li style={{textAlign:'left'}}>
                                        <div className="toppings-list-item">
                                            <div className="left-section">
                                            <input
                                                type="checkbox"
                                                id={'alert-1'}
                                                name="number of session not attented"
                                                value="number-session-not-attented"
                                                checked={alertType.includes('number-session-not-attented')}
                                                onChange={(e) =>{
                                                    if(alertType.filter(el => el == e.target.value).length == 0)
                                                     setAlertType(state => [e.target.value, ...state]);
                                                     else setAlertType(alertType.filter(el => el!=e.target.value))
                                                } }
                                                style={{width:'20px',height:'20px',marginTop:'20px'}}
                                            />
                                            <label style={{fontSize:'24px',marginTop:'10px',color:'white'}}>number of session not attented</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li style={{textAlign:'left'}}>
                                        <div className="toppings-list-item">
                                            <div className="left-section">
                                            <input
                                                type="checkbox"
                                                id={'alert-2'}
                                                name="statistic decreased"
                                                value="statistics-decreasing"
                                                checked={alertType.includes('statistics-decreasing')}
                                                onChange={(e) =>{
                                                    if(alertType.filter(el => el == e.target.value).length == 0)
                                                     setAlertType(state => [e.target.value, ...state]);
                                                     else setAlertType(alertType.filter(el => el!=e.target.value))
                                                } }
                                                style={{width:'20px',height:'20px',marginTop:'20px'}}
                                            />
                                            <label style={{fontSize:'24px',marginTop:'10px',color:'white'}}>statistic decreased</label>

                                            </div>
                                        </div>
                                    </li>
                                    <li style={{textAlign:'left'}}>
                                        <div className="toppings-list-item">
                                            <div className="left-section">
                                            <input
                                                type="checkbox"
                                                id={'alert-3'}
                                                name="near objectif"
                                                value="near-objectif"
                                                checked={alertType.includes('near-objectif')}
                                                onChange={(e) =>{
                                                    if(alertType.filter(el => el == e.target.value).length == 0)
                                                     setAlertType(state => [e.target.value, ...state]);
                                                     else setAlertType(alertType.filter(el => el!=e.target.value))
                                                } }
                                                style={{width:'20px',height:'20px',marginTop:'20px'}}
                                            />
                                            <label style={{fontSize:'24px',marginTop:'10px',color:'white'}}>near objectif</label>
                                            </div>
                                        </div>
                                    </li>
                                  
                
                                </ul>
				
				<br />

				<button type='text' class='submit' onClick={() => updateCoachProfile()}>
					Update Coach
				</button>
			</div>

			<br />
		</div>
	)


}
export default FirstLogin
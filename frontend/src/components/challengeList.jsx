import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ChallengeList = () => {

  const [challenges, setChallenges] = useState([]);
  const status = 'DONE';


  const fetchData = () => {

    fetch('http://localhost:8000/api/challenges')
    .then(response => {
        return response.json();
      })
    .then(data => {
        setChallenges(data);
      });

  };


  useEffect(() => {

    fetchData();

  }, []);

  const updateStatus = async (challenge) => (event) => {


		event.preventDefault();

		axios.put(`/api/assignChallengePlayer/${challenge._id}`, status);
		//badel l link hasb eli aandek baad fel code besh temshilou baad update
		history('/');
	};


  return (

    
    <div>

      {challenges.length > 0 && (

        <ul>

          {challenges.map(challenge => (

            <li key={challenge.id}>{challenge.goal} {challenge.link} {challenge.status}
            <button onClick={updateStatus({challenge})}>DONE!</button>
            </li>
            

          ))}

        </ul>

      )}

    </div>

  );

};


export default ChallengeList;
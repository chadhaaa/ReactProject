import React, { useEffect, useState } from 'react';
//import React, { useEffect } from 'react';


const challengeList = () => {

  const [challenges, setChallenges] = useState([]);


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


  return (

    
    <div>

      {challenges.length > 0 && (

        <ul>

          {challenges.map(challenge => (

            <li key={challenge.id}>{challenge.goal} {challenge.link} {challenge.status}</li>
            

          ))}

        </ul>

      )}

    </div>

  );

};


export default challengeList;
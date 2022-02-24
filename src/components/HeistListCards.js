import HeistListJobs from "./HeistListJobs"
import styled from "styled-components";
import {useState} from "react"


function HeistListCards ({name, creator_name, id, heistList, setHeistList, dogList}) {
    
    const [showJobs, setShowJobs] = useState(false)
    const [currentJobs, setCurrentJobs] = useState([])

    const jobsURL = "http://localhost:9292/jobs/"
   
    
    function handleJobsClick() {
        setShowJobs((showJobs) => !showJobs)
        fetch((jobsURL + id))
        .then(resp => resp.json())
        .then(setCurrentJobs)
    };

    let heistJobs = currentJobs.map((job) => <HeistListJobs key={job.id} dog_id={job.dog_id} heist_id={job.heist_id} role={job.role} payout={job.treat_payout} dogList={dogList}/>)
    

    function handleDeleteHeist() {
        fetch(`http://localhost:9292/heists/${id}`, {
            method: "DELETE",
        })
        .then(() => {
            const tempHeists = heistList.filter(heist => heist.id !== id)
            setHeistList(tempHeists)
        })
    };

    return (
        <Cards id = {id} onClick={handleJobsClick}>
            <h1>{name}</h1>
            <h2>by: {creator_name}</h2> 
            {showJobs ? [heistJobs] : null}
            <button id="remove" onClick={handleDeleteHeist}>Delete Evidence</button>
        </Cards>
    )
}

export default HeistListCards;

const Cards = styled.div`
  font-family: "Special Elite", cursive;
  text-align: center;
  padding-bottom: 5em;
//   padding-right:20%;
  h1 {
  }

  h2 {
  }

  button {
    background-color: ;
  }
`;



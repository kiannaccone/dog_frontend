import {useParams} from "react-router-dom"
import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom"
import DogCards from "./DogCards";
import styled from "styled-components";

function DogInfo({setJobList, heistList}) {
       
    const [dogInfo, setDogInfo] = useState([]);
    const [role, setRole] = useState("")
    const [treats, setTreats] = useState("")
    const [heistID, setHeistID] = useState("")
    const [dogID, setDogID] = useState("")

    let history = useHistory()
    const handleSubmitDog = (e) => {
      history.push(`/heistdogs`)
    };
    
    const rolesList = ["The Muscle💪", "The Distraction💥", "The Magician🎩", "The Acrobat🤸", "The Speedster🚗", "The Brains🧠", "The Cutey🤗", "The Smooth Barker😈", "The Inside Dog😎", "The Thief😏", "The Hacker👨‍💻", "The Sniffer👃"]


    const treatValues = [100, 1000, 10000, 100000, 1000000]

    let {id} = useParams();
   
    let dogUrl = "http://localhost:9292/dogs/";
  
    useEffect(() => {
      fetch(dogUrl + id)
        .then((resp) => resp.json())
        .then(setDogInfo);
    }, [id])  

    
     const newJob = {
    role: role,
    treat_payout: treats,
    dog_id: id,
    heist_id: heistID
  }
   
  const [newJobInfo, setNewJobInfo] = useState(newJob)
  
function handleSubmit (e) {
      e.preventDefault();
    fetch('http://localhost:9292/jobs', {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJobInfo),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
          setJobList((currentJobs) => [data, ...currentJobs]);
          setNewJobInfo(newJob);
          // handleSubmitDog()
      })
  };
    
    
  return (
    <div>
      <DogCards dog = {dogInfo}/>
      <Hobby>
      <p>Hobby: {dogInfo.hobby}</p>
      <p>Favorite Michael Scott Quote: "{dogInfo.quote}"</p>
      
      
      <select
            placeholder="Select a Role"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="none">Select an role:</option>
            {rolesList.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <select
             placeholder="Select Treat Payout"
             onChange={(e) => setTreats(e.target.value)}
           >
             <option value="none">Select Treat Payout:</option>
           {treatValues.map((tValue) => (
               <option key={tValue} value={tValue}>
                 {tValue}
               </option>
            ))}
            </select>
            <select
            placeholder="Select a Heist"
            onChange={(e) => setHeistID(e.target.value)}
          >
            <option value="none">Select a Heist:</option>
            {heistList.map((heist) => (
              <option key={heist.id} value={heist.id}>
                {heist.name}
              </option>
            ))}
          </select>
        <button onClick={handleSubmit}>Add to Heist</button>
      </Hobby>
      
    </div>
  );
  // console.log({dog})
}

export default DogInfo;

const Hobby = styled.ul`
  font-family: 'Cutive', serif;
  font-size: 20px;

`


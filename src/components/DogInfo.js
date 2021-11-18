import {useParams} from "react-router-dom"
import React, {useEffect, useState} from 'react';
import DogCards from "./DogCards";
import styled from "styled-components";

function DogInfo() {

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/heistlist";
  };
  
    const [dogInfo, setDogInfo] = useState([]);

    let {id} = useParams();
  
    let dogUrl = "http://localhost:9292/dogs/";
  
    useEffect(() => {
      fetch(dogUrl + id)
        .then((resp) => resp.json())
        .then(setDogInfo);
    }, [id]) 
     

    console.log(id)

    
  return (
    <div>
      <DogCards dog = {dogInfo}/>
      {/* <img src={dogInfo.image} alt={dogInfo.name} /> */}
      {/* <h1>{dogInfo.name}</h1> */}
      <Hobby>
      <p>Hobby: {dogInfo.hobby}</p>
      <p>Favorite Michael Scott: "{dogInfo.quote}"</p>
      <button onClick={handleSubmit}>Add to Heist</button>
      </Hobby>'
      
    </div>
  );
  // console.log({dog})
}

export default DogInfo;

const Hobby = styled.ul`
  font-family: 'Cutive', serif;
  font-size: 20px;

`


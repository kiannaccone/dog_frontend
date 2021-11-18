import {useParams} from "react-router-dom"
import React, {useEffect, useState} from 'react';
import DogCards from "./DogCards";

function DogInfo() {

  // let dog_Url = "http://localhost:9292/dogs/";

  // useEffect(() => {
  //   fetch(dog_Url )
  //     .then((resp) => resp.json())
  //     .then(setDogList);
  // }, []);

  
    const [dogList, setDogList] = useState([]);

    let {id} = useParams();
  
    let dogUrl = "http://localhost:9292/dogs/";
  
    useEffect( setDogList, [id]) 
      fetch(dogUrl + id)
        .then((resp) => resp.json())
        .then(setDogList);

    console.log(id)


  return (
    <div>
      <DogCards dogList = {dogList}/>
      {/* <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>Hobby: {hobby}</p>
      <p>Favorite Michael Scott: {quote}</p> */}
    </div>
  );
}

export default DogInfo;

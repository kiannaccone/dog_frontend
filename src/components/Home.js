import HeistList from "./HeistListCards";
import React, { useState } from "react"
import {useHistory} from "react-router-dom"
import styled from 'styled-components';
import pokerdogs from "./pokerdogs.jpeg"
    

const newHeist = {
  name: "",
  creator_name: ""
};

function Home({setHeistList}) {
  const [newHeistInfo, setNewHeistInfo] = useState(newHeist)

    let history = useHistory()
    const handleCreateHeistClick = (e) => {
    history.push(`/heistdogs`);
    };
    

    function handleAdd(e) {
      setNewHeistInfo({...newHeistInfo,[e.target.name]: e.target.value})
      console.log(newHeistInfo)
    }
   
    function handleSubmit (e) {
      e.preventDefault();
      fetch('http://localhost:9292/heists', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newHeistInfo),
    })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data)
            setHeistList((currentHeists) => [data, ...currentHeists]);
            setNewHeistInfo(newHeist);
            handleCreateHeistClick()
        })
  };

  return (
    <HomeStyle>
      <h1>Welcome to Dog Heists! You need a job done? We got the baddest dogs in the game.</h1>
      <p>These dogs may look innocent, but they're  are ready to fluff things up!</p>
      <h2>Start your heist below:</h2>


      
      <br/>
        <Form>
      <form  onSubmit={handleSubmit}>
        <label id="heistlabel">
          Heist Name:
          <input id="heistinput"
            className = "name"
            type="text"
            name="name"
            placeholder="Heist Name..."
            value={newHeistInfo.name}
            onChange={handleAdd}
          ></input>
        </label>
        <br/>
        <br/>
        <label>
          Boss Name:
          <input
            className = "creator"
            type="text"
            name="creator_name"
            placeholder="Mastermind Name..."
            value={newHeistInfo.creator_name}
            onChange={handleAdd}
          ></input>
        </label>
        <br/>
        <br/>
        <br/>
        <input id="createbtn" type="submit" value= "Create Heist"></input>
        <br/>
        <br/>
        <br/>
      </form>
      <Image src= {pokerdogs} alt="pokerdogs"/>
      </Form>
    </HomeStyle>
  );
}
// onClick={routeToDogs}

export default Home;


const HomeStyle = styled.div`
    h1, h2 {
    font-family: 'Cutive', serif;
    font-size: 30px;
    padding: 6px;
    text-align: center;
    
    }

    p{
      font-family: 'Cutive', serif;
      text-align: center;
      font-size: 20px;
    }
    
`

  const Form = styled.div `
    text-align: center;
    font-family: 'Cutive', serif;
    text-size: 20px;

  `


const Image = styled.img `
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  padding-bottom: 70px;

`


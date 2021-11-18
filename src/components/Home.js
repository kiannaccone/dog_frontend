import HeistList from "./HeistListCards";
import React, { useState } from "react"
import {useHistory} from "react-router-dom"
import styled from 'styled-components';
import pokerdogs from "./pokerdogs.jpeg"

function Home({setHeistList}) {
    let history = useHistory()
    function routeToDogs(e) {
        history.push(`/heistdogs`);
    }
    
    const newHeist = {
      name: "",
      creator_name: ""
    }
    
    const [newHeistInfo, setNewHeistInfo] = useState(newHeist)

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
            })
  };

  return (
    <HomeStyle>
      <h1>You need a job done? We got the baddest dogs in the game.</h1>
      <p>These dogs may look innocent, but they're  are ready to fluff things up!</p>
      <h2>Start your heist below:</h2>
      <Image src= {pokerdogs}
        alt="pokerdogs"/>
      <br/>
        <Form>
      <form  onSubmit={handleSubmit}>
        <label>
          Name your Heist:
          <input
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
          Boss name:
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
        <button type="submit">Create Heist</button>
        <br/>
        <br/>
        <br/>
      </form>
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
      font-size: 15px;
    }
    
`

  const Form = styled.div `
  text-align: center;
   font-family: 'Cutive', serif;
  `

// const Form = styled.div `
// font-family: 'Cutive', serif;
//   width: 300px;
//   height: 300 px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: auto;
// left: 50%;
// top: 50%;
// margin-left: -25%;
// position: absolute;
// display: flex
// `

const Image = styled.img `

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;



`


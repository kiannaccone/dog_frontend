import HeistList from "./HeistList";
import styled from 'styled-components';
import pokerdogs from "./pokerdogs.jpeg"

function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/heistdogs";
  };

  return (
    <HomeStyle>
      <h1>You need a job done? We got the baddest dogs in the game.</h1>
      <p>These dogs may look innocent, but they're  are ready to fluff things up!</p>
      <h2>Start your heist below:</h2>
      <Image src= {pokerdogs}
        alt="pokerdogs"/>
      <Form>
        <label>
          Name your Heist:
          <input
            type="text"
            name="heistname"
            placeholder="Heist Name..."
          ></input>
        </label>
        <br/>
        <label>
        <br/>
          Boss name:
          <input
            type="text"
            name="creatorname"
            placeholder="Mastermind Name..."
          ></input>
        </label>
        <br/>
        <br/>
        <button onClick={handleSubmit}>Create Heist</button>
        <br/>
        <br/>
        <br/>
      </Form>
    </HomeStyle>
  );
}

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
  width: 45%;
  margin: 0.25em;
  padding: 1em 24em;
  object-positon: center;
  align-self:center;


`


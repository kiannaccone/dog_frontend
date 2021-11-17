import styled from "styled-components";

function DogCards({ dog: { name, hobby, quote, image } }) {
  return (
    <Cards>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h2>{hobby}</h2>
      <h4>{quote}</h4>
      <br></br>
      <button>Go to Info</button>
      <br></br>
      <button>Retire Doggo</button>
    </Cards>
  );
}

export default DogCards;

const Cards = styled.div`
    margin 5rem;
    width: 150px;
    height: 50%;
    text-align:center;
    padding-right: 3em;
    


    img{
        width: 110%;
    }
    h4{
        font-family: 'Libre Baskerville', serif;
        font-weight: bolder;
        color: black;
        font-size: 100%
    }
   
    

`;

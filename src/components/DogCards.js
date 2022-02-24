import styled from "styled-components";
import { useHistory } from "react-router-dom";
function DogCards({ dog: { name, image, id } }) {

  let history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/doginfo/${id}`);
  };
  
  return (
    <Cards onClick={handleClick}>
      <img src={image} alt={name} />
      <h1>{name}</h1>
    </Cards>
  );
}


export default DogCards;

const Cards = styled.div`
    margin 5rem;
    width: 150px;
    height: 50%;
    text-align: auto;
    padding-right: 3em;
    font-family: 'Special Elite', cursive;
    padding-right: 8em;
    


    img{
      float: left;
      width:  300px;
      height: 300px;
      object-fit: cover;
      padding-bottom: 1em;
    }
    

`;

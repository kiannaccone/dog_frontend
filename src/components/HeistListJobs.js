import styled from "styled-components";

function HeistListJobs({dog_id, heist_id, dogList, role, payout}) {
  let currentDogs = dogList.filter((dog) => dog.id === dog_id)[0]
  console.log(currentDogs)
  let dogImg = currentDogs.image
  let dogName = currentDogs.name
  let dogRole = role
  let dogPayout = payout
  
  return(
    <Cards>
      <h2>{dogName}</h2>
      <img src={dogImg}/>
      <h4>Job: {dogRole}</h4>
      <h4>Treat Payout: {dogPayout}</h4>
    </Cards>
  )
}

export default HeistListJobs;

const Cards = styled.div`
  font-family: "Special Elite", cursive;
  text-align: center;
  padding-bottom: 5em;
  h1 {
  }

  h2 {
  }

  button {
    background-color: ;
  }

  img{
    width:  200px;
    height: 200px;
    object-fit: cover;
    padding-bottom: 1em;
  }
`;
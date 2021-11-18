import styled from "styled-components";



function HeistListCards ({name, creator_name, id, heistList, setHeistList}) {

        function handleDeleteClick() {
        fetch(`http://localhost:9292/heists/${id}`, {
            method: "DELETE",
        })
        .then(() => {
            const tempHeists = heistList.filter(heist => heist.id !== id)
            setHeistList(tempHeists)
        })
    };

    return (
        <Cards>
            <h1>{name}</h1>
            <h2>by: {creator_name}</h2> 
            <button className="remove" onClick={handleDeleteClick}>Delete Heist</button>
        </Cards>
    )
}

export default HeistListCards;

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
`;



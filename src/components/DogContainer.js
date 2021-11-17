import styled from 'styled-components'
import DogCards from "./DogCards";

function DogContainer ({dogList}) {

const dogCards = dogList.map((dog) => <DogCards key = {dog.id} dog={dog} /> )

    return (
        <CardContainer>
            {dogCards}
        </CardContainer>
    )
}

export default DogContainer;

const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
// div: hover{
//     width:410px;
//     height: 160px;
}
`
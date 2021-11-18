import styled from "styled-components";



function HeistListCards ({heist: {name, creator_name}}) {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{creator_name}</h2>
            <button>Delete</button>
        </div>
    )
}

export default HeistListCards;



import HeistListCards from "./HeistListCards";

function HeistListContainer ({heistList}) {

    const heistCards = heistList.map((heist) => <HeistListCards key={heist.id} heist={heist} />)

    return (
        <div>
            {heistCards}
        </div>
    )
}

export default HeistListContainer;
import HeistListCards from "./HeistListCards";

function HeistListContainer ({heistList, setHeistList, dogList }) {

    const heistCards = heistList.map((heist) => <HeistListCards 
    key={heist.id}
    id = {heist.id}
    heist={heist}
    heistList={heistList}
    setHeistList={setHeistList}
    name={heist.name}
    creator_name={heist.creator_name}
    dogList={dogList}/>)

    return (
        <div>
            {heistCards}
        </div>
    )
}

export default HeistListContainer;
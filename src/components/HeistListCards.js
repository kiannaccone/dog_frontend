import styled from "styled-components";
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"


const dogPics = ["https://www.google.com/search?q=dogs&sxsrf=AOaemvJ0yg0_CewwvBQ4SSCUqh_M9JxZsA:1637340029470&tbm=isch&source=iu&ictx=1&fir=AdZDAIcrJx_j4M%252CPUlX44c-WOm0fM%252C_%253BwzRcY9R2ANhK-M%252C2r6Arj4-hBjhNM%252C_%253BKypVIfrnXZbYeM%252CPesX8IHCvvYULM%252C_%253BsIKbK3Bm7zG1_M%252CcPSBeqE2PtFvaM%252C_&vet=1&usg=AI4_-kS-eCfApUtdDg-hGOwbtyg5C7xY2g&sa=X&ved=2ahUKEwjmrdT27qT0AhWyKH0KHUhLDckQ_h16BAgOEAE#imgrc=AdZDAIcrJx_j4M","https://www.google.com/search?q=dogs&sxsrf=AOaemvJ0yg0_CewwvBQ4SSCUqh_M9JxZsA:1637340029470&tbm=isch&source=iu&ictx=1&fir=AdZDAIcrJx_j4M%252CPUlX44c-WOm0fM%252C_%253BwzRcY9R2ANhK-M%252C2r6Arj4-hBjhNM%252C_%253BKypVIfrnXZbYeM%252CPesX8IHCvvYULM%252C_%253BsIKbK3Bm7zG1_M%252CcPSBeqE2PtFvaM%252C_&vet=1&usg=AI4_-kS-eCfApUtdDg-hGOwbtyg5C7xY2g&sa=X&ved=2ahUKEwjmrdT27qT0AhWyKH0KHUhLDckQ_h16BAgQEAE#imgrc=wzRcY9R2ANhK-M"]


function HeistListCards ({name, creator_name, id, heistList, setHeistList}) {



    const [showJobs, setShowJobs] = useState(false)
    const [currentJobs, setCurrentJobs] = useState("")

    const jobsURL = "http://localhost:9292/jobs/"
    // let {heistID} = useParams();
    // const contentType = {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    //     .then(resp => resp.json())
    // }
    
    function handleJobsClick() {
        setShowJobs((showJobs) => !showJobs)
        fetch((jobsURL + id))
        .then(resp => resp.json())
        .then(setCurrentJobs)
       
    };
    console.log(currentJobs)

    function handleDeleteHeist() {
        fetch(`http://localhost:9292/heists/${id}`, {
            method: "DELETE",
        })
        .then(() => {
            const tempHeists = heistList.filter(heist => heist.id !== id)
            setHeistList(tempHeists)
        })
    };

    return (
        <Cards id = {id} onClick={handleJobsClick}>
            <h1>{name}</h1>
            <h2>by: {creator_name}</h2> 
            {showJobs ? <h3>Hello</h3> : null}
            <button className="remove" onClick={handleDeleteHeist}>Delete Heist</button>
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



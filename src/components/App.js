import Home from "./Home";
import NavBar from "./NavBar";
import DogContainer from "./DogContainer";
import DogInfo from "./DogInfo";
import HeistListContainer from "./HeistListContainer";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [dogList, setDogList] = useState([]);
  const [heistList, setHeistList] = useState([]);
  const [jobList, setJobList] = useState([])


  let dogUrl = "http://localhost:9292/dogs";

  useEffect(() => {
    fetch(dogUrl)
      .then((resp) => resp.json())
      .then(setDogList);
  }, []);

  let heistUrl = "http://localhost:9292/heists";

  useEffect(() => {
    fetch(heistUrl)
      .then((resp) => resp.json())
      .then(setHeistList);
  }, []);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home setHeistList = {setHeistList}/>
        </Route>
        <Route exact path="/heistdogs">
          <DogContainer dogList={dogList} />
        </Route>
        <Route exact path="/heistlists">
          <HeistListContainer heistList={heistList} setHeistList={setHeistList} />
        </Route>
        <Route exact path="/doginfo/:id">
          <DogInfo setJobList = {setJobList} heistList = {heistList} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

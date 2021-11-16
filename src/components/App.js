import Home from "./Home";
import NavBar from "./NavBar";
import DogContainer from "./DogContainer";
import DogInfo from "./DogInfo";
import HeistList from "./HeistList";
import { Route, Switch} from 'react-router-dom';
// import {useState, useEffect} from 'react'


function App() {

  // const [heistList, setHeistList] = useState([]);

  // useEffect(() => {
  //   fetch("url")
  //   .then((resp) => resp.json())
  //   .then(setBookList)
  // }, [])


  return (
    <div>
     <NavBar />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
      <Route exact path="/heistdogs">
        <DogContainer />
      </Route>
      <Route exact path="/heistlists">
        <HeistList />
      </Route>
      <Route exact path="/doginfo">
        <DogInfo />
      </Route>
      </Switch>
    </div>
  );
}

export default App;

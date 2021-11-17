import HeistList from "./HeistList";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/heistdogs";
  };

  return (
    <div>
      <h1>You need a job done? We got the best dogs in the game.</h1>
      <h2>Include your Heist name</h2>
      <form>
        <label>
          Name your Heist:
          <input
            type="text"
            name="heistname"
            placeholder="Heist Name..."
          ></input>
        </label>
        <br></br>
        <label>
          Boss name:
          <input
            type="text"
            name="creatorname"
            placeholder="Mastermind Name..."
          ></input>
        </label>
        <br></br>

        <button onClick={handleSubmit}>Submit Hiest</button>
      </form>
    </div>
  );
}

export default Home;

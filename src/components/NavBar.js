import { NavLink } from 'react-router-dom';

function NavBar () {
    return (
        <div>
            <li><NavLink to ="/home">Home</NavLink></li>
           <li><NavLink to ="/heistdogs">Heist Dog's</NavLink></li>
           <li><NavLink to ="/heistlists">Heist's</NavLink></li>
        </div>
    )
}

export default NavBar;
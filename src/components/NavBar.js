import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function NavBar () {
    return (
        <MenuBar>
            <li><NavLink to ="/">Home</NavLink></li>
           <li><NavLink to ="/heistdogs">Heist Dog's</NavLink></li>
           <li><NavLink to ="/heistlists">Heist's</NavLink></li>
        </MenuBar>
    )
}

export default NavBar;

const MenuBar = styled.ul`
   padding: 3%;
   display:flex;
   justify-content:space-around;
   font-family: 'Special Elite', cursive;
   
   li{
       list-style: none;

       a {
        color:black;
        text-decoration: none;
        font-size: 28px;
        border: 2px solid black;
        padding: 7px;
        
    } 

`
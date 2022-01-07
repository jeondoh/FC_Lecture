import {NavLink} from "react-router-dom";

const activeStyle = {color:'green'};

export default function NavLinks(){
  return (
      <ul>
        <li>
          <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/profile" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Profile</NavLink>
        </li>
        <li>
          <NavLink to="/profile/1" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Profile/1</NavLink>
        </li>
        <li>
          <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>About</NavLink>
        </li>
        <li>
          <NavLink to="/about?name=mark" style={({ isActive }) => (isActive ? activeStyle : undefined)}>About?name=mark</NavLink>
        </li>
      </ul>
  );
}
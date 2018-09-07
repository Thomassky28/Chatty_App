import React from 'react';

const NavBar = (props) => (

 <nav className="navbar">
  <a href="/" className="navbar-brand">Chatty</a>
  <h3 className="userNumber">{ props.userNumber } users online</h3>
 </nav>

);


export default NavBar;
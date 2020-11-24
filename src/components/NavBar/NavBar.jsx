import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
  <>
    <div className="left">
      <Link to='/' className='NavBar-link'>HOME</Link>
      <Link to='/about' className='NavBar-link'>ABOUT</Link>
      <Link to='/events' className='NavBar-link'>EVENTS</Link>
      <Link to='/admin' className='NavBar-link'>ADMIN</Link>
      </div>
      <div className="right">
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </div>
    </>
    :
    <div>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;
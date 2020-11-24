import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../images/image.png'

const NavBar = (props) => {
  let nav = props.user ?
  <>
  <div className="logoclass">
      <Link to='/' className='NavBar-link'><img id="logo" src={logo}></img></Link>
  </div>
    <div className="left">
      <Link to='/' className='NavBar-link'>HOME</Link>
      <Link to='/about' className='NavBar-link'>ABOUT</Link>
      <Link to='/events' className='NavBar-link'>EVENTS</Link>
      <Link to='/admin' className='NavBar-link'>ADMIN</Link>
      </div>
      <div className="right">
      <span className='NavBar-welcome'> {props.user.name}</span>
      &nbsp;&nbsp;|
      <Link to='' className='NavBar-logout' onClick={props.handleLogout}>LOG OUT</Link>
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
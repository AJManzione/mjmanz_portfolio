import React from 'react';
import '../stylesheets/navbar.css';

import logo from '../images/logo_icon.gif';
import { flexBox } from './bootstrap/classnames';

function Navbar() {

  return (
<div className='d-flex flex-row justify-content-around align-items-center'>
 <img className='m-3'style={{width:'250px'}}src={logo}></img>
</div>
  );
};


export default Navbar;
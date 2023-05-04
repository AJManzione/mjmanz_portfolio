import React, { useEffect } from 'react';
import '../stylesheets/main.css';

function Main() {

  return (
    <ul id='container'>
      <li className='box-slower'><a href='#'>VISUAL IDENTITY DESIGN</a></li>
      <li className='box-med'><a href='#'>MARKETING AND ADVERTISING DESIGN</a></li>
      <li className='box-slow'><a href='#'>USER INTERFACE GRAPHIC DESIGN</a></li>
      <li className='box-fast'><a href='#'>PUBLICATION DESIGN</a></li>
      <li className='box-med'><a href='#'>PACKAGING DESIGN</a></li>
      <li className='box-super-slow'><a href='#'>MOTION GRAPHIC DESIGN</a></li>
    </ul>
  );
}

export default Main;

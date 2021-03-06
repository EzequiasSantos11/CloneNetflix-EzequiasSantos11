import React from 'react';
import './style.css'

export default ({black})=>{
 return(
  <header className={black ? 'black' : ''}>
   <div className="header--logo">
    <a href="/">
     <img src="./img/netflix-logo.svg" alt="logo" />
    </a>
   </div> 
   <div className="header--user">
    <a href="/users">
     <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="user" />
    </a>
   </div>
  </header>
 );
}
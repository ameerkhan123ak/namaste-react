import React from "react";
import { useState } from "react";

const Header = () => {

  const [ btnName, setBtnName] = useState('login');

  return (
    <div className="header">
      <div className="logo-container">
        <h1 id="logo">Namaste Biriyani</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>
            <i class="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
          <button id="login-btn" 
          onClick={()=> {
            btnName === "login" ? setBtnName('logout') : setBtnName("login");
          }}
          >{btnName}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from 'react';
import "./Navbar.css"
import { assets } from '../../assets/assets';
const Navbar = () => {

  const [menu, setMenu] = useState("Home");


  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className='logo'/>
        <ul className="navbar-list">
          <li className={menu === "Home"? "Active" : ""} onClick={()=>(setMenu("Home"))}>Home</li>
          <li className={menu === "About"? "Active" : ""} onClick={()=>(setMenu("About"))}>About</li>
          <li className={menu === "Products"? "Active" : ""} onClick={()=>(setMenu("Products"))}>Products</li>
          <li className={menu === "Contact us"? "Active": ""} onClick={()=>(setMenu("Contact us"))}>Contact Us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-searchIcon">
              <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
          <button>Sign-in</button>
        </div>
      
    </div>
  )
}

export default Navbar

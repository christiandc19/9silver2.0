import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link } from "react-router-dom";
import logo from "../../assets/nav-logo-bl.png";
import Topbar from "../../components/topbar/Topbar";

import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);


  

  return (
    <>
      <Topbar />

      <div name="top" className="navbar">

        <div className="navbar-container">
          
          <div className="navbar-logo">
            <Link to="/">
              <img src={logo} alt="9 Silver Logo" loading="lazy"/>
            </Link>
          </div>

          <ul className={nav ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">ABOUT US</Link>{" "}
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="hamburger" onClick={handleNav}>
            {!nav ? <FaBars className="icon" /> : <FaTimes className="icon" />}
          </div>

          {/* <div className='hide'>
                <p><a href="tel:3236433171"> CONTACT US <span> <AiOutlinePhone /></span></a></p>
                </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;

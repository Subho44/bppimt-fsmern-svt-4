import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {

  return <>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/emp">Employee card</Link>
    <Link to="/s">Statcard</Link>
  </nav>
  
  
  </>
}

export default Header
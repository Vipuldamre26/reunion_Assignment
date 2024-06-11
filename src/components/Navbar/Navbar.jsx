import React from 'react'
import './navbar.css';
import { FaHouseChimney } from "react-icons/fa6";
import { useNavigate } from 'react-router';

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className='navbar'>
        <div className="icon">
          <FaHouseChimney onClick={() => navigate('/')} />
          <h3>Estatery</h3>
        </div>
        <p>Search properties to rent</p>
        <div className="search">
          <input type='text' placeholder='Search' />
          <button> Search </button>
          <button onClick={() => navigate('/likepage')}> Liked </button>
        </div>
    </div>
  )
}

export default Navbar
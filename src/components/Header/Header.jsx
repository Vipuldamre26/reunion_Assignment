import React from 'react'
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-main">
        <div className="selectItem">
          <h4>City</h4>
          <input type='text' placeholder='enter city'></input>
        </div>
        <div className="selectItem">
          <h4>Date</h4>
          <input type='date'></input>
        </div>
        <div className="selectItem">
          <h4>Price</h4>
          <select name="" id="">
            <option value="">All</option>
            <option value="">Rs 0 - 500</option>
            <option value="">Rs 500 - 1000</option>
            <option value="">Rs 1000 - 1500</option>
            <option value="">Rs 1500 - 2000</option>
            <option value="">Rs 2000 - 2500</option>
            <option value="">Rs 2500 - 3000</option>
          </select>
        </div>
        <div className="selectItem">
          <h4>Property Type</h4>
          <select name="" id="">
            <option value="">All</option>
            <option value="">house</option>
            <option value="">pg</option>
            <option value="">farm house</option>
            <option value="">villa</option>
            <option value="">hotel</option>
            <option value="">oyo</option>
          </select>
        </div>
      </div>
      <button>Submit</button>
    </div>
  )
}

export default Header
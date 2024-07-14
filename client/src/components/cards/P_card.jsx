import React from 'react'
import "./cards.css"
import { Link } from 'react-router-dom'

const P_card = () => {
  return (
    <Link to={`/shops/1`} className="card-wrapper">
      <div className="top">
        <img src="/alf/person78.GIF" alt="" />
        <span>alfinerals</span>
        <i class="fa-regular fa-heart"></i>
      </div>
      <div className="img">
        <img src="/alf/filter.jpg" alt="" />
      </div>
      <div className="bottom">
        <p>bottle filter</p>
        <div className="stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <button className="btn-2">view product</button>
      </div>
    </Link>
  )
}

export default P_card
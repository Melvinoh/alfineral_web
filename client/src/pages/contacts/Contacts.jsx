import React from 'react'
import "./contacts.css"

const Contacts = () => {
  return (
  <div className="contacts-wrapper">
    <h2 className="heading">
      contact information
    </h2>
    <div className="contacts-container">
      <div className="left-con">
        <div className="cont-con">
          <h3 className="sub-heading">head office</h3>
          <div className="items">
            <i class="fa-solid fa-location-dot"></i>
            <div className="det">
              <h4>ocation</h4>
              <p>675,899 aghakan walk opp jaa</p>
              <p>908,890 upper hill road,nairobi</p>
            </div>
          </div>
          <div className="items">
            <i class="fa-solid fa-phone"></i>
            <div className="det">
              <h4>call for help</h4>
              <p>+254 789 234 567</p>
              <p>+254 897 908 765</p>
            </div>
          </div>
          <div className="items">
          <i class="fa-regular fa-envelope"></i>
            <div className="det">
              <h4>email us on </h4>
              <p>info@alfinerals.com</p>
              <p>alfinerals@info.co.org</p>
            </div>
          </div>
        </div>
        <div className="open">
          <h3 className="sub-heading">opeing hours</h3>
          <div className="box">
            <p>monday : 8:00 hrs - 17:00 hrs </p>
            <p>tuesday : 8:00 hrs - 17:00 hrs </p>
            <p>wednessday : 8:00 hrs - 17:00 hrs </p>
            <p>thursday : 8:00 hrs - 17:00 hrs </p>
            <p>friday : 8:00 hrs - 17:00 hrs </p>
            <p>saturday : 8:00 hrs - 17:00 hrs </p>
            <p>sunday : 8:00 hrs - 17:00 hrs </p>
          </div>
        </div>
      </div>
      <div className="right-con">
        <h3 className='sub-heading'>send us a message</h3>
        <form action="" className="form">
          <div className="elements">
            <label htmlFor="">your name</label>
            <input type="text" />
          </div>
          <div className="elements">
            <label htmlFor="">email address</label>
            <input type="text" />
          </div>
          <div className="elements">
            <label htmlFor="">location</label>
            <input type="text" />
          </div>
          <div className="elements">
            <label htmlFor="">your message</label>
            <textarea name="" id=""></textarea>
          </div>
          
          <button className="btn-1">submit</button>
        </form>
      </div>
    </div>
    <div className="map-con">
      <h2 className="heading">sale and delivery points</h2>
      <div className="map">
        <img src="/alf/map2.GIF" alt="" />

      </div>

    </div>

  </div>
  )
}

export default Contacts
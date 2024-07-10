import React from 'react'
import P_card from '../../components/cards/P_card'
import "./shops.css"

const Shops = () => {
  return (
    <section className="shop-wrapper">
      <div className="navbar">
        <div className="shop-filters">
          <h3 className="heading">shop filters</h3>
          <div className="shop">
            <img src="/alf/person 7.GIF" alt="" />
            <div className="content">
              <h4>alfinerals</h4>
              <span>best waters</span>
            </div>
          </div>
          <div className="shop">
            <img src="/alf/person 7.GIF" alt="" />
            <div className="content">
              <h4>alfinerals</h4>
              <span>best waters</span>
            </div>
          </div>
          <div className="shop">
            <img src="/alf/person 7.GIF" alt="" />
            <div className="content">
              <h4>alfinerals</h4>
              <span>best waters</span>
            </div>
          </div>
          <div className="shop">
            <img src="/alf/person 7.GIF" alt="" />
            <div className="content">
              <h4>alfinerals</h4>
              <span>best waters</span>
            </div>
          </div>
          <div className="shop">
            <img src="/alf/person 7.GIF" alt="" />
            <div className="content">
              <h4>alfinerals</h4>
              <span>best waters</span>
            </div>
          </div>
          <button className="btn-2">view all</button>
        </div>
        <div className="price-filters">
          <h3 className="heading">price filters</h3>
          <div className="scroll">
            <input type="range" min={1} max={20000} value={50}/>
          </div>
          <div className="form">
           <div className="f-element">
              <span>max</span>
              <input type="text" />
           </div>
           <div className="f-element">
              <span>max</span>
              <input type="text" />
           </div>
          </div>
        </div>
        <div className="tag-filter">
          <div>drinking</div>
          <div>bottle</div>
          <div>dispenser</div>
          <div>glass</div>
          <div>water</div>
          <div>water filtration</div>
        </div>
      </div>
      <div className="main-con">
        <div className="m-bar">
          <div className="icon">
            <i class="fa-solid fa-list-ul"></i>
            <i class="fa-solid fa-grip od"></i>
          </div>
          <span>17899 items found</span>
          <div className="sort">
            <span>sort</span>
            <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>
        <div className="grid-wrapper">
          <div className="m-grid">
            <P_card/>
            <P_card/>
            <P_card/>
            <P_card/>
            <P_card/>
            <P_card/>       
            <P_card/>       
            <P_card/>       
          </div>
          <div className="pagination">
          <i class="fa-solid fa-arrow-left"></i>
              <p>1</p>
              <p className='od'>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Shops
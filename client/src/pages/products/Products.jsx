import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './products.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
const Products = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState("https://swiperjs.com/demos/images/nature-1.jpg");
  return (
    <section className="products_wrapper">
      <div className="container-1">
        <div className="prod-view">
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper3"
          >
            <SwiperSlide>
              <img src="/alf/product-4-copyright.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
          </Swiper>
          <hr />
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper4"
          >
            <SwiperSlide>
              <img src="/alf/product-4-copyright.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="right">
          <h2 className='sub-heading'> water doctry flter</h2>
          <div className="content">
            <div className="det">
              <p>rating</p>
              <div className="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>
            </div>
            <div className="det">
              <p>availability</p>
              <div className="con">
                <span>instiock</span>
                <i class="fa-solid fa-tick"></i>
              </div>
            </div>
            <div className="det">
              <p>size</p>
              <div className="size">
                <p>medium</p>
                <div className="boxes">
                  <span>s</span>
                  <span>m</span>
                  <span>l</span>
                  <span>xl</span>
                </div>
              </div>
            </div>
            <div className="det">
              <p>color</p>
              <div className="size">
                <p>white</p>
                <div className="boxes">
                  <span>s</span>
                  <span>m</span>
                  <span>l</span>
                  <span>xl</span>
                </div>
              </div>
            </div>
            <div className="det">
              <p>price</p>
              <span>kes 670</span>
            </div>
            <div className="det">
              <p>qty</p>
              <input type="number" default={1} />
            </div>
            <div className="det">
              <p>other vendors</p>
              <div className="size">
                <p>white</p>
                <div className="boxes">
                  <span>s</span>
                  <span>m</span>
                  <span>l</span>
                  <span>xl</span>
                </div>
              </div>
            </div>    
          </div>
          <button className="btn-2">
            <i class="fa-solid fa-star"></i>
            <span>add to cart</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Products
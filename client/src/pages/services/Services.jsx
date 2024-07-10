import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './services.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Services = () => {
  return (
      <section className="service-wrapper">
        <div className="service-content">
          <div className="right">
            <div className="img">
              <img src="/alf/Capture.PNG" alt="" />
            </div>
            <button className="btn-2"> read more</button>
          </div>
          <div className="left">
            <h2 className="sub-heading">delivery services</h2>
            <p>
              we deliver water to your home within an hour of order,any 
              where in the city.just make sure to fill in the delivery form when 
              making the orer
            </p>
            <div className="box">
              <div className="item">
                <i class="fa-solid fa-truck-fast"></i>
                <span>free delivery</span>
              </div>
              <div className="item">
                <i class="fa-regular fa-clock"></i>
                <span>8:00 - 23:00</span>
              </div>
              <div className="item">
                <i class="fa-regular fa-calendar-check"></i>
                <span>7 days a week</span>
              </div>
            </div>
          </div>
          
        </div>
        <div className="service-content">
          <div className="right">
            <div className="img">
              <img src="/alf/ld.PNG" alt="" />
            </div>
            <buton className="btn-2">read more</buton>
          </div>
          <div className="left">
            <h2 className="sub-heading">
              water filtration services
            </h2>
            <p>
              we produce high tech soliutions i the field of
              water purificatio that meet the most stringnet quaity standards and 
              customerrequirements.purifican is carried with the help 
              of innovative dvelopments and brands
            </p>
            <div className="container">
              <div className="item br" >
                <i class="fa-solid fa-droplet"></i>
                <div className="content">
                  <h4>value</h4>
                  <p>produceexcellent long term values</p>
                </div>
              </div>
              <div className="item br">
              <i class="fa-solid fa-filter"></i>
                <div className="content">
                  <h4>effectiveness</h4>
                  <p>produceexcellent long term values</p>
                </div>
              </div>
              <div className="item br">
                <i class="fa-solid fa-glass-water"></i>
                <div className="content">
                  <h4>Easy to use</h4>
                  <p>produceexcellent long term values</p>
                </div>
              </div>
              <div className="item br">
                <i class="fa-solid fa-glass-water"></i>
                <div className="content">
                  <h4>affordable</h4>
                  <p>produceexcellent long term values</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="service-content">
          <div className="right">
            <img src="/alf/service2.JPG" alt="" />
            <button className="btn-2"> read more</button>
          </div>
          <div className="left">
            <h3 className='sub-heading'> best plumbing service</h3>
            <p>
              we provide sevices for the installation diagnostic,
              repair and maintennce of filters and reves osmosis systems
              all work is carried out by qualified engineers at a highly proessional level
            </p>
            <div className="box">
              <div className="card">
                <h3>full guaranties</h3>
                <p>our filters removes 99% f lead and abesttos and 62 other armful containers</p>
              </div>
              <div className="card">
                <h3>24/7 services</h3>
                <p>our filters removes 99% f lead and abesttos and 62 other armful containers</p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="service-sec4">
          <h3 className="sub-heading">what people say about us</h3>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
  )
}

export default Services
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "./home.css"
import 'swiper/css';

const Home = () => {
  return (
   <section className="home-wrapper">
    <div className="hero-sec">
        <div className="left-con">
            <h1>each drop will make you fresh and cool</h1>
            <p>
                water is not just a resouce it the essence of life itself <br>
                </br>join us ona journeys we dive into depths of this vital element
            </p>
            <p>
                water is not just a resouce it the essence of life itself 
            </p>
            <div className="btn-con">
                <button className='btn-1'>our services</button>
                <button className='btn-2'>discover</button>
            </div>
        </div>
        <div className="right-con">
            <img src="/alf/delivery man.GIF" alt="" />
        </div>
    </div>
    <div className="home-sec2">
        <h2 className='heading'>water is nothing but life </h2>
        <div className="sec2-wrapper">
            <div className="left">
                <div className="img">
                    <img src="/alf/peson4.GIF" alt="" />
                </div>
                <h3 className='sub-heading'>making your lives safer</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo id nostrum
                    magnam rem sed laborum iure, perspiciatis minima expedita consequuntur quis dicta, culpa corrupti inventore recusandae similique ullam tempore odit.
                </p>
                <button  className='btn-1'>Read more</button>
            </div>
            <div className="right">
                <div className="card">
                    <i class="fa-solid fa-bottle-water"></i>
                    <div className="text">
                        <h5>soft drinking water</h5>
                        <span>gain access to the aluable resource</span>
                    </div>
                </div>
                <div className="card">
                    <i class="fa-solid fa-bottle-water"></i>
                    <div className="text">
                        <h5>soft drinking water</h5>
                        <span>gain access to the aluable resource</span>
                    </div>
                </div>
                <div className="card">
                    <i class="fa-solid fa-bottle-water"></i>
                    <div className="text">
                        <h5>soft drinking water</h5>
                        <span>gain access to the aluable resource</span>
                    </div>
                </div>
                <div className="card">
                    <i class="fa-solid fa-bottle-water"></i>
                    <div className="text">
                        <h5>soft drinking water</h5>
                        <span>gain access to the aluable resource</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="home-sec3">
        <div className="text">
            <h2 className='heading'>our services</h2>
            <h3 className='sub-heading'>we connect you with the best water shops</h3>
        </div>
        <div className="slider-con">
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className='swipe'>Slide 1</SwiperSlide>
                <SwiperSlide className='swipe'>Slide 2</SwiperSlide>
                <SwiperSlide className='swipe'>Slide 3</SwiperSlide>
                <SwiperSlide className='swipe'>Slide 4</SwiperSlide>
                <SwiperSlide className='swipe'>Slide 4</SwiperSlide>
                <SwiperSlide className='swipe'>Slide 4</SwiperSlide>
                <SwiperSlide className='swipe'>Slide 4</SwiperSlide>
                <SwiperSlide className='swipe'>Slide 4</SwiperSlide>
                <SwiperSlide className='swipe'>Slide 4</SwiperSlide>
                ...
            </Swiper>
        </div>
    </div>
    <div className="home-sec4">
        <div className="text">
            <h5 className='heading'>get informed</h5>
            <h5 className='sub-heading'>knowledge is power</h5>
        </div>
        <div className="container">
            <div className="home-blog">
                <div className="img">
                    <img src="/public/alf/peron5.jpg" alt="" />
                </div>
                <div className="content">
                    <div className="top">
                        <div className="box1">
                            <i className="fa-solid fa-user"></i>
                            <span>macmugan</span>
                        </div>
                        <span>
                                23 comments
                        </span>    
                    </div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure officia 
                        repellat voluptate quibusdam sint id earum, impedit, iste quia voluptatem molestiae, maxime aspernatur repellendus odit non ad quos?
                            Fuga recusandae modi praesentium, nulla harum consectetur nihil odit excepturi repudiandae cumque?
                    </p>
                    <div className="bottom">
                        
                        <button className="btn-1">readmore</button>
                        <div className="box1">
                            <i class="fa-solid fa-share-nodes"></i>
                            <span>share</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-blog">
                <div className="img">
                    <img src="/alf/pexels-ketut-subiyanto-4719914.jpg" alt="" />
                </div>
                <div className="content">
                    <div className="top">
                        <div className="box1">
                            <i className="fa-solid fa-user"></i>
                            <span>macmugan</span>
                        </div>
                        <span>
                                23 comments
                        </span>    
                    </div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure officia 
                        repellat voluptate quibusdam sint id earum, impedit, iste quia voluptatem molestiae, maxime aspernatur repellendus odit non ad quos?
                            Fuga recusandae modi praesentium, nulla harum consectetur nihil odit excepturi repudiandae cumque?
                    </p>
                    <div className="bottom">
                        
                        <button className='btn-1'>readmore</button>
                        <div className='box1'>
                            <i class="fa-solid fa-share-nodes"></i>
                            <span>share</span>

                        </div>


                    </div>
                </div>
            </div>
           
        </div>
    </div>



   </section>
  )
}

export default Home
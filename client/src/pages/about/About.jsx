import React from 'react'
import './about.css'

const About = () => {
  return (
  <div className="about-wrapper">
    <div className="about-sec1">
      <div className="img">
        <img src="/alf/8.GIF" alt="" />
      </div>
      <div className="right">
        <div className="text">
          <h3 className='heading'>why choose us</h3>
          <h1 className='sub-heading'>your satificaion is our priority</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Soluta eos nostrum, ab, voluptas possimus officiis consequatur <br />
          tempora voluptatibus doloribus ullam mollitia dicta aspernatur
           est modi. Pariatur nostrum cupiditate totam deserunt, fugiat 
           possimus omnis in. Eaque voluptate
          tempore optio neque, tenetur dolor fugit odio! Ab, sit?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Soluta eos nostrum, ab, voluptas possimus officiis consequatur <br />
          tempora voluptatibus doloribus ullam mollitia dicta aspernatur
           git odio! Ab, sit?
        </p>
        <button className='btn-1'>our services </button>
      </div>
    </div>
    <div className="about-sec2">
      <div className="text">
        <h3 className='heading'>why trust our name</h3>
        <h1 className='sub-heading'>we are a trusted name in the bottle industry</h1>
      </div>
      <div className="container">
        <div className="item">
          <i class="fa-solid fa-droplet"></i>
          <h5>maximum purity</h5>
          <p>our processing plant ensures the best purity</p>
        </div>
        <div className="item">
          <i class="fa-solid fa-flask"></i>
          <h5>chlorine free</h5>
          <p>our processing plant ensures the best purity</p>
        </div>
        <div className="item">
          <i class="fa-solid fa-recycle"></i>
          <h5>five step recycle</h5>
          <p>our processing plant ensures the best purity</p>
        </div>
        <div className="item">
          <i class="fa-solid fa-glass-water"></i>
          <h5>healthy water</h5>
          <p>our processing plant ensures the best purity</p>
        </div>
      </div>
    </div>
    <div className="about-sec3">
      <div className="text">
        <h3 className="heading"> value your needs</h3>
        <h5 className="sub-heading">our dedicated team members</h5>
      </div>
      <div className="container">
        <div className="item">
          <div className="img">
            <img src="/alf/mguy3.GIF" alt="" />
          </div>
          <div className="content">
            <h3>md sweem</h3>
            <h4>water tester</h4>
          </div>
        </div>
        <div className="item">
          <div className="img">
            <img src="/alf/mguy2.GIF" alt="" />
          </div>
          <div className="content">
            <h3>md alfie</h3>
            <h4>express delivery</h4>
          </div>
        </div>
        <div className="item">
          <div className="img">
            <img src="/alf/mguy1.GIF" alt="" />
          </div>
          <div className="content">
            <h3>md muturi</h3>
            <h4>water delivery man</h4>
          </div>
        </div>
      </div>
    </div>
    <div className="about-sec4">
      <div className="img">
        <img src="/alf/person4.GIF" alt="" />
      </div>
      <div className="right">
        <div className="text">
          <h3 className="heading">what is in water</h3>
          <h1 className="sub-heading">check water quality</h1>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, non quisquam? Dolor corporis, voluptatem laudantium ducimus officiis porro sed optio debitis 
          ipsam perspiciatis inventore suscipit.
        </p>
        <div className="list">
          <div className="box">
            <span>1</span>
            <span>calcium</span>
          </div>
          <div className="box">
            <span>2</span>
            <span>magnesium</span>
          </div>
          <div className="box">
            <span>3</span>
            <span>sodium</span>
          </div>
          <div className="box">
            <span>4</span>
            <span>chloride</span>
          </div>
          <div className="box">
            <span>5</span>
            <span>chloride</span>
          </div>
          <div className="box">
            <span></span>
            <span>chloride</span>
          </div>
        </div>
      </div> 
    </div>
  </div>
  )
}

export default About
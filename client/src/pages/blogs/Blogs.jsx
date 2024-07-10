import React from 'react'
import "./blogs.css"

const Blogs = () => {
  return (
    <section className="blog_wrapper">
      <h3 className="heading">knowldge base</h3>
      <div className="blog-container">
        <div className="left-bar">
          <div className="post">
            <div className="img">
              <img src="/alf/pexels-olly-3811596.jpg" alt="" />
            </div>
            <h2 className="sub-heading">Delicious water always on tap</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus iure vero natus recusandae nam neque non debitis ratione animi
              temporibus tenetur voluptas saepe amet ea modi cum cumque, nostrum consequuntur autem ipsam aut architecto soluta optio. Repellendus,
              molestiae deleniti aliquam ipsum qui porro voluptas, aut ratione laudantium animi debitis. Illum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus iure vero natus recusandae nam neque non debitis ratione animi
              temporibus tenetur voluptas saepe amet ea modi cum cumque, nostrum consequuntur autem ipsam aut architecto soluta optio. Repellendus,
              molestiae deleniti aliquam ipsum qui porro voluptas, aut ratione laudantium animi debitis. Illum.
            </p>
          </div>
          <div className="comments">
            <h4 className='heading'>2 comments</h4>
            <div className="comments-con">
              <img src="/alf/perso n2.GIF" alt="" />
              <div className="det">
                <h5>jasseca brown</h5>
                <p>20oct,2019 -4:00pm</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum exercitationem laboriosam eaque tempore. Sint aspernatur enim perferendis, inventore quas dicta?
                </p>
              </div>
            </div>
            <div className="comments-con">
              <img src="/alf/perso n3.GIF" alt="" />
              <div className="det">
                <h5>David martin</h5>
                <p>20oct,2019 -4:00pm</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum exercitationem laboriosam eaque tempore. Sint aspernatur enim perferendis, inventore quas dicta?
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="comments-form">
            <h2 className='sub-heading'>leave a comment</h2>
            <form action="" className='form'>
              <input type="text" placeholder='full name'/>
              <input type="text" placeholder='email adress'/>
              <input type="text" placeholder='location'/>
              <input type="text" placeholder='phone number'/>
              <textarea type="text" placeholder='write a message'/>
            </form>
            <button className='btn-1'> publish</button>
          </div>
        </div>
        <div className="right-bar">
          <div className="post-list">
            <h3 className="sub-heading">
              latest posts
            </h3>
            <div className="pl-con">
              <div className="pl active">
                <img src="/alf/pexels-olly-3811596.jpg" alt="" />
                <p>delicious water always on tap</p>
              </div>
              <hr />
              <div className="pl">
                <img src="/alf/mguy2.GIF" alt="" />
                <p>water delivered to your home</p>
              </div>
              <hr />
              <div className="pl">
                <img src="/alf/person78.GIF" alt="" />
                <p>greate and refreshening</p>
              </div>
              <hr />
              <div className="pl">
                <img src="/alf/pexels-thomas-chauke-437438-1126557.jpg" alt="" />
                <p>fresh springs water delivery</p>
              </div>
              <div className="pl">
                <img src="/alf/fam6.GIF" alt="" />
                <p>family preference always</p>
              </div>
            </div>
          </div>
          <div className="categories">
            <h3 className="sub-heading">categories</h3>
            <div className="cat-wrapper">
              <span>water</span>
              <span>bottle</span>
              <span>mineralwater</span>
              <span>water bottles</span>
              <span>dispensers</span>
              <span>vendors</span>
              <span>distributors</span>
            </div>
          </div>
          <div className="tags">
            <h3 className='sub-heading'>tags</h3>
            <div className="tag-filter">
              <div>drinking</div>
              <div>bottle</div>
              <div>vendors</div>
              <div>dispenser</div>
              <div>glass</div>
              <div>water</div>
              <div>water filtration</div>
            </div>
          </div>
        </div>
      </div>
     
    </section>
  )
}

export default Blogs
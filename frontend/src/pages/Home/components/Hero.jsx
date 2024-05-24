import React from 'react'

const Hero = () => {
  return (
    <section id='hero'>
        <div className="container">
            <h1>Get your  <span>Education </span>today!</h1>
            <div className="boxes">
                <div className="box">
                <img src="https://preview.colorlib.com/theme/course/images/earth-globe.svg" alt="" />
              <div className="right">
              <h3>Online Courses</h3>
               <p>VIEW MORE</p>

              </div>
               
                </div>
                <div className="box">
                <img src="https://preview.colorlib.com/theme/course/images/books.svg" alt="" />
              <div className="right">
              <h3>Our Library</h3>
               <p>VIEW MORE</p>
              </div>
               
                </div>
                <div className="box">
               <img src="https://preview.colorlib.com/theme/course/images/professor.svg" alt="" />
             <div className="right">
             <h3>Our Teachers</h3>
               <p>VIEW MORE</p>
             </div>
              
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
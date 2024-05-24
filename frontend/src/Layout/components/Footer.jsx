import React from 'react'
import "../footer.scss"
const Footer = () => {
  return (
    <footer>
      <div className="container">
      <div className="top">
         <div className='line'></div>
        <h2>Subscribe to newsletter</h2>
        </div>
        <div className="form">
          <input placeholder='Email Address' type="text" />
          <button>Subscripe</button>
        </div>
        <hr />
        <div className="center">
          <div className="col">
            <div className="logo">
            <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
            <h1>COURSE</h1>
            </div>
            
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum, tempor lacus.</p>
          </div>
          <div className="col">
            <h2>Menu</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Courses</li>
              <li>News</li>
              <li>Contact</li>
            </ul>
            
          </div>
          <div className="col">
            <h2>Usefull Links</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Courses</li>
              <li>News</li>
              <li>Contact</li>
            </ul>
            
          </div>
          <div className="col">
            <h2>Contact</h2>
            <ul>
              <li>Blvd Libertad, 34 m05200 Arévalo</li>
              <li>0034 37483 2445 322</li>
              <li>hello@company.com</li>
              
            </ul>
            
          </div>
        
         
        </div>
        <hr />
        <p className='bottom'>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
      </div>
    </footer>
  )
}

export default Footer
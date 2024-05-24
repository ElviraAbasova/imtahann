import React from 'react'
import "../navbar.scss"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <div className="logo">
                <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
                <h1>COURSE</h1>
            </div>
            <ul>
                <li>
                    <Link className="link">HOME</Link>
                </li>
                <li>
                    <Link className="link">ABOUT US</Link>
                </li>
                <li>
                    <Link className="link">COURSES</Link>
                </li>
                
                <li>
                    <Link className="link">CONTACT</Link>
                </li>
                <li>
                    <Link to="/admin" className="link">ADMIN</Link>
                </li>
                <li>
                    <Link className="link" to="/favorite">FAVORITE</Link>
                </li>
            </ul>
            <div className="contact">
            <FontAwesomeIcon className='icon' icon={faPhoneVolume} />
                <p>+43 4566 7788 2457</p>
            </div>

        </div>
    </nav>
  )
}

export default Navbar
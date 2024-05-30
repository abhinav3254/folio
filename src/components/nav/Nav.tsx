import './Nav.css';


import React from 'react'

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <input type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Contact Me</a></li>
                </ul>
                <h1 className="logo">Abhinav Jha</h1>
            </div>
        </nav>
    )
}

export default Nav
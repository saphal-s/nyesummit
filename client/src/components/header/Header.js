import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'
import './style.css'

const Header = () => {
    return (
        <div className="sticky-top barss">
            <Navbar collapseOnSelect expand="lg" className='navbars'>
                <Link to='/'><img src={logo} height={80} width={80} alt="" /></Link>
                <Link to='/' className='text-decoration-none'><h4 className='mt-3 nyes'>NYE Summit</h4></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav >
                        <Link to="/" className='text-decoration-none' >
                            <li className='nav_link text-dark'><span>Home</span></li>
                        </Link>
                        <li className='nav_link'><span>Summit 2022</span>
                            <ul className='navdropdown'>
                                <Link to="/about-NYE" className='text-decoration-none' >
                                    <li>About NYE Summit</li>
                                </Link>
                                <Link to="/welcome-note" className='text-decoration-none' >
                                    <li>Welcome Note</li>
                                </Link>
                                <Link to="/thematic-area" className='text-decoration-none' >
                                    <li>Thematic Area</li>
                                </Link>
                                <Link to="" className='text-decoration-none' >
                                    <li>Schedule</li>
                                </Link>
                                <Link to="/about-organizer" className='text-decoration-none' >
                                    <li>About Organizer</li>
                                </Link>
                            </ul>
                        </li>
                        <li className='nav_link'><span>Past Summit</span>
                            <ul className='navdropdown'>
                                <Link to="/nyesummit-2019" className='text-decoration-none' >
                                    <li>NYE Summit 2019</li>
                                </Link>

                            </ul>
                        </li>
                        <li className='nav_link'><span>Our Team</span>
                            <ul className='navdropdown'>
                                <Link to="/advisory-committee" className='text-decoration-none' >
                                    <li>Advisory Committe</li>
                                </Link>
                                <Link to="/organizing-committee" className='text-decoration-none' >
                                    <li>Organizing Committe</li>
                                </Link>
                            </ul>
                        </li>
                        <Link to="/speakers" className='text-decoration-none' >
                            <li className='nav_link text-dark'><span>Speaker</span></li>
                        </Link>
                        <Link to="/pitch" className='text-decoration-none' >
                            <li className='nav_link text-dark'><span>Pitch</span></li>
                        </Link>
                    </Nav>
                    <Nav>
                        <Link to='/register'><button className='head_register_button'>Apply</button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header

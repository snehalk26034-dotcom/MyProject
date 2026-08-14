import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logo} alt="Kiran Dighe" />
                </Link>
            </div>

            <div className="navbar-right">
                <ul className="nav-links">
                    <li>
                        <Link to="" className="active">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/about">About</Link>
                    </li>

                    <li className="dropdown">
                        <Link to="/vendors" className="dropdown-link">
                            Vendors
                        </Link>

                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/vendors/craft">
                                    <span>○</span>
                                    <span>
                                        Craft
                                        <br />
                                        Vendors
                                    </span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/vendors/food">
                                    <span>○</span>
                                    <span>
                                        Food
                                        <br />
                                        Vendors
                                    </span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/vendors/applications">
                                    <span>○</span>
                                    <span>Applications</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/events">Events</Link>
                    </li>

                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>

                <a href="https://www.eventbrite.com/" target="_blank" rel="noopener noreferrer" className="ticket-btn">
                    Buy Tickets
                </a>

                <div className="social-links">
                    <a href="#" aria-label="Facebook">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>

                    <a href="#" aria-label="Instagram">
                        <i className="fa-brands fa-instagram"></i>
                    </a>

                    <a href="#" aria-label="LinkedIn">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

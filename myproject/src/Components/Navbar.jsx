import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Kiran Dighe" />
            </div>

            <div className="navbar-right">
                <ul className="nav-links">
                    <li>
                        <a href="/" className="active">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li className="dropdown">
                        <a href="/vendors" className="dropdown-link">
                            Vendors
                        </a>

                        <ul className="dropdown-menu">
                            <li>
                                <a href="/vendors/craft">
                                    <span>○</span>
                                    <span>
                                        Craft
                                        <br />
                                        Vendors
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a href="/vendors/food">
                                    <span>○</span>
                                    <span>
                                        Food
                                        <br />
                                        Vendors
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a href="/vendors/applications">
                                    <span>○</span>
                                    <span>Applications</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/events">Events</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>

                <a href="/tickets" className="ticket-btn">
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
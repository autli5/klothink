import { NavLink } from "react-router-dom"

import "../styles/components/Header.css"

import share from "../assets/share.svg"
import Logo from "../assets/Logo.svg"
import cart from "../assets/cart.svg"

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="top">
                    <p>
                        Subscribe to our Newsletter For Latest Collections
                        <img src={share} alt="" />
                    </p>
                </div>

                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>
                                <NavLink 
                                  to="/" 
                                  className={({ isActive }) => isActive ? "active" : ""}
                                >
                                  Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink 
                                  to="/products" 
                                  className={({ isActive }) => isActive ? "active" : ""}
                                >
                                  Products
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="center">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="right">
                        <div className="cart">
                            <img src={cart} alt="" />
                        </div>
                        <p>Contact Support</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
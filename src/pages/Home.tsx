import { NavLink } from "react-router-dom"

import "../styles/pages/Home.css"

import right from "../assets/right-panel.png"
import product from "../assets/product1.png"
import cart from "../assets/cart.svg"
import star from "../assets/star.svg"

export default function Home() {
    return (
        <>
            <div className="elevate">
                <div className="container">
                    <div className="left">
                        <h1>Elevate Your Style with Klothink</h1>

                        <p>
                            Explore a world of fashion at Klothink, where trends meet affordability.
                            Immerse yourself in the latest styles and seize exclusive promotions.
                        </p>

                        <div className="buttons">
                            <button className="primary">Shop Now</button>
                            <button className="secondary">View Collection</button>
                        </div>

                        <div className="cards">
                            <div className="card">
                                <h3>Latest Trends</h3>
                                <p>Discover the newest fashion styles.</p>
                            </div>

                            <div className="card">
                                <h3>Affordable</h3>
                                <p>Quality fashion at great prices.</p>
                            </div>

                            <div className="card">
                                <h3>Fast Delivery</h3>
                                <p>Get your clothes quickly.</p>
                            </div>

                            <div className="card">
                                <h3>Premium Quality</h3>
                                <p>Only the best materials.</p>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <img src={right} alt="" />
                    </div>
                </div>
            </div>
            <div className="fashion">
                <div className="container">
                    <div className="text-top">
                        <div className="text">
                            <h1>Discover Fashion.</h1>
                            <p>
                                Dive into a world of fashion innovation at Klothink. Our carefully curated collections bring together the latest trends and timeless classics, ensuring you find the perfect pieces for every occasion.
                            </p>
                        </div>

                        <a href="">View All Products</a>
                    </div>
                    <div className="categories">
                        <div className="spisok">
                            <ul>
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => isActive ? "active" : ""}
                                        end
                                    >
                                        All
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/menswear"
                                        className={({ isActive }) => isActive ? "active" : ""}
                                    >
                                        Menswear
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/womenswear"
                                        className={({ isActive }) => isActive ? "active" : ""}
                                    >
                                        Womenswear
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/kidswear"
                                        className={({ isActive }) => isActive ? "active" : ""}
                                    >
                                        Kidswear
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="vibor">
                            <ul>
                                <li>
                                    <NavLink
                                        to="/casual"
                                        className={({ isActive }) => isActive ? "active" : ""}
                                    >
                                        Casual
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/formal"
                                        className={({ isActive }) => isActive ? "active" : ""}
                                    >
                                        Formal
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/party"
                                        className={({ isActive }) => isActive ? "active" : ""}
                                    >
                                        Party
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <div className="top">
                                    <img src={product} alt="" />
                                    <div className="cart">
                                        <img src={cart} alt="" />
                                    </div>
                                </div>
                                <div className="bottom">
                                    <h1>Classic Denim Jeans</h1>
                                    <p>$49.99</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="top">
                                    <img src={product} alt="" />
                                    <div className="cart">
                                        <img src={cart} alt="" />
                                    </div>
                                </div>
                                <div className="bottom">
                                    <h1>Classic Denim Jeans</h1>
                                    <p>$49.99</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="top">
                                    <img src={product} alt="" />
                                    <div className="cart">
                                        <img src={cart} alt="" />
                                    </div>
                                </div>
                                <div className="bottom">
                                    <h1>Classic Denim Jeans</h1>
                                    <p>$49.99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="experience">
                <div className="container">
                    <div className="top">
                        <div className="text">
                            <h1>The Klothink Experience.</h1>
                            <p>At Klothink, we breathe life into fashion, blending creativity with commitment. Our journey is fueled by a dedication to delivering unparalleled style and quality. Join us in redefining fashion and embracing a community where every purchase tells a story.</p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div className="top">
                                <div className="image">
                                    <img src={star} alt="" />
                                </div>
                                <h1>Passionate Craftsmanship</h1>
                            </div>
                            <div className="bottom">
                                <p>Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="top">
                                <div className="image">
                                    <img src={star} alt="" />
                                </div>
                                <h1>Passionate Craftsmanship</h1>
                            </div>
                            <div className="bottom">
                                <p>Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="top">
                                <div className="image">
                                    <img src={star} alt="" />
                                </div>
                                <h1>Passionate Craftsmanship</h1>
                            </div>
                            <div className="bottom">
                                <p>Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="top">
                                <div className="image">
                                    <img src={star} alt="" />
                                </div>
                                <h1>Passionate Craftsmanship</h1>
                            </div>
                            <div className="bottom">
                                <p>Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="top">
                                <div className="image">
                                    <img src={star} alt="" />
                                </div>
                                <h1>Passionate Craftsmanship</h1>
                            </div>
                            <div className="bottom">
                                <p>Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="top">
                                <div className="image">
                                    <img src={star} alt="" />
                                </div>
                                <h1>Passionate Craftsmanship</h1>
                            </div>
                            <div className="bottom">
                                <p>Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
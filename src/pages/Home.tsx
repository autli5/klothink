import { useRef } from "react"
import { NavLink } from "react-router-dom"

import "../styles/pages/Home.css"

import right from "../assets/right-panel.png"
import product from "../assets/product1.png"
import cart from "../assets/cart.svg"
import star from "../assets/star.svg"

export default function Home() {

    const scrollRef = useRef(null)

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({
            left: -300,
            behavior: "smooth"
        })
    }

    const scrollRight = () => {
        scrollRef.current?.scrollBy({
            left: 300,
            behavior: "smooth"
        })
    }

    return (
        <>
            <div className="elevate">
                <div className="container">
                    <div className="left">
                        <h1>Elevate Your Style with Klothink</h1>

                        <p>
                            Explore a world of fashion at Klothink, where trends meet affordability.
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
                            <p>Explore latest collections.</p>
                        </div>
                        <a href="">View All Products</a>
                    </div>

                    <div className="categories">

                        <div className="spisok">
                            <ul>
                                <li><NavLink to="/" end>All</NavLink></li>
                                <li><NavLink to="/menswear">Menswear</NavLink></li>
                                <li><NavLink to="/womenswear">Womenswear</NavLink></li>
                                <li><NavLink to="/kidswear">Kidswear</NavLink></li>
                            </ul>
                        </div>

                        <div className="vibor">
                            <ul>
                                <li><NavLink to="/casual">Casual</NavLink></li>
                                <li><NavLink to="/formal">Formal</NavLink></li>
                                <li><NavLink to="/party">Party</NavLink></li>
                            </ul>
                        </div>
                        <div className="cards-wrapper">
                            <div className="cards" ref={scrollRef}>
                                {[1,2,3,4,5].map((item) => (
                                    <div className="card" key={item}>
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
                                ))}
                            </div>

                            <div className="scroll-buttons">
                                <button onClick={scrollLeft}>◀</button>
                                <button onClick={scrollRight}>▶</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="experience">
                <div className="container">
                    <div className="top">
                        <h1>The Klothink Experience.</h1>
                    </div>

                    <div className="cards">
                        {[1,2,3,4,5,6].map((item) => (
                            <div className="card" key={item}>
                                <div className="top">
                                    <div className="image">
                                        <img src={star} alt="" />
                                    </div>
                                    <h1>Craftsmanship</h1>
                                </div>
                                <div className="bottom">
                                    <p>High quality materials.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
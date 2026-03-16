import "../styles/pages/Home.css"

import right from "../assets/right-panel.png"

export default function Home() {
    return (
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
    )
}
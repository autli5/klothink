import "../styles/pages/Products.css"

import mensWear from "../assets/mensWear.svg"
import womensWear from "../assets/womensWear.svg"
import kidsWear from "../assets/kidsWear.svg"


export default function Products() {
    return (
        <div className="productDiscover">
            <div className="container">

                <div className="topText">

                    <div className="left">
                        <div className="titleRow">
                            <h1>Discower now</h1>
                        </div>

                        <p>
                            Dive into the world of fashion excellence at Klothink.
                            Our curated selection brings together the latest trends
                            and timeless classics.
                        </p>
                    </div>

                    <div className="right">
                        <div className="infoCards">

                            <div className="infoCard">
                                <h3>Exclusive Offers</h3>
                                <p>30% off on select items</p>
                            </div>

                            <div className="infoCard">
                                <h3>New Arrivals</h3>
                                <p>50+ new arrivals daily</p>
                            </div>

                            <div className="infoCard">
                                <h3>Over 1,500 +</h3>
                                <p>curated fashion products</p>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="filters">
                    <button>All</button>
                    <button className="active"><img src={mensWear} alt="" />Men's wear</button>
                    <button><img src={womensWear} alt="" />Women's wear</button>
                    <button><img src={kidsWear} alt="" />Kid's wear</button>
                </div>

            </div>
        </div>
    )
}
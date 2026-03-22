import "../styles/pages/Products.css"
import { useState, useRef } from "react"

import product from "../assets/product1.png"
import cart from "../assets/cart.svg"

import mensWear from "../assets/mensWear.svg"
import womensWear from "../assets/womensWear.svg"
import kidsWear from "../assets/kidsWear.svg"

import { categories } from "../data/products"

export default function Products() {
    const [activeFilter, setActiveFilter] = useState("all")

    // 🔥 refs для каждой категории
    const refs = useRef({})

    const scroll = (id, direction) => {
        const el = refs.current[id]
        if (!el) return

        const card = el.querySelector(".card")
        const gap = 30
        const width = card?.offsetWidth || 300

        el.scrollBy({
            left: direction * (width + gap),
            behavior: "smooth"
        })
    }

    return (
        <div className="productDiscover">
            <div className="container">

                {/* 🔝 TOP */}
                <div className="topText">
                    <div className="left">
                        <div className="titleRow">
                            <h1>Discover now</h1>
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

                {/* 🔘 FILTERS */}
                <div className="filters">
                    <button
                        className={`filterBtn ${activeFilter === "all" ? "active" : ""}`}
                        onClick={() => setActiveFilter("all")}
                    >
                        All
                    </button>

                    <button
                        className={`filterBtn ${activeFilter === "mens" ? "active" : ""}`}
                        onClick={() => setActiveFilter("mens")}
                    >
                        <img src={mensWear} alt="" />
                        Men's wear
                    </button>

                    <button
                        className={`filterBtn ${activeFilter === "womens" ? "active" : ""}`}
                        onClick={() => setActiveFilter("womens")}
                    >
                        <img src={womensWear} alt="" />
                        Women's wear
                    </button>

                    <button
                        className={`filterBtn ${activeFilter === "kids" ? "active" : ""}`}
                        onClick={() => setActiveFilter("kids")}
                    >
                        <img src={kidsWear} alt="" />
                        Kid's wear
                    </button>
                </div>

                {/* 🔥 КАТЕГОРИИ (без копипасты) */}
                {categories.map((cat) => (
                    <div className="categories" key={cat.id}>
                        <h1>{cat.title}</h1>
                        <p>{cat.description}</p>

                        <div className="cards-wrapper">
                            <div
                                className="cards"
                                ref={(el) => (refs.current[cat.id] = el)}
                            >
                                {cat.products.map((item, index) => (
                                    <div className="card" key={index}>
                                        <div className="top">
                                            <img src={product} alt="" />
                                            <div className="cart">
                                                <img src={cart} alt="" />
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <h1>{item.title}</h1>
                                            <p>{item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="scroll-buttons">
                                <button onClick={() => scroll(cat.id, -1)}>◀</button>
                                <button onClick={() => scroll(cat.id, 1)}>▶</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
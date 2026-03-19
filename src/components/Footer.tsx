import "../styles/components/Footer.css";

import logo from "../assets/Logo.svg"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-top">
                
                {/* Лого + подписка */}
                <div className="footer-left">
                    <div className="logo">
                        <div className="logo-box"><img src={logo} alt="" /></div>
                    </div>

                    <div className="subscribe">
                        <input type="email" placeholder="Enter Your Email" />
                        <button>Subscribe</button>
                    </div>
                </div>

                {/* Колонки */}
                <div className="footer-links">
                    <div>
                        <h4>Home</h4>
                        <a href="#">Features</a>
                        <a href="#">Popular Products</a>
                        <a href="#">Testimonials</a>
                        <a href="#">FAQ</a>
                    </div>

                    <div>
                        <h4>Menswear</h4>
                        <a href="#">Casual</a>
                        <a href="#">Formal</a>
                        <a href="#">Party</a>
                        <a href="#">Business</a>
                    </div>

                    <div>
                        <h4>Womenswear</h4>
                        <a href="#">Casual</a>
                        <a href="#">Formal</a>
                        <a href="#">Party</a>
                        <a href="#">Business</a>
                    </div>

                    <div>
                        <h4>Kidswear</h4>
                        <a href="#">Casual</a>
                        <a href="#">Formal</a>
                        <a href="#">Party</a>
                    </div>
                </div>
            </div>

            {/* Нижняя часть */}
            <div className="footer-bottom container">
                <div className="footer-terms">
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>

                <div className="footer-socials">
                    <span>●</span>
                    <span>●</span>
                    <span>●</span>
                </div>

                <div className="footer-copy">
                    © 2024 YourBrand. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
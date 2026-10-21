import Link from "next/link";
import "./footer.css";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-main">
                    <div className="footer-column footer-company">
                        <h3>AMAZING GLOVES</h3>

                        <p>
                            Amazing Rubber Products Pvt. Ltd. – Top Latex
                            Glove Manufacturer in India based at CSEZ
                            Kakkanad & Perumbavoor, Kerala.
                        </p>
                    </div>

                    <div className="footer-column footer-links">
                        <h3>Quick Links</h3>

                        <ul>
                            <li>
                                <Link href="/about-us">About Us</Link>
                            </li>
                            <li>
                                <Link href="/products">Products</Link>
                            </li>
                            <li>
                                <Link href="/career">Careers</Link>
                            </li>
                            <li>
                                <Link href="/quality">Quality</Link>
                            </li>
                            <li>
                                <Link href="/resources">Resources</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column footer-connect">
                        <h3>Let's Connect</h3>

                        <ul>
                            <li>
                                <a href="tel:+916238742481">
                                    <i className="bi bi-telephone-fill"></i>
                                    <span>+91 6238742481</span>
                                </a>
                            </li>

                            <li>
                                <a href="mailto:marketing@amazingglove.com">
                                    <i className="bi bi-envelope-fill"></i>
                                    <span>marketing@amazingglove.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column footer-headquarters">
                        <h3>Headquarters</h3>

                        <p>
                            Amazing Rubber Products Pvt. Ltd., Plot No.
                            14 C Cochin Special Economic Zone,
                            Cochin, Kerala, India
                        </p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-address">
                        Amazing Rubber Products Pvt. Ltd., Plot No. 14 C
                        Cochin Special Economic Zone, Cochin, Kerala, India
                    </p>

                    <p className="footer-copyright">
                        © 2026 Amazing Rubber Products Pvt. Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
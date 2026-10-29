
import Link from "next/link";
import "./footer.css";
import CurrentYear from "./CurrentYear";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-top-glow"></div>

            <div className="container">
                <div className="footer-cta">
                    <div className="footer-cta-content">
                        <span className="footer-eyebrow">
                            <span className="footer-status-dot"></span>
                            QUALITY YOU CAN TRUST
                        </span>

                        <h2>
                            Protecting Hands.
                            <br />
                            <span>Delivering Excellence.</span>
                        </h2>

                        <p>
                            Discover reliable medical and industrial glove
                            solutions manufactured with quality, precision,
                            and care.
                        </p>
                    </div>

                    <div className="footer-cta-action">
                        <Link href="/contact" className="footer-cta-button">
                            Get in Touch
                            <i className="bi bi-arrow-up-right"></i>
                        </Link>

                        <span className="footer-cta-note">
                            We&apos;re here to help you.
                        </span>
                    </div>

                    <div className="footer-cta-decoration">
                        <i className="bi bi-shield-check"></i>
                    </div>
                </div>

                <div className="footer-main">
                    <div className="footer-column footer-company">
                        <Link href="/" className="footer-brand">
                          <img src="/white-logo.png"></img>
                        </Link>

                        <p className="footer-company-description">
                            Amazing Rubber Products Pvt. Ltd. is a trusted
                            latex glove manufacturer in India, based at CSEZ
                            Kakkanad and Perumbavoor, Kerala.
                        </p>

                        <div className="footer-socials">
                            <a
                                href="https://www.linkedin.com/company/amazing-rubber-products-pvt-ltd/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <i className="bi bi-linkedin"></i>
                            </a>

                            <a
                                href="https://www.facebook.com/people/Amazing-Rubber-Products-Private-Limited/61551572092311/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <i className="bi bi-facebook"></i>
                            </a>

                            <a
                               href="https://www.instagram.com/amazing_rubber_products/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>


                    <div className="footer-column footer-links">
                        <h3 className="footer-heading">
                            Explore
                            <span className="footer-heading-line"></span>
                        </h3>

                        <ul>
                            <li>
                                <Link href="/aboutus">
                                    <i className="bi bi-arrow-right-short"></i>
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link href="/products">
                                    <i className="bi bi-arrow-right-short"></i>
                                    Our Products
                                </Link>
                            </li>

                            <li>
                                <Link href="/certificates">
                                    <i className="bi bi-arrow-right-short"></i>
                                    Certificates
                                </Link>
                            </li>

                            <li>
                                <Link href="/quality">
                                    <i className="bi bi-arrow-right-short"></i>
                                    Quality
                                </Link>
                            </li>

                            <li>
                                <Link href="/career">
                                    <i className="bi bi-arrow-right-short"></i>
                                    Careers
                                </Link>
                            </li>

                            <li>
                                <Link href="/resources">
                                    <i className="bi bi-arrow-right-short"></i>
                                    Resources
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column footer-connect">
                        <h3 className="footer-heading">
                            Contact Us
                            <span className="footer-heading-line"></span>
                        </h3>

                        <p className="footer-section-description">
                            Have a question or business enquiry? Let&apos;s
                            connect.
                        </p>

                        <ul>
                            <li>
                                <span className="footer-contact-icon">
                                    <i className="bi bi-telephone"></i>
                                </span>

                                <div>
                                    <small>Call Us</small>

                                    <a href="tel:+916238742481">
                                        +91 62387 42481
                                    </a>
                                </div>
                            </li>

                            <li>
                                <span className="footer-contact-icon">
                                    <i className="bi bi-envelope"></i>
                                </span>

                                <div>
                                    <small>Email Us</small>

                                    <a href="mailto:marketing@amazingglove.com">
                                        marketing@amazingglove.com
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column footer-headquarters">
                        <h3 className="footer-heading">
                            Our Location
                            <span className="footer-heading-line"></span>
                        </h3>

                        <div className="footer-location-card">
                            <div className="footer-location-icon">
                                <i className="bi bi-geo-alt"></i>
                            </div>

                            <div>
                                <h4>Headquarters</h4>

                                <p>
                                    Amazing Rubber Products Pvt. Ltd.
                                    <br />
                                    Plot No. 14C, Cochin Special Economic Zone,
                                    <br />
                                    Kakkanad, Kochi, Kerala 682037, India.
                                </p>
                            </div>
                        </div>

                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Amazing+Rubber+Products+Pvt+Ltd+Plot+No+14C+CSEZ+Kakkanad+Kochi+Kerala+682037"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-map-link"
                        >
                            View on Google Maps
                            <i className="bi bi-arrow-up-right"></i>
                        </a>
                    </div>
                </div>


                <div className="footer-bottom">
                    <p className="footer-copyright">
    © <CurrentYear /> Amazing Rubber Products Pvt. Ltd.
    All rights reserved.
</p>

                    <div className="footer-bottom-center">
                        <span>
                            <i className="bi bi-shield-check"></i>
                            Quality. Safety. Reliability.
                        </span>
                    </div>

                    <div className="footer-bottom-links">
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <span className="footer-bottom-divider"></span>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

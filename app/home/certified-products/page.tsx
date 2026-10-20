import "./certififed-products.css";

function CertifiedProducts() {
    return (
        <section className="certified-products">
            <div className="certified-products-container">

                <div className="certified-products-heading">
                    <h2>Our Certified Products</h2>
                    <p>
                        From examination gloves to surgical ones, every product
                        in our portfolio is clean, FDA, and US-ISO certified,
                        fully complying with international safety standards to
                        ensure safety for healthcare workers, medical staff,
                        and patients during medical tests.
                    </p>
                </div>

                <div className="row certified-products">
                    <div className="col-lg-3 col-md-3 col-12 certified-products">
                        <article className="certified-products-card">
                            <div className="certified-products-image">
                                <img
                                    src="/surgical-gloves.png"
                                    alt="Surgical gloves"
                                />
                                <span className="certified-products-badge">
                                    STERILE GRADE
                                </span>
                                <span className="certified-products-category">
                                    Cat. 01
                                </span>
                            </div>

                            <div className="certified-products-content">
                                <h3>Surgical Gloves</h3>
                                <p className="certified-products-description">
                                    Sterile, single-use models in latex and nitrile.
                                </p>

                                <div className="certified-products-details">
                                    <div className="certified-products-detail">
                                        <span>Variations:</span>
                                        <strong>Latex &amp; Nitrile options</strong>
                                    </div>
                                    <div className="certified-products-detail">
                                        <span>Sizes Available:</span>
                                        <strong>6.0 – 8.5</strong>
                                    </div>
                                    <div className="certified-products-detail">
                                        <span>Standard:</span>
                                        <strong className="certified-products-quality">
                                            <span className="certified-products-dot"></span>
                                            AQL &lt; 0.65 Sterile
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="col-lg-3 col-md-3 col-12 certified-products">
                        <article className="certified-products-card">
                            <div className="certified-products-image">
                                <img
                                    src="/gynacology.jpg"
                                    alt="Gynaecological gloves"
                                />
                                <span className="certified-products-badge certified-products-badge-pink">
                                    480MM EXTRA LENGTH
                                </span>
                                <span className="certified-products-category">
                                    Cat. 02
                                </span>
                            </div>

                            <div className="certified-products-content">
                                <h3>Gynaecological Gloves</h3>
                                <p className="certified-products-description">
                                    Extra-length latex options for obstetrics
                                    and gynaecology.
                                </p>

                                <div className="certified-products-details">
                                    <div className="certified-products-detail">
                                        <span>Variations:</span>
                                        <strong>Latex &amp; Nitrile</strong>
                                    </div>
                                    <div className="certified-products-detail">
                                        <span>Specs / Length:</span>
                                        <strong>480mm Extra Length</strong>
                                    </div>
                                    <div className="certified-products-detail">
                                        <span>Sizes Available:</span>
                                        <strong>7.0 – 8.0 / S - XL</strong>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="col-lg-3 col-md-3 col-12 certified-products">
                        <article className="certified-products-card">
                            <div className="certified-products-image">
                                <img
                                    src="/brown.png"
                                    alt="Brown orthopaedic gloves"
                                />
                                <span className="certified-products-badge certified-products-badge-brown">
                                    ANTI-GLARE BROWN
                                </span>
                                <span className="certified-products-category">
                                    Cat. 03
                                </span>
                            </div>

                            <div className="certified-products-content">
                                <h3>Orthopaedic Gloves</h3>
                                <p className="certified-products-description">
                                    Brown latex gloves for specialised
                                    surgical applications.
                                </p>

                                <div className="certified-products-details">
                                    <div className="certified-products-detail">
                                        <span>Material:</span>
                                        <strong>Heavy Duty Brown Latex</strong>
                                    </div>
                                    <div className="certified-products-detail">
                                        <span>Formulation:</span>
                                        <strong>Powder Free</strong>
                                    </div>
                                    <div className="certified-products-detail">
                                        <span>Sizes Available:</span>
                                        <strong>6.0 – 8.5</strong>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12 certified-products">
                        <article className="certified-products-card">
                            <div className="certified-products-image">
                                <img
                                    src="/white.jpg"
                                    alt="Examination gloves"
                                />
                                <span className="certified-products-badge certified-products-badge-blue">
                                    CLINICAL GRADE
                                </span>
                                <span className="certified-products-category">
                                    Cat. 04
                                </span>
                            </div>

                            <div className="certified-products-content">
                                <h3>Examination Gloves</h3>
                                <p className="certified-products-description">
                                    Latex and nitrile options for clinical examinations.
                                </p>

                                <div className="certified-products-details">
                                    <div className="certified-products-detail">
                                        <span>Variations:</span>
                                        <strong>Latex &amp; Nitrile options</strong>
                                    </div>
                                    <div className="certified-products-detail">
                                        <span>Formulation:</span>
                                        <strong>Pre-Powdered &amp; Powder Free</strong>
                                    </div>
                                    <div className="certified-products-detail">
                                        <span>Sizes Available:</span>
                                        <strong>S / M / L</strong>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default CertifiedProducts;
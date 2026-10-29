import "./certified-standard.css";

function CertifiedStandard() {
    return (
        <section className="certified-standard">
            <div className="container certified-standard-container">
                {/* <div className="certified-standard-heading">
                    <h2>Internationally Certified Standards</h2>
                    <p>
                        Our gloves are CE, US-FDA, and ISO certified, ensuring
                        the highest standards of safety and quality.
                    </p>
                </div> */}

                <div className="certified-standard-grid">
                    <div className="certified-standard-column certified-standard-column-left">
                        <article className="standard-card standard-card-purity">
                            <p className="standard-card-description">
                                Our unwavering quality ensures you receive
                                top-purity chemicals, always meeting your
                                standards.
                            </p>

                            <div className="standard-card-bottom">
                                <h3>99.8%</h3>
                                <span>Product Purity</span>
                            </div>
                        </article>

                        <div className="standard-card standard-card-lab">
                            <img
                                src="/tube.jpg"
                                alt="Laboratory equipment and chemical testing"
                            />
                        </div>
                    </div>

                    <article className="standard-card standard-card-rate">
                        <img
                            src="/blue.jpg"
                            alt="Quality expert wearing protective equipment"
                        />

                        <div className="standard-card-overlay">
                            <div className="standard-card-stat">
                                <h3>98%</h3>
                                <span>On-Time Rate</span>
                            </div>

                            <p className="standard-card-bottom-description">
                                You can rely on us to keep your operations
                                running smoothly without delays.
                            </p>
                        </div>
                    </article>

                    <div className="certified-standard-column certified-standard-column-right">
                        <div className="standard-card standard-card-research">
                            <img
                                src="/lab.jpg"
                                alt="Scientist performing laboratory research"
                            />
                        </div>

                        <article className="standard-card standard-card-deliveries">
                            <div className="standard-card-stat">
                                <h3>300+</h3>
                                <span>Deliveries</span>
                            </div>

                            <p className="standard-card-bottom-description">
                                Join countless satisfied customers who’ve
                                relied on our consistent, expert deliveries.
                            </p>
                        </article>
                    </div>
                </div>
            </div>

           


        </section>
    );
}

export default CertifiedStandard;
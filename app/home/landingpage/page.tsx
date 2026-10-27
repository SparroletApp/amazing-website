
import "./landing-page.css";

function LandingPage() {
    return (
        <main className="landing-home">
            
            <section className="landing-page" id="home">
                <div className="landing-overlay"></div>

                <div className="container landing-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-12">
                            <div className="landing-content">
                                <span className="orange-line"></span>

                                <h1>
                                    Precision in
                                    <br />
                                    every <span>touch.</span>
                                </h1>

                                <p className="landing-subtitle">
                                    Shielding Hands, Building Partnerships
                                </p>

                                <div className="brand-label">
                                    OUR BRANDS
                                </div>

                                <div className="brand-list">
                                    <span>AMAZING</span>
                                    <span>AMCARE</span>
                                    <span>AMGRACE</span>
                                    <span>SAFE N CARE</span>
                                </div>

                                <a href="/products" className="explore-button">
                                    Explore Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default LandingPage;

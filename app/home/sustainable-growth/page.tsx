
"use client";

import { useRouter } from "next/navigation";
import "./sustainable-growth.css";

function SustainableGrowth() {
    const router = useRouter();
    
    return (
        <>
            <section className="sustainable-growth">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="trusted-partner">
                                <div className="about-badge">
                                    ABOUT NEXORA
                                </div>
                                <h1>Your Trusted Partner<br />
                                    for <span>Sustainable Growth</span></h1>
                                <div className="trusted-desc">
                                    At Nexora, we combine innovation, expertise, and collaboration to help
                                    businesses unlock new opportunities and achieve long-term success.
                                </div>
                                <div className="client-classify">
                                    <div className="client-pair">
                                        <span><i className="bi bi-check-circle"></i></span>Client-Centric Approach
                                    </div>
                                    <div className="client-pair">
                                        <span><i className="bi bi-check-circle"></i></span>Proven Track Record
                                    </div>
                                    <div className="client-pair">
                                        <span><i className="bi bi-check-circle"></i></span>Commitment to Excellence
                                    </div>
                                </div>

                                <div className="learn-more-btn">
                                    <button  onClick={() => router.push("/aboutus")}>Learn More About Us</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="sustainable-img">
                                <img src="/building.jpg" />
                                <div className="free-card">
                                    <h2>15+</h2>
                                    <h4>Years of Experience</h4>
                                    <p>Delivering value and building lasting
                                        partnerships.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SustainableGrowth;
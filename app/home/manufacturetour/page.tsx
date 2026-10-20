"use client";

import { useState } from "react";
import "./manufacturetour.css";

function ManufactureTour() {
    const [isPlaying, setIsPlaying] = useState(false);

    const videoUrl = "/vedio.crdownload";
    const thumbnailUrl = "/thumbnail.jpg";

    const features = [
        {
            icon: "bi bi-buildings-fill",
            title: "Automated Dipping",
            description: "25 high-precision lines",
        },
        {
            icon: "bi bi-shield-check",
            title: "100% Air Leak Tested",
            description: "Zero hole defect tolerance",
        },
        {
            icon: "bi bi-box-seam-fill",
            title: "Sterile Packaging",
            description: "Gamma & EtO sterilized units",
        },
    ];

    return (
        <section className="manufacture-tour">
            <div className="manufacture-tour-container">

                <div className="manufacture-tour-heading">
                    <span className="manufacture-tour-eyebrow">
                        FACILITY &amp; MANUFACTURING TOUR
                    </span>

                    <h2>
                        See How We Manufacture Millions of
                        <br />
                        Certified Medical Gloves
                    </h2>

                    <p>
                        Take a virtual walk through our advanced automatic dipping
                        lines and cleanroom packaging at Cochin Special Economic
                        Zone (CSEZ).
                    </p>
                </div>

                <div className="manufacture-tour-video-wrapper">
                    {isPlaying ? (
                        <video
                            className="manufacture-tour-video"
                            src={videoUrl}
                            controls
                            autoPlay
                            playsInline
                            onEnded={() => setIsPlaying(false)}
                        >
                            Your browser does not support video playback.
                        </video>
                    ) : (
                        <button
                            type="button"
                            className="manufacture-tour-video-card"
                            style={{
                                backgroundImage: `linear-gradient(
                                    90deg,
                                    rgba(0, 48, 57, 0.78) 0%,
                                    rgba(0, 65, 74, 0.48) 55%,
                                    rgba(0, 48, 57, 0.42) 100%
                                ), url("${thumbnailUrl}")`,
                            }}
                            onClick={() => setIsPlaying(true)}
                            aria-label="Play manufacturing and inspection video"
                        >
                            <span className="manufacture-tour-play-button">
                                <i className="bi bi-play-fill"></i>
                            </span>

                            <span className="manufacture-tour-video-content">
                                <span className="manufacture-tour-video-title">
                                    Watch Our Plant Production &amp; Inspection Video
                                </span>

                                <span className="manufacture-tour-video-description">
                                    Automated dipping, continuous online leaching
                                    and AQL 1.0 air leak testing
                                </span>
                            </span>
                        </button>
                    )}
                </div>

                <div className="manufacture-tour-features">
                    {features.map((feature) => (
                        <div
                            className="manufacture-tour-feature-card"
                            key={feature.title}
                        >
                            <div className="manufacture-tour-feature-icon">
                                <i className={feature.icon}></i>
                            </div>

                            <div className="manufacture-tour-feature-content">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default ManufactureTour;

"use client";

import { useState } from "react";
import "./certificates.css";

function Certificates() {
    const [selectedCertificate, setSelectedCertificate] =
        useState<null | {
            icon: string;
            title: string;
            description: string;
            image: string;
            pdf: string;
        }>(null);

    const certificates = [
        {
            icon: "bi-shield-shaded",
            title: "CE 2460 Certification",
            description:
                "Compliant with European Medical Device Regulation (MDR 2017/745) and EN 455 Parts 1, 2, 3, and 4 for freedom from holes and force at break.",
            image: "/ce-certificate.png",
            pdf: "/ce-certificate.pdf",
        },
        {
            icon: "bi-patch-check-fill",
            title: "ISO 13485:2016 Certified",
            description:
                "Specific Quality Management System for Medical Devices governing manufacturing process control and bio-compatibility testing.",
            image: "/iso-certificate.png",
            pdf: "/iso-certificate.pdf",
        },
        {
            icon: "bi-award-fill",
            title: "US-FDA 510(k) Cleared",
            description:
                "Cleared by the United States Food and Drug Administration for medical diagnostic and surgical applications.",
            image: "/fda-certificate.png",
            pdf: "/fda-certificate.pdf",
        },
        {
            icon: "bi-check-square-fill",
            title: "GMP Compliant",
            description:
                "Good Manufacturing Practice compliance ensuring cleanroom standards, automated continuous online leaching, and AQL 1.0 testing.",
            image: "/gmp-certificate.png",
            pdf: "/gmp-certificate.pdf",
        },
    ];

    const closePopup = () => {
        setSelectedCertificate(null);
    };

    return (
        <section className="certificates">
            <div className="aboutes-headers">
                <div className="container">
                    <div className="products-breadcrumb">
                        <span>Home</span>
                        <i className="bi bi-chevron-right"></i>
                        <span>Certificates</span>
                    </div>
                    <div className="products-eyebrow">
                        QUALITY COMPLIANCE
                    </div>

                    <h1>Committed to Excellence in Medical Glove Manufacturing</h1>

                    <p>
                        Our gloves are CE, US-FDA, ISO 13485:2016, and GMP
                        certified, ensuring world-class safety and protection.
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {certificates.map((certificate, index) => (
                        <div
                            className="col-lg-6 col-md-6 col-12"
                            key={index}
                        >
                            <div className="certificate-card">
                                <div className="certificate-icon">
                                    <i
                                        className={`bi ${certificate.icon}`}
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <h3>{certificate.title}</h3>

                                <p>{certificate.description}</p>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setSelectedCertificate(certificate)
                                    }
                                >
                                    View Certificate Details
                                    <i className="bi bi-arrow-up-right ms-2"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedCertificate && (
                <div
                    className="certificate-modal-overlay"
                    onClick={closePopup}
                >
                    <div
                        className="certificate-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="certificate-modal-title"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="certificate-modal-header">
                            <div>
                                <span className="certificate-modal-label">
                                    QUALITY CERTIFICATION
                                </span>

                                <h2 id="certificate-modal-title">
                                    {selectedCertificate.title}
                                </h2>
                            </div>

                            <button
                                type="button"
                                className="certificate-modal-close"
                                onClick={closePopup}
                                aria-label="Close certificate details"
                            >
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </div>

                        <div className="certificate-modal-image">
                            <img
                                src={selectedCertificate.image}
                                alt={`${selectedCertificate.title} certificate preview`}
                            />
                        </div>

                        <div className="certificate-modal-content">
                            <h3>
                                <i className="bi bi-patch-check-fill"></i>
                                {" "}{selectedCertificate.title}
                            </h3>

                            <p>{selectedCertificate.description}</p>

                            <div className="certificate-modal-footer">
                                <div className="certificate-pdf-info">
                                    <i className="bi bi-file-earmark-pdf-fill"></i>
                                    <div>
                                        <strong>Certificate Document</strong>
                                        <span>PDF Document</span>
                                    </div>
                                </div>

                                <a
                                    href={selectedCertificate.pdf}
                                    download
                                    className="certificate-download-btn"
                                >
                                    <i className="bi bi-download"></i>
                                    Download PDF
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Certificates;
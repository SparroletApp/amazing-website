
"use client";

import { useState } from "react";
import "./resources.css";

const galleryImages = [
    {
        src: "/image1.png",
        alt: "Microscopic virus research",
    },
    {
        src: "/image2.png",
        alt: "Medical equipment and stethoscope",
    },
    {
        src: "/image3.png",
        alt: "Glove manufacturing process",
    },
    {
        src: "/image4.png",
        alt: "Medical bottles and healthcare supplies",
    },
    {
        src: "/image5.png",
        alt: "Modern hospital room",
    },
    {
        src: "/image6.png",
        alt: "Manufacturing facility interior",
    },
    {
        src: "/image7.png",
        alt: "Medical glove quality testing",
    },
    {
        src: "/image8.png",
        alt: "Factory production line",
    },
];

const faqs = [
    {
        question: "What types of medical gloves do you offer?",
        answer:
            "We offer Latex Surgical Gloves (Powdered & Powder-Free), Nitrile Examination Gloves, Gynecological 400mm Extended Cuff Gloves, Orthopaedic Duty Gloves, and Micro Surgical Gloves.",
    },
    {
        question: "Are your gloves US-FDA/CE/ISO certified?",
        answer:
            "Our products are manufactured to meet applicable quality and safety standards. Please contact our team for product-specific certifications and documentation.",
    },
    {
        question: "What industries can use your gloves?",
        answer:
            "Our gloves are suitable for hospitals, clinics, laboratories, healthcare facilities, medical distributors, and other applications depending on the glove type.",
    },
    {
        question: "How do I choose the right glove material?",
        answer:
            "The right material depends on the application, required protection, user sensitivity, and intended use. Contact our team for assistance selecting a suitable product.",
    },
    {
        question: "How should I store medical gloves?",
        answer:
            "Store gloves in their original packaging in a cool, dry place, away from direct sunlight, excessive heat, moisture, and chemicals. Follow the storage instructions on the packaging.",
    },
    {
        question: "How can I place an order or request a quote?",
        answer:
            "Visit our Contact page or use the Request Quote option to share your product requirements. Our team will get in touch with you.",
    },
];

function Resources() {
    const [activeFaq, setActiveFaq] = useState(0);

    return (
        <main className="resources">
            {/* Header */}
            <section className="resources-header">
                <div
                    className="resources-header-image"
                    aria-hidden="true"
                />

                <div className="container resources-header-content">
                    <div className="products-breadcrumb">
                        <span>Home</span>
                        <i className="bi bi-chevron-right" />
                        <span>Resources</span>
                    </div>

                    <div className="products-eyebrow">
                        EXPLORE OUR FACILITY
                    </div>

                    <h1>
                        Discover Our Advanced Surgical Gloves
                        <br />
                        Manufacturing
                    </h1>

                    <p>
                        Discover our manufacturing facility at Cochin Special
                        Economic Zone (CSEZ).
                    </p>
                </div>
            </section>

            {/* Gallery */}
            <section className="resources-gallery">
                <div className="container">
                    <div className="resources-heading">
                        <h2>Gallery</h2>
                        <p>
                            A glimpse into our journey from state-of-the-art
                            dipping lines to strict quality testing and
                            glove production.
                        </p>
                    </div>

                    <div className="row resources-gallery-grid">
                        {galleryImages.map((image) => (
                            <div
                                className="col-lg-3 col-md-6 col-6"
                                key={image.src}
                            >
                                <div className="resources-gallery-card">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="resources-faq">
                <div className="container">
                    <div className="resources-heading resources-faq-heading">
                        <span className="resources-faq-eyebrow">
                            NEED TO KNOW?
                        </span>

                        <h2>Frequently Asked Questions</h2>

                        <p>
                            Find answers to common questions about our medical
                            gloves, quality standards, and ordering process.
                        </p>
                    </div>

                    <div className="resources-faq-layout">
                        <div
                            className="resources-faq-questions"
                            role="group"
                            aria-label="Frequently asked questions"
                        >
                            {faqs.map((faq, index) => (
                                <div
                                    className={`resources-faq-item ${activeFaq === index ? "active" : ""
                                        }`}
                                    key={faq.question}
                                >
                                    <button
                                        type="button"
                                        className={`resources-faq-question ${activeFaq === index ? "active" : ""
                                            }`}
                                        onClick={() =>
                                            setActiveFaq(
                                                activeFaq === index ? -1 : index
                                            )
                                        }
                                        aria-expanded={activeFaq === index}
                                    >
                                        <span className="resources-faq-number">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="resources-faq-question-text">
                                            {faq.question}
                                        </span>

                                        <i
                                            className={`bi ${activeFaq === index
                                                    ? "bi-dash-lg"
                                                    : "bi-plus-lg"
                                                } resources-faq-arrow`}
                                            aria-hidden="true"
                                        />
                                    </button>

                                    <div
                                        className={`resources-faq-mobile-answer ${activeFaq === index ? "show" : ""
                                            }`}
                                        aria-hidden={activeFaq !== index}
                                    >
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="resources-faq-answer-panel">
                            {activeFaq >= 0 && (
                                <>
                                    <div className="resources-faq-answer-icon">
                                        <i
                                            className="bi bi-patch-question"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <span className="resources-faq-answer-label">
                                        ANSWER TO QUESTION{" "}
                                        {String(activeFaq + 1).padStart(2, "0")}
                                    </span>

                                    <h3>{faqs[activeFaq].question}</h3>

                                    <div className="resources-faq-answer-divider" />

                                    <p>{faqs[activeFaq].answer}</p>

                                    <div className="resources-faq-answer-footer">
                                        <i
                                            className="bi bi-check-circle"
                                            aria-hidden="true"
                                        />

                                        <span>
                                            Need more information? Contact our team
                                            for assistance.
                                        </span>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}

export default Resources;

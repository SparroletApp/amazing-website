
import "./quality.css";

function Quality() {
    const sterilizationChecks = [
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none">
                    <circle cx="17" cy="24" r="10" stroke="currentColor" strokeWidth="2.2" />
                    <circle cx="31" cy="24" r="10" stroke="currentColor" strokeWidth="2.2" />
                    <path d="m12 24 4 4 6-8M26 24l4 4 6-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Correctness in Pairing",
            description: "Every pair is checked to ensure accurate pairing and consistency."
        },
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none">
                    <rect x="10" y="6" width="28" height="36" rx="4" stroke="currentColor" strokeWidth="2.2" />
                    <path d="M17 16h14M17 23h14M17 30h7m5 4 3 3 5-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Correctness of Marking",
            description: "Pouch and box markings are checked for accurate product identification."
        },
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none">
                    <path d="M24 5 40 12v12c0 10-7 16-16 19C15 40 8 34 8 24V12L24 5Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
                    <path d="m16 24 5 5 11-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Type, Size & Quality",
            description: "Glove type, size and quality are verified against the customer order."
        },
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none">
                    <path d="m24 5 18 10-18 10L6 15 24 5Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
                    <path d="M6 15v19l18 10 18-10V15M24 25v19M15 20l18-10" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
                </svg>
            ),
            title: "Packaging Materials",
            description: "Packaging materials are checked for suitability, protection and product integrity."
        },
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.2" />
                    <path d="M15 24l6 6 12-13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Inspection Compliance",
            description: "Previous inspections and required test results are reviewed for compliance."
        },
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none">
                    <path d="M9 9h30v30H9z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
                    <path d="m15 29 6-6 5 4 8-10M15 15h6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="m29 17 5 0v5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Correct Stamping",
            description: "Stamping particulars are verified for accuracy and completeness."
        },
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none">
                    <path d="M24 5 41 15v18L24 43 7 33V15L24 5Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
                    <path d="m16 24 5 5 11-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Grade Specifications",
            description: "Gloves are checked against the specifications of their relevant grade."
        }
    ];

    const qualitySections = [
        {
            id: "quality-control",
            number: "01",
            label: "OUR QUALITY STANDARDS",
            title: "Quality Control at Every Stage",
            description:
                "In addition to standard airtight and watertight tests, every batch undergoes rigorous quality inspections to ensure reliability and consistency. Our quality control process includes visual inspection, AQL testing, laboratory evaluations, and microbiological assessments to help ensure that our gloves meet the required quality standards.",
            image: "/quality.jpg",
            imageAlt: "Quality inspection of medical gloves",
            imagePosition: "left",
        },
        {
            id: "manufacturing",
            number: "02",
            label: "PRECISION IN PRODUCTION",
            title: "Precision in Every Step of Manufacturing",
            description:
                "Our manufacturing process combines precision, consistency, and stringent quality practices to deliver dependable medical gloves. From production to final inspection, each stage is carefully managed to maintain product quality and meet the requirements of our customers.",
            image: "/manufacture.jpg",
            imageAlt: "Medical glove manufacturing facility",
            imagePosition: "right",
        },
        {
            id: "sterilization",
            number: "03",
            label: "SAFETY THROUGH PROCESSING",
            title: "Advanced Sterilization for Product Safety",
            description:
                "State-of-the-art PLC-controlled ETO sterilization plants with a double-door system are validated to ISO 11135 requirements. Each process cycle is monitored using biological indicators, and air-wash cycles help reduce residual ethylene oxide on gloves. Selected packaging materials are suitable for ETO sterilization and help maintain sterility during transit and storage throughout the product's shelf life. Sterilized gloves are tested in the in-house microbiological laboratory. Through Gamma Tech India Private Limited, Kanam also has access to in-house gamma sterilization.",
            image: "/sterilization.jpg",
            imageAlt: "Medical product sterilization facility",
            imagePosition: "left",
        },
        {
            id: "packaging",
            number: "04",
            label: "PROTECTION & PRESENTATION",
            title: "Protective Packaging, Exceptional Care",
            description:
                "Every product is carefully packed to help preserve its quality during handling, storage, and transportation. Clear product identification and organized packaging support efficient inventory management and ensure that our gloves are prepared for safe and reliable delivery.",
            image: "/packaging.jpg",
            imageAlt: "Protective packaging for medical gloves",
            imagePosition: "right",
        },
        {
            id: "warehousing",
            number: "05",
            label: "STORAGE & GLOBAL DISTRIBUTION",
            title: "Warehousing with Confidence",
            description:
                "We have a spacious warehouse with the capacity to store over 2 million pairs of gloves. The warehouse undergoes regular pest control and fumigation to maintain a pest-free environment. Master cartons are sealed with color-coded tapes, with each color representing a specific glove size for quick identification. Quality-assured gloves are then loaded into containers and shipped to destinations worldwide.",
            image: "https://static.wixstatic.com/media/e390e4_b2db30f18ea44fa58a88b4ddd976c437~mv2.png/v1/fill/w_756,h_521,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/TO%20G%20WEB%203%20%281%29.png",
            imageAlt: "Warehouse and storage of medical gloves",
            imagePosition: "left",
        },
    ];

    const sterilizationMethods = [
        {
            number: "01",
            title: "ETO Sterilization",
            subtitle: "Controlled sterilization process",
            description:
                "PLC-controlled ETO sterilization plants use a double-door system. Process cycles are monitored using biological indicators, and air-wash cycles help reduce residual ethylene oxide.",
            icon: (
                <svg viewBox="0 0 48 48" fill="none">
                    <rect x="9" y="5" width="30" height="38" rx="3" stroke="currentColor" strokeWidth="2.2" />
                    <rect x="15" y="12" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="2.2" />
                    <path d="M19 35h10M24 27v4m-5-14h10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
            )
        },
        {
            number: "02",
            title: "Sterility & Packaging",
            subtitle: "Protection throughout the product life",
            description:
                "Selected packaging materials support ETO sterilization and help maintain sterility during transit and storage. Sterilized gloves are tested in the in-house microbiological laboratory.",
            icon: (
                <svg viewBox="0 0 48 48" fill="none">
                    <path d="m24 5 17 10v18L24 43 7 33V15L24 5Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
                    <path d="M7 15l17 10 17-10M24 25v18M17 10l17 10" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            number: "03",
            title: "Gamma Sterilization",
            subtitle: "Additional in-house capability",
            description:
                "Through Gamma Tech India Private Limited, Kanam has access to in-house gamma sterilization alongside its ETO sterilization capability.",
            icon: (
                <svg viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.2" />
                    <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2.2" />
                    <path d="M24 6v13m15-4-11 7m5 17-6-11M9 39l6-11M9 15l11 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
            )
        }
    ];

    return (
        <main className="quality-page">

            <section className="quality-hero">
                <div className="container quality-container quality-hero-grid">

                    <div className="quality-hero-text">
                        <div className="products-breadcrumb">
                            <span>Home</span>
                            <i className="bi bi-chevron-right"></i>
                            <span>Quality</span>
                        </div>
                        <p className="products-eyebrow">
                            
                            OUR COMMITMENT TO EXCELLENCE
                        </p>

                        <h1>
                            Quality You Can <span> Trust.</span>
                        </h1>

                        <p className="quality-hero-description">
                            From quality control and manufacturing to
                            sterilization, packaging, and warehousing,
                            every stage reflects our commitment to
                            consistency, care, and dependable products.
                        </p>
                    </div>

                    <div className="quality-hero-image">
                        <img
                            src="/doctor.jpg"
                            alt="Medical glove quality control"
                        />

                        <div className="quality-image-badge">
                            <div>
                                <strong>Quality Comes First</strong>
                                <p>Care at every stage</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="quality-intro">
                <div className="container quality-container">
                    <div className="quality-intro-heading">
                        <p className="quality-section-label">
                            QUALITY IS OUR PRIORITY
                        </p>

                        <h2>
                            A Commitment to
                            <span> Excellence</span>
                        </h2>

                        <p>
                            Every stage of our process plays an important
                            role in delivering products our customers can
                            depend on. We focus on quality, careful handling,
                            and organized processes from production to dispatch.
                        </p>
                    </div>

                    <div className="quality-process-list">
                        {qualitySections.map((section) => (
                            <a
                                href={`#${section.id}`}
                                className="quality-process-item"
                                key={section.id}
                            >
                                <span>{section.number}</span>
                                <strong>{section.title}</strong>
                                <span className="quality-process-arrow">↗</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            {qualitySections.map((section, index) => (
                section.id === "sterilization" ? (
                    <section
                        className="sterilization-section"
                        id={section.id}
                        key={section.id}
                    >
                        <div className="container quality-container">

                            <div className="sterilization-header">
                                <div>
                                    <p className="quality-section-label">
                                        {section.label}
                                    </p>

                                    <h2>
                                        Advanced Sterilization.
                                        <span> Uncompromising Care.</span>
                                    </h2>
                                </div>

                                <p className="sterilization-intro-text">
                                    Carefully controlled sterilization processes
                                    and quality checks help protect product
                                    integrity and support the required standards
                                    for sterile medical gloves.
                                </p>
                            </div>

                            <div className="sterilization-feature-grid">
                                <div className="sterilization-feature-image">
                                    <img
                                        src={section.image}
                                        alt={section.imageAlt}
                                        loading="lazy"
                                    />

                                    <div className="sterilization-image-overlay">
                                        <span className="sterilization-image-number">
                                            {section.number}
                                        </span>
                                        <div>
                                            <span className="sterilization-image-kicker">
                                                PRECISION · CONTROL · SAFETY
                                            </span>
                                            <h3>Every Cycle Matters</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="sterilization-methods">
                                    {sterilizationMethods.map((method) => (
                                        <article
                                            className="sterilization-method"
                                            key={method.number}
                                        >
                                            <div className="sterilization-method-icon">
                                                {method.icon}
                                            </div>

                                            <div className="sterilization-method-content">
                                                <span className="sterilization-method-number">
                                                    {method.number}
                                                </span>
                                                <h3>{method.title}</h3>
                                                <p className="sterilization-method-subtitle">
                                                    {method.subtitle}
                                                </p>
                                                <p className="sterilization-method-description">
                                                    {method.description}
                                                </p>
                                            </div>

                                        </article>
                                    ))}
                                </div>
                            </div>

                            <div className="sterilization-checks-heading">
                                <div>
                                    <p className="quality-section-label">
                                        ATTENTION TO EVERY DETAIL
                                    </p>
                                    <h3>
                                        Our Quality
                                        <span> Checkpoints</span>
                                    </h3>
                                </div>

                                <p>
                                    Every detail matters. Our checks focus on
                                    product accuracy, packaging, inspection
                                    requirements and grade specifications.
                                </p>
                            </div>

                            <div className="sterilization-checks-grid">
                                {sterilizationChecks.map((check, checkIndex) => (
                                    <article
                                        className="sterilization-check-card"
                                        key={check.title}
                                    >
                                        <div className="sterilization-check-top">
                                            <span className="sterilization-check-number">
                                                {String(checkIndex + 1).padStart(2, "0")}
                                            </span>

                                            <span className="sterilization-check-icon">
                                                {check.icon}
                                            </span>
                                        </div>

                                        <h4>{check.title}</h4>
                                        <p>{check.description}</p>

                                        <div className="sterilization-check-line"></div>
                                    </article>
                                ))}
                            </div>

                            <div className="sterilization-bottom-note">
                                <div className="sterilization-bottom-icon">
                                    <svg viewBox="0 0 48 48" fill="none">
                                        <path d="M24 5 41 12v12c0 10-7 16-17 19C14 34 7 34 7 24V12L24 5Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
                                        <path d="m16 24 5 5 11-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>

                                <div>
                                    <h4>Quality is built into every step.</h4>
                                    <p>
                                        From sterilization and laboratory checks
                                        to packaging verification, each checkpoint
                                        supports our commitment to product quality.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>
                ) : (
                    <section
                        className={`quality-detail-section ${index % 2 === 0
                                ? "quality-detail-light"
                                : "quality-detail-white"
                            }`}
                        id={section.id}
                        key={section.id}
                    >
                        <div
                            className={`container quality-container quality-detail-grid ${section.imagePosition === "right"
                                    ? "quality-image-right"
                                    : ""
                                }`}
                        >
                            <div className="quality-detail-image">
                                <img
                                    src={section.image}
                                    alt={section.imageAlt}
                                    loading={index === 0 ? "eager" : "lazy"}
                                />

                                <div className="quality-image-number">
                                    {section.number}
                                </div>
                            </div>

                            <div className="quality-detail-content">
                                <p className="quality-section-label">
                                    {section.label}
                                </p>

                                <h2>{section.title}</h2>

                                <div className="quality-heading-line"></div>

                                <p className="quality-detail-description">
                                    {section.description}
                                </p>

                                <div className="quality-detail-footer">
                                    <span className="quality-footer-check">✓</span>
                                    <span>Our commitment to quality</span>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            ))}

            <section className="quality-closing">
                <div className="container quality-container quality-closing-content">
                    <div>
                        <p className="quality-closing-label">
                            OUR PROMISE
                        </p>

                        <h2>
                            Quality in Every Step.
                            <span> Confidence in Every Pair.</span>
                        </h2>

                        <p>
                            We remain committed to careful processes,
                            consistent quality, and dependable service
                            for customers around the world.
                        </p>
                    </div>

                    <a
                        href="/contactus"
                        className="quality-button quality-button-light"
                    >
                        Contact Us
                    </a>
                </div>
            </section>

        </main>
    );
}

export default Quality;

import "./career.css";

const careerOpenings = [
    {
        id: 1,
        title: "Quality Assurance Executive",
        department: "Quality Control",
        location: "On-site",
        type: "Full-time",
        experience: "1–3 Years",
        description:
            "Ensure product quality and compliance with industry standards through inspections, documentation, and quality checks.",
        icon: "bi-shield-check",
    },
    {
        id: 2,
        title: "Production Supervisor",
        department: "Manufacturing",
        location: "On-site",
        type: "Full-time",
        experience: "2–4 Years",
        description:
            "Supervise daily production activities, coordinate with the production team, and maintain manufacturing efficiency.",
        icon: "bi-gear",
    },
    {
        id: 3,
        title: "Sales & Marketing Executive",
        department: "Sales & Marketing",
        location: "On-site",
        type: "Full-time",
        experience: "1–3 Years",
        description:
            "Build customer relationships, identify new business opportunities, and support the growth of our product portfolio.",
        icon: "bi-graph-up-arrow",
    },
    {
        id: 4,
        title: "Human Resources Executive",
        department: "Human Resources",
        location: "On-site",
        type: "Full-time",
        experience: "1–2 Years",
        description:
            "Support recruitment, employee engagement, onboarding, and other essential HR activities.",
        icon: "bi-people",
    },
];

function Career() {
    return (
        <section className="career">
            <div className="about-header">
                <h1>Join Our Team</h1>
                <p>
                    We're always looking for talented individuals to join
                    our growing team.
                    <br />
                    Explore our current openings below.
                </p>
            </div>

            <div className="career-container">
                <div className="career-intro">
                    <span className="career-label">
                        CAREER OPPORTUNITIES
                    </span>

                    <h2>
                        Find Your Place in <span>Our Team</span>
                    </h2>

                    <p>
                        Build your career with us and be part of a team
                        committed to quality, innovation, and making a
                        difference in healthcare.
                    </p>
                </div>

                <div className="career-results">
                    <div className="career-results-heading">
                        <div>
                            <h3>Current Openings</h3>
                            <p>
                                Explore opportunities that match your skills.
                            </p>
                        </div>

                        <span className="career-count">
                            {careerOpenings.length} Positions
                        </span>
                    </div>

                    <div className="career-openings">
                        {careerOpenings.map((job) => (
                            <article className="career-card" key={job.id}>
                                <div className="career-card-icon">
                                    <i className={`bi ${job.icon}`}></i>
                                </div>

                                <div className="career-card-content">
                                    <span className="career-department">
                                        {job.department}
                                    </span>

                                    <h3>{job.title}</h3>

                                    <div className="career-job-details">
                                        <span>
                                            <i className="bi bi-geo-alt"></i>
                                            {job.location}
                                        </span>

                                        <span>
                                            <i className="bi bi-clock"></i>
                                            {job.type}
                                        </span>

                                        <span>
                                            <i className="bi bi-briefcase"></i>
                                            {job.experience}
                                        </span>
                                    </div>

                                    <p className="career-description">
                                        {job.description}
                                    </p>
                                </div>

                                <a
                                    className="career-apply-button"
                                    href={`mailto:careers@yourcompany.com?subject=${encodeURIComponent(
                                        `Application for ${job.title}`
                                    )}`}
                                >
                                    Apply Now
                                    <i className="bi bi-arrow-up-right"></i>
                                </a>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="career-bottom">
                    <div className="career-bottom-icon">
                        <i className="bi bi-envelope-paper"></i>
                    </div>

                    <div className="career-bottom-content">
                        <h3>Don't see the right opportunity?</h3>
                        <p>
                            We'd still love to hear from you. Send us your
                            resume and tell us how you can contribute.
                        </p>
                    </div>

                    <a
                        href="mailto:careers@yourcompany.com?subject=General%20Job%20Application"
                        className="career-contact-button"
                    >
                        Send Your Resume
                        <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Career;
"use client";

import { useEffect, useState } from "react";
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
    const [showPopup, setShowPopup] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");
    const [submitError, setSubmitError] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        experience: "",
        message: "",
    });

    useEffect(() => {
        document.body.style.overflow = showPopup ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [showPopup]);

    const resetForm = () => {
        setFormData({
            fullName: "",
            phone: "",
            email: "",
            experience: "",
            message: "",
        });
    };

    const openApplication = (position: string) => {
        setSelectedPosition(position);
        setSubmitMessage("");
        setSubmitError(false);
        setShowPopup(true);
    };

    const closeApplication = () => {
        if (isSubmitting) return;

        setShowPopup(false);
        setSubmitMessage("");
        setSubmitError(false);
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (isSubmitting) return;

        setIsSubmitting(true);
        setSubmitMessage("");
        setSubmitError(false);

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    position: selectedPosition,
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message ||
                        "Unable to submit your application. Please try again."
                );
            }

            setSubmitError(false);
            setSubmitMessage(
                result.message ||
                    "Your application has been submitted successfully!"
            );

            resetForm();
            window.setTimeout(() => {
                setShowPopup(false);
                setSubmitMessage("");
            }, 2200);
        } catch (error) {
            setSubmitError(true);
            setSubmitMessage(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="career">
            <div className="about-career-header">
                <div className="container">
                    <div className="career-small">GROW TOGETHER</div>
                <h1>Grow Your Career With a Trusted<br/> Industry Leader</h1>
                <p>
                    We're always looking for talented individuals to join
                    our growing team.
                    <br />
                    Explore our current openings below.
                </p>
                </div>
            </div>

            <div className="container career-container">
                {/* <div className="career-intro">
                    <span className="career-label">
                       OPPORTUNITIES
                    </span>

                    <h2>
                       Find the<span> Role </span>That Fits You Best
                    </h2>

                    <p>
                        Build your career with us and be part of a team
                        committed to quality, innovation, and making a
                        difference in healthcare.
                    </p>
                </div> */}

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

                                <button
                                    type="button"
                                    className="career-apply-button"
                                    onClick={() =>
                                        openApplication(job.title)
                                    }
                                >
                                    Apply Now
                                    <i className="bi bi-arrow-up-right"></i>
                                </button>
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

                    <button
                        type="button"
                        className="career-contact-button"
                        onClick={() =>
                            openApplication("General Application")
                        }
                    >
                        Send Your Resume
                        <i className="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>

            {showPopup && (
                <div
                    className="career-modal-overlay"
                    onMouseDown={(e) => {
                        if (e.target === e.currentTarget) {
                            closeApplication();
                        }
                    }}
                >
                    <div
                        className="career-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="career-modal-title"
                    >
                        <div className="career-modal-header">
                            <div>
                                <span className="career-modal-label">
                                    CAREER ENQUIRY
                                </span>

                                <h2 id="career-modal-title">
                                    Apply for a Position
                                </h2>

                                <p>
                                    Share your details and take the next
                                    step in your career.
                                </p>
                            </div>

                            <button
                                type="button"
                                className="career-modal-close"
                                onClick={closeApplication}
                                aria-label="Close application form"
                                disabled={isSubmitting}
                            >
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </div>

                        <form
                            className="career-form"
                            onSubmit={handleSubmit}
                        >
                            <div className="career-form-group career-form-full">
                                <label htmlFor="career-position">
                                    Position Applied For
                                </label>

                                <div className="career-input-wrapper career-position-input">
                                    <i className="bi bi-briefcase"></i>

                                    <input
                                        type="text"
                                        id="career-position"
                                        value={selectedPosition}
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="career-form-row">
                                <div className="career-form-group">
                                    <label htmlFor="career-full-name">
                                        Full Name <span>*</span>
                                    </label>

                                    <div className="career-input-wrapper">
                                        <i className="bi bi-person"></i>

                                        <input
                                            type="text"
                                            id="career-full-name"
                                            name="fullName"
                                            placeholder="Enter your full name"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            autoComplete="name"
                                            maxLength={100}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="career-form-group">
                                    <label htmlFor="career-phone">
                                        Phone Number <span>*</span>
                                    </label>

                                    <div className="career-input-wrapper">
                                        <i className="bi bi-telephone"></i>

                                        <input
                                            type="tel"
                                            id="career-phone"
                                            name="phone"
                                            placeholder="Enter phone number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            autoComplete="tel"
                                            pattern="[+]?[0-9 ()-]{7,20}"
                                            title="Enter a valid phone number"
                                            maxLength={20}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="career-form-row">
                                <div className="career-form-group">
                                    <label htmlFor="career-email">
                                        Email Address <span>*</span>
                                    </label>

                                    <div className="career-input-wrapper">
                                        <i className="bi bi-envelope"></i>

                                        <input
                                            type="email"
                                            id="career-email"
                                            name="email"
                                            placeholder="Enter email address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            autoComplete="email"
                                            maxLength={254}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="career-form-group">
                                    <label htmlFor="career-experience">
                                        Years of Experience
                                    </label>

                                    <div className="career-input-wrapper">
                                        <i className="bi bi-person-workspace"></i>

                                        <select
                                            id="career-experience"
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleChange}
                                        >
                                            <option value="">
                                                Select experience
                                            </option>
                                            <option value="Fresher">
                                                Fresher
                                            </option>
                                            <option value="1–2 Years">
                                                1–2 Years
                                            </option>
                                            <option value="2–5 Years">
                                                2–5 Years
                                            </option>
                                            <option value="5–10 Years">
                                                5–10 Years
                                            </option>
                                            <option value="10+ Years">
                                                10+ Years
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="career-form-group career-form-full">
                                <label htmlFor="career-message">
                                    Tell Us About Yourself
                                </label>

                                <textarea
                                    id="career-message"
                                    name="message"
                                    placeholder="Briefly describe your skills, experience, or why you'd like to join our team..."
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    maxLength={5000}
                                ></textarea>
                            </div>

                            <p className="career-form-note">
                                <i className="bi bi-shield-check"></i>
                                Your information will be used for recruitment
                                purposes.
                            </p>

                            {submitMessage && (
                                <div
                                    className={`career-submit-message ${
                                        submitError
                                            ? "career-submit-error"
                                            : "career-submit-success"
                                    }`}
                                    role={submitError ? "alert" : "status"}
                                    aria-live="polite"
                                >
                                    <i
                                        className={`bi ${
                                            submitError
                                                ? "bi-exclamation-circle"
                                                : "bi-check-circle-fill"
                                        }`}
                                    ></i>
                                    <span>{submitMessage}</span>
                                </div>
                            )}

                            <div className="career-form-actions">
                                <button
                                    type="button"
                                    className="career-cancel-button"
                                    onClick={closeApplication}
                                    disabled={isSubmitting}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="career-submit-button"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting
                                        ? "Submitting..."
                                        : "Submit Application"}

                                    <i
                                        className={`bi ${
                                            isSubmitting
                                                ? "bi-arrow-repeat"
                                                : "bi-arrow-right"
                                        }`}
                                    ></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Career;

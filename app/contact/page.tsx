"use client";

import { useState } from "react";
import "./contact-us.css";

function ContactUs() {
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    async function handleContactSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        const form = event.currentTarget;

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        setLoading(true);
        setStatusMessage("");
        setIsSuccess(false);

        const formData = new FormData(form);

        const payload = {
            firstName: String(formData.get("firstName") || ""),
            lastName: String(formData.get("lastName") || ""),
            email: String(formData.get("email") || ""),
            phone: String(formData.get("phone") || ""),
            subject: String(formData.get("subject") || ""),
            message: String(formData.get("message") || ""),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (!response.ok) {
                setIsSuccess(false);
                setStatusMessage(
                    result.message ||
                    "Unable to send your message. Please try again."
                );
                return;
            }

            setIsSuccess(true);
            setStatusMessage(
                result.message ||
                "Thank you for contacting us! Your message has been sent."
            );

            form.reset();
        } catch (error) {
            console.error("Contact form submission error:", error);

            setIsSuccess(false);
            setStatusMessage(
                "Unable to send your message. Please check your connection and try again."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="contact">
            <div className="contact-header">
                <div className="container">

                    <div className="let-connect">LET'S CONNECT</div>
                    <h1>Connect With Our Team to Discuss Your Needs</h1>
                    <p>
                        Have questions or want to discuss a project? Reach out
                        to us and our team will get back to you promptly.
                    </p>
                </div>
            </div>

            <div className="contact-content">
                <div className="container">
                    <div className="row contact-row">
                        <div className="col-lg-6 col-12 jeet-contact">
                            <div className="contact-info">
                                <div className="contact-info-card">
                                    <div className="contact-icon">
                                        <i className="bi bi-geo-alt-fill"></i>
                                    </div>

                                    <div className="contact-info-text">
                                        <h3>Our Location</h3>
                                        <p>
                                            Plot No. 14 C, Cochin Special
                                            Economic Zone, Cochin, Kerala, India
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-info-card">
                                    <div className="contact-icon">
                                        <i className="bi bi-telephone-fill"></i>
                                    </div>

                                    <div className="contact-info-text">
                                        <h3>Phone</h3>
                                        <p>
                                            Customer Care: +91 6238 742 481
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-info-card">
                                    <div className="contact-icon">
                                        <i className="bi bi-envelope-fill"></i>
                                    </div>

                                    <div className="contact-info-text">
                                        <h3>Email</h3>
                                        <p>
                                            info@amazingglove.com /
                                            marketing@amazingglove.com
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-map-card">
                                    <h3>
                                        Amazing Rubber Products Pvt. Ltd. (4.8 ★)
                                    </h3>

                                    <p>
                                        Plot No. 14C, CSEZ, Kakkanad, Kochi,
                                        Kerala 682037
                                    </p>

                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Amazing+Rubber+Products+Pvt+Ltd+CSEZ+Kakkanad+Kochi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact-map-button"
                                    >
                                        View Larger Map
                                    </a>
                                </div>
                            </div>

                             <div className="contact-form-card data-iframe">
                                <iframe
                                    src="https://maps.google.com/maps?q=Amazing%20Rubber%20Products%20Pvt.%20Ltd.%2C%20Plot%20No.%2014C%2C%20CSEZ%2C%20Kakkanad%2C%20Kochi%2C%20Kerala%20682037&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="140"
                                    style={{ border: 0, borderRadius: "16px" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Amazing Rubber Products Pvt. Ltd. Location"
                                />
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="contact-form-card">
                                <h2>
                                    <i className="bi bi-send-fill"></i>
                                    <span>Send Us a Message</span>
                                </h2>
                                <form
                                    className="contact-form"
                                    onSubmit={handleContactSubmit}
                                >
                                    <div className="row contact-form-row">
                                        <div className="col-md-6 col-12">
                                            <label htmlFor="first-name">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                id="first-name"
                                                name="firstName"
                                                placeholder="John"
                                                autoComplete="given-name"
                                                required
                                                disabled={loading}
                                            />
                                        </div>

                                        <div className="col-md-6 col-12">
                                            <label htmlFor="last-name">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="last-name"
                                                name="lastName"
                                                placeholder="Doe"
                                                autoComplete="family-name"
                                                required
                                                disabled={loading}
                                            />
                                        </div>
                                    </div>

                                    <div className="contact-form-group">
                                        <label htmlFor="email">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="you@example.com"
                                            autoComplete="email"
                                            required
                                            disabled={loading}
                                        />
                                    </div>

                                    <div className="contact-form-group">
                                        <label htmlFor="phone">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="+91 6238742481"
                                            autoComplete="tel"
                                            required
                                            disabled={loading}
                                        />
                                    </div>

                                    <div className="contact-form-group">
                                        <label htmlFor="subject">Subject</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            defaultValue=""
                                            required
                                            disabled={loading}
                                        >
                                            <option value="" disabled>
                                                Select a subject
                                            </option>
                                            <option value="product-enquiry">
                                                Product Enquiry
                                            </option>
                                            <option value="bulk-order">
                                                Bulk Order
                                            </option>
                                            <option value="quotation">
                                                Request a Quote
                                            </option>
                                            <option value="partnership">
                                                Business Partnership
                                            </option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="contact-form-group">
                                        <label htmlFor="message">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="How can we help you?"
                                            rows={3}
                                            required
                                            disabled={loading}
                                        />
                                    </div>

                                    {statusMessage && (
                                        <p
                                            role="status"
                                            aria-live="polite"
                                            className={`contact-status ${isSuccess
                                                    ? "contact-status-success"
                                                    : "contact-status-error"
                                                }`}
                                        >
                                            <i
                                                className={`bi ${isSuccess
                                                        ? "bi-check-circle-fill"
                                                        : "bi-exclamation-circle-fill"
                                                    }`}
                                            ></i>
                                            {" "}{statusMessage}
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        className="contact-submit-button"
                                        disabled={loading}
                                    >
                                        <i
                                            className={`bi ${loading
                                                    ? "bi-arrow-repeat"
                                                    : "bi-send-fill"
                                                }`}
                                        ></i>
                                        {loading
                                            ? "Sending Message..."
                                            : "Send Message"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
"use client";

import "./contact-us.css";

function ContactUs() {
    return (
        <section className="contact">
            <div className="contact-header">
                <div className="container">
                    <h1>Get In Touch</h1>
                    <p>
                        Have questions or want to discuss a project? Reach out
                        to us and our team will get back to you promptly.
                    </p>
                </div>
            </div>
            <div className="contact-content">
                <div className="container">
                    <div className="row contact-row">
                        <div className="col-lg-6 col-12">
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
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="contact-form-card">
                                <h2>
                                    <i className="bi bi-send-fill"></i>
                                    <span>Send Us a Message</span>
                                </h2>

                                <form
                                    className="contact-form"
                                    onSubmit={(event) => {
                                        event.preventDefault();

                                        const form = event.currentTarget;

                                        if (!form.checkValidity()) {
                                            form.reportValidity();
                                            return;
                                        }

                                        alert(
                                            "Thank you for contacting us! Please connect this form to your backend to send your message."
                                        );
                                    }}
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
                                                required
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
                                                required
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
                                            required
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
                                            required
                                        />
                                    </div>

                                    <div className="contact-form-group">
                                        <label htmlFor="subject">Subject</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            defaultValue=""
                                            required
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
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="contact-submit-button"
                                    >
                                        <i className="bi bi-send-fill"></i>
                                        Send Message
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
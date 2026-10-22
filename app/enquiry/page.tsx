"use client";

import Swal from "sweetalert2";
import "./enquirt.css";

type EnquiryProps = {
    onSuccess?: () => void;
};

function Enquiry({ onSuccess }: EnquiryProps) {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    form.reset();
    onSuccess?.();
    setTimeout(() => {
        Swal.fire({
            icon: "success",
            title: "Thank You!",
            text: "Thank you for your enquiry! Our team will contact you soon.",
            confirmButtonText: "Okay",
            confirmButtonColor: "#421DDB",
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: true,
        });
    }, 200);
};

    return (
        <div className="enquiry-form-container">
            <div className="enquiry-modal-header">
                <div>
                    <h2>
                        <i className="bi bi-send-fill"></i>
                        Send Us a Message
                    </h2>
                    <p>
                        Have a question? We would love to hear from you.
                    </p>
                </div>
            </div>

            <form className="enquiry-form" onSubmit={handleSubmit}>
                <div className="row enquiry-form-row">
                    <div className="col-md-6 col-12">
                        <label htmlFor="enquiry-first-name">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="enquiry-first-name"
                            name="firstName"
                            placeholder="John"
                            autoComplete="given-name"
                            required
                        />
                    </div>

                    <div className="col-md-6 col-12">
                        <label htmlFor="enquiry-last-name">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="enquiry-last-name"
                            name="lastName"
                            placeholder="Doe"
                            autoComplete="family-name"
                            required
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 enquiry-form-group">
                        <label htmlFor="enquiry-email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="enquiry-email"
                            name="email"
                            placeholder="you@example.com"
                            autoComplete="email"
                            required
                        />
                    </div>

                    <div className="col-lg-6 col-md-6 col-12 enquiry-form-group">
                        <label htmlFor="enquiry-phone">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="enquiry-phone"
                            name="phone"
                            placeholder="+91 6238742481"
                            autoComplete="tel"
                            required
                        />
                    </div>
                </div>

                <div className="enquiry-form-group">
                    <label htmlFor="enquiry-subject">Subject</label>
                    <select
                        id="enquiry-subject"
                        name="subject"
                        defaultValue=""
                        required>
                        <option value="" disabled>
                            Select a subject
                        </option>
                        <option value="product-enquiry">
                            Product Enquiry
                        </option>
                        <option value="bulk-order">Bulk Order</option>
                        <option value="quotation">Request a Quote</option>
                        <option value="partnership">
                            Business Partnership
                        </option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="enquiry-form-group">
                    <label htmlFor="enquiry-message">Your Message</label>
                    <textarea
                        id="enquiry-message"
                        name="message"
                        placeholder="How can we help you?"
                        rows={2}
                        required
                    />
                </div>

                <div className="enquiry-form-actions">
                    <button
                        type="submit"
                        className="enquiry-submit-button"
                    >
                        <i className="bi bi-send-fill"></i>
                        Send Enquiry
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Enquiry;
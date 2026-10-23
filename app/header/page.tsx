
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Enquiry from "../enquiry/page";
import "./header.css";

function Header() {
    const pathname = usePathname();
    const [showEnquiry, setShowEnquiry] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/aboutus" },
        { name: "Products", href: "/products" },
        { name: "Certificates", href: "/certificates" },
        { name: "Career", href: "/career" },
        { name: "Quality", href: "/quality" },
        { name: "Resources", href: "/resources" },
        { name: "Contact", href: "/contact" },
    ];

    const closeEnquiry = () => setShowEnquiry(false);
    const closeMobileMenu = () => setMobileMenuOpen(false);

    useEffect(() => {
        if (!showEnquiry && !mobileMenuOpen) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setShowEnquiry(false);
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);

        if (showEnquiry || mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [showEnquiry, mobileMenuOpen]);

    const openEnquiry = () => {
        setMobileMenuOpen(false);
        setShowEnquiry(true);
    };

    return (
        <>
            <header className="landing-header">
                <Link
                    href="/"
                    className="landing-logo"
                    onClick={closeMobileMenu}
                >
                    <img src="/logo.png" alt="Company Logo" />
                </Link>

                {/* Desktop navigation */}
                <nav className="landing-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={pathname === link.href ? "active" : ""}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop quote button */}
                <button
                    type="button"
                    className="quote-button desktop-quote-button"
                    onClick={openEnquiry}
                >
                    <i className="bi bi-send-fill"></i>
                    Request Quote
                </button>

                {/* Mobile hamburger button */}
                <button
                    type="button"
                    className="mobile-menu-toggle"
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileMenuOpen}
                    onClick={() => setMobileMenuOpen((open) => !open)}
                >
                    <i
                        className={`bi ${
                            mobileMenuOpen ? "bi-x-lg" : "bi-list"
                        }`}
                    ></i>
                </button>
            </header>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div
                    className="mobile-menu-overlay"
                    onClick={closeMobileMenu}
                >
                    <nav
                        className="mobile-menu-panel"
                        aria-label="Mobile navigation"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="mobile-menu-links">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={
                                        pathname === link.href
                                            ? "mobile-nav-link active"
                                            : "mobile-nav-link"
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    <span>{link.name}</span>
                                    <i className="bi bi-chevron-right"></i>
                                </Link>
                            ))}
                        </div>

                        <button
                            type="button"
                            className="quote-button mobile-quote-button"
                            onClick={openEnquiry}
                        >
                            <i className="bi bi-send-fill"></i>
                            Request Quote
                        </button>
                    </nav>
                </div>
            )}

            {/* Enquiry modal */}
            {showEnquiry && (
                <div
                    className="enquiry-modal-overlay"
                    onClick={closeEnquiry}
                >
                    <div
                        className="enquiry-modal-content"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Request a Quote"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="enquiry-modal-close"
                            onClick={closeEnquiry}
                            aria-label="Close enquiry form"
                        >
                            &times;
                        </button>

                        <Enquiry onSuccess={closeEnquiry} />
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;

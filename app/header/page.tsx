"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./header.css";

function Header() {
    const pathname = usePathname();

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

    return (
        <header className="landing-header">
            <Link href="/" className="landing-logo">
                <img src="/logo.png" alt="Company Logo" />
            </Link>

            <nav className="landing-nav">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={
                            pathname === link.href ? "active" : ""
                        }
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>

            <Link href="/contact" className="quote-button">
                <i className="bi bi-send-fill"></i>
                Request Quote
            </Link>
        </header>
    );
}

export default Header;
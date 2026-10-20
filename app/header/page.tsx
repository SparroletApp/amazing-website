import "./header.css";

function Header(){
    return(
        <>
        <header className="landing-header">
                <a href="/" className="landing-logo">
                   <img src="/logo.png"></img>
                </a>

                <nav className="landing-nav">
                    <a href="/" className="active">Home</a>
                    <a href="aboutus">About Us</a>
                    <a href="products">Products</a>
                    <a href="certificates">Certificates</a>
                    <a href="career">Career</a>
                    <a href="resources">Resources</a>
                    <a href="contact">Contact</a>
                </nav>

                <a href="#contact" className="quote-button">
                    <i className="bi bi-send-fill"></i>
                    Request Quote
                </a>
            </header>
        </>
    )
}

export default Header;
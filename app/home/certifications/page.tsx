import "./certifications.css";

function Certifications(){
    return(
        <>
         <div className="certified-standard-heading">
                <h2>Internationally Certified Standards</h2>
                <p>
                    Our gloves are CE, US-FDA, and ISO certified, ensuring
                    the highest standards of safety and quality.
                </p>
            </div>

            <div className="green-cards">
                <div className="green-card">
                    <div className="green-card-icon">
                        <i className="bi bi-shield-shaded"></i>
                    </div>
                    <div className="green-card-content">
                        <h3>CE 2460</h3>
                        <p>Certified</p>
                    </div>
                </div>

                <div className="green-card">
                    <div className="green-card-icon">
                        <i className="bi bi-patch-check-fill"></i>
                    </div>
                    <div className="green-card-content">
                        <h3>ISO 13485:2016</h3>
                        <p>Certified</p>
                    </div>
                </div>

                <div className="green-card">
                    <div className="green-card-icon">
                        <i className="bi bi-check-square-fill"></i>
                    </div>
                    <div className="green-card-content">
                        <h3>GMP</h3>
                        <p>Compliant</p>
                    </div>
                </div>

                <div className="green-card">
                    <div className="green-card-icon">
                        <i className="bi bi-award-fill"></i>
                    </div>
                    <div className="green-card-content">
                        <h3>FDA 510(k)</h3>
                        <p>Cleared</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Certifications;
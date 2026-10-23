
"use client";
import { useRouter } from "next/navigation";
import "./feedback.css";

function Feedback() {

    const router = useRouter();

    const feedbackData = [
        {
            name: "Dr. Anupama",
            desc: '"The gloves are 100% powder free. They are a game changer for surgical procedures... fit and tactile sensitivity."',
            designation: "Surgeon",
            letter: "DA",
        },
        {
            name: "Dr. Arun Kumar",
            desc: '"The gloves are remarkable in durability and strength. Very comfortable for long procedures."',
            designation: "Surgeon",
            letter: "DK",
        },
        {
            name: "Dr. Rajeshwari",
            desc: '"Amazing Rubber Products is reliable, high quality, and meets international safety standards."',
            designation: "Chief Medical Officer",
            letter: "DR",
        },
    ];
    return (
        <>
            <section className="feedback">
                <div className="container">
                    <h1>Real Feedback From Our Customers</h1>
                    <div className="row">
                        {feedbackData.map((item, index) => (
                            <div className="col-lg-4 col-md-6 col-12" key={index}>
                                <div className="feedback-card">


                                    <p className="feedback-card-desc">
                                        {item.desc}
                                    </p>
                                    <div className="downward-feedback">
                                        <div className="feedback-card-letter">
                                            {item.letter}
                                        </div>
                                        <div className="feedback-card-customer">
                                            <h5 className="feedback-card-name">
                                                {item.name}
                                            </h5>

                                            <p className="feedback-card-designation">
                                                {item.designation}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="footer-top">
                <div className="carere-build">
                    <h1>Build Your Career With Us</h1>
                    <div className="btn-openings">
                        <button  onClick={() => router.push("/career")}>
                        See Openings <i className="bi bi-backpack4-fill"></i>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feedback;
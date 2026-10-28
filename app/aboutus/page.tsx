
import Certifications from "../home/certifications/page";
import CertifiedStandard from "../home/certified-standard/page";
import "./aboutus.css";

function AboutUs() {

    const managementData = [
        {
            image: "/director.png",
            name: "REJI GEORGE",
            desc: "Director",
        },
        {
            image: "/bejoy.png",
            name: "BEJOY MATHEW",
            desc: "Director & GM",
        },
    ];

    return (
        <>
            <section className="aboutus">

                <div className="about-header">
                    <div className="about-header-image"></div>
                    <div className="about-header-overlay"></div>

                    <div className="container about-header-content">
                        <div className="about-small">
                            ABOUT US
                        </div>

                        <h1>
                            Get to Know The Top Manufacturer of <br/>Surgical Gloves in India
                        </h1>

                        <p>
                            Delivering trusted protection through quality, innovation,
                            and excellence in medical glove manufacturing.
                        </p>
                    </div>
                </div>

                <div className="container">
                    <div className="about-first">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="img-about-first">
                                    <img src="/about-first.png"></img>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 about-column">
                                <div className="about-first-right">
                                    <h6>ABOUT US</h6>
                                    <div className="shield-mark">Shielding Hands, Building Partnerships</div>
                                    <div className="shield-desc">Amazing Rubber Products Pvt. Ltd. was founded with the vision of providing
                                        top-class healthcare workers with the best disposable medical gloves offering maximum barrier protection
                                        in every sterile surface setting. <br /><br />
                                        In a few years, through our dedicated technical team, Amazing Rubber
                                        Products has registered a growth in the export and domestic market
                                        with continuous innovation, strict quality control,
                                        and zero compromise on raw materials. </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="our-story">
                        <div className="story-wrap">
                            <div className="shield-mark">
                                Our Story
                            </div>
                            <div className="shield-desc">The story of Amazing Rubber Products Pvt. Ltd. began with a visionary
                                entrepreneur, Mr. Georgekutty Manuel, who possessed decades of experience in the latex industry.
                                Recognizing the need for premium quality latex surgical and examination gloves, he embarked on
                                establishing a state-of-the-art facility at Cochin
                                Special Economic Zone (CSEZ), Kakkanad, Kochi.<br /><br />
                                Starting in 2018 with ISO 13485:2016 certification and US-FDA 510(k) clearances,
                                Amazing Rubber Products expanded rapidly, adding a second production
                                unit at Rubber Park, Perumbavoor, Ernakulam. Today, our products are exported across 94+ countries.
                            </div>
                        </div>
                    </div>

                    <div className="our-story">
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-12 manage-role">
                                <div className="manager">
                                    <div className="shield-mark">
                                        From The Managing Director's Desk
                                    </div>
                                    <div className="shield-desc">
                                        "Disposable medical gloves are an integral part of
                                        healthcare delivery. Our mission has always been to manufacture
                                        gloves that offer superior tactile sensitivity while
                                        maintaining zero barrier failure."
                                    </div>
                                    <div className="name-manager">
                                        Georgekutty Manuel
                                    </div>
                                    <div className="green-designation">Managing Director</div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-5 col-12">
                                <div className="manager-img">
                                    <img src="/manager.png"></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="meet-management">
                        <div className="shield-mark">
                            Meet Our Management
                        </div>
                        <div className="row">
                            {managementData.map((member, index) => (
                                <div className="col-lg-4 col-md-6 col-6" key={index}>
                                    <div className="management-card">
                                        <div className="management-img">
                                            <img src={member.image} alt={member.name} />
                                        </div>

                                        <div className="management-info">
                                            <h3>{member.name}</h3>
                                            <p>{member.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="our-brands">
                        <div className="shield-mark">
                            Our Brands
                        </div>
                        <div className="brand-desc">
                            These brands under Amazing Group represent our legacy of quality, innovation, and expertise in<br /> healthcare safety.
                        </div>
                        <div className="list-datas">
                            <div className="amazing-data">
                                AMAZING
                            </div>
                            <div className="amazing-data">
                                AMCARE
                            </div>
                            <div className="amazing-data">
                                AMGRACE
                            </div>

                            <div className="amazing-data">
                                SAFE N CARE
                            </div>

                        </div>

                    </div>

                    <Certifications />
                </div>
            </section>
        </>
    )
}

export default AboutUs;
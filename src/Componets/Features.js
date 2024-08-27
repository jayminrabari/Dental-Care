import React from 'react'

const Features = () => {
    return (
        <>
            <section className="feature-area section-gap">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="menu-content pb-60 col-lg-8">
                            <div className="title text-center">
                                <h1 className="mb-10">Why Choose Our Dental Care?</h1>
                                <p>Discover the features that set us apart in providing top-notch dental care.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-feature d-flex flex-row">
                                <div className="icon">
                                    <span className="lnr lnr-heart-pulse"></span>
                                </div>
                                <div className="details">
                                    <h4>Experienced Dentists</h4>
                                    <p>Our team of skilled and experienced dentists ensures that you receive the best care possible for your dental health.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="single-feature d-flex flex-row">
                                <div className="icon">
                                    <span className="lnr lnr-calendar-full"></span>
                                </div>
                                <div className="details">
                                    <h4>Flexible Scheduling</h4>
                                    <p>We offer flexible appointment times to accommodate your busy schedule, including evening and weekend hours.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="single-feature d-flex flex-row">
                                <div className="icon">
                                    <span className="lnr lnr-heart"></span>
                                </div>
                                <div className="details">
                                    <h4>Personalized Care</h4>
                                    <p>Our dental care is tailored to meet your individual needs and preferences, ensuring a comfortable and effective treatment plan.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="single-feature d-flex flex-row">
                                <div className="icon">
                                    <span className="lnr lnr-camera"></span>
                                </div>
                                <div className="details">
                                    <h4>Advanced Technology</h4>
                                    <p>We use the latest dental technology and equipment to provide precise diagnostics and effective treatments.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="single-feature d-flex flex-row">
                                <div className="icon">
                                    <span className="lnr lnr-smile"></span>
                                </div>
                                <div className="details">
                                    <h4>Comfortable Environment</h4>
                                    <p>Our clinic is designed to provide a relaxing and comfortable environment to help you feel at ease during your visit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="single-feature d-flex flex-row">
                                <div className="icon">
                                    <span className="lnr lnr-diamond"></span>
                                </div>
                                <div className="details">
                                    <h4>Quality Assurance</h4>
                                    <p>We are committed to maintaining the highest standards of quality in all aspects of our dental care services.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
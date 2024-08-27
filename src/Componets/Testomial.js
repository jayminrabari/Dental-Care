import React from 'react';

const Testimonial = () => {
    return (
        <>
            <section className="testimonial-area section-gap">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="menu-content pb-60 col-lg-8">
                            <div className="title text-center">
                                <h1 className="mb-10">What Our Patients Are Saying</h1>
                                <p>Your feedback helps us improve our services and ensure we meet your needs with the highest level of care.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <img className="mx-auto" src="img/t1.png" alt="Patient 1" />
                                    <p className="desc pt-4">
                                        "I had a wonderful experience at this dental clinic. The staff was incredibly friendly, and Dr. Smith was very professional and gentle. I highly recommend them for anyone looking for top-notch dental care."
                                    </p>
                                    <h4>Jessica Taylor</h4>
                                    <p>Marketing Specialist</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <img className="mx-auto" src="img/t2.png" alt="Patient 2" />
                                    <p className="desc pt-4">
                                        "I've never felt more comfortable at a dentist's office. The team here makes every visit pleasant and stress-free. My smile has never looked better!"
                                    </p>
                                    <h4>Michael Johnson</h4>
                                    <p>Software Engineer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <img className="mx-auto" src="img/t3.png" alt="Patient 3" />
                                    <p className="desc pt-4">
                                        "Excellent care and service! The dentists are very skilled and attentive. I appreciate their attention to detail and the care they took with my dental health."
                                    </p>
                                    <h4>Emily Davis</h4>
                                    <p>Graphic Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <img className="mx-auto" src="img/t1.png" alt="Patient 4" />
                                    <p className="desc pt-4">
                                        "From the friendly receptionists to the skilled dentists, every aspect of my visit was handled with great care and professionalism. Highly recommended for anyone needing dental work."
                                    </p>
                                    <h4>Robert Brown</h4>
                                    <p>Entrepreneur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonial;

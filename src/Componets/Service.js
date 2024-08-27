import React from 'react';

const Service = () => {
    return (
        <>
            <section className="service-area section-gap">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12 pb-40 header-text text-center">
                            <h1 className="pb-10">Our Comprehensive Dental Services</h1>
                            <p>Providing a range of services to meet all your dental needs with care and precision.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service">
                                <img className="img-fluid" src="img/s1.jpg" alt="Teeth Cleaning" />
                                <h4>Teeth Cleaning</h4>
                                <p>Our thorough teeth cleaning services help remove plaque and tartar, ensuring a bright and healthy smile.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service">
                                <img className="img-fluid" src="img/s2.jpg" alt="Teeth Whitening" />
                                <h4>Teeth Whitening</h4>
                                <p>Experience professional teeth whitening to enhance your smile and boost your confidence.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service">
                                <img className="img-fluid" src="img/s3.jpg" alt="Dental Fillings" />
                                <h4>Dental Fillings</h4>
                                <p>We provide durable and aesthetic dental fillings to restore your teeth and maintain optimal function.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service">
                                <img className="img-fluid" src="img/s4.jpg" alt="Dental Crowns" />
                                <h4>Dental Crowns</h4>
                                <p>Our custom dental crowns are designed to protect and restore damaged teeth, ensuring a natural look and feel.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service">
                                <img className="img-fluid" src="img/s2.jpg" alt="Dental Implants" />
                                <h4>Dental Implants</h4>
                                <p>Replace missing teeth with our state-of-the-art dental implants for a permanent and effective solution.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service">
                                <img className="img-fluid" src="img/s1.jpg" alt="Consultations" />
                                <h4>Consultations</h4>
                                <p>Our expert consultations provide personalized treatment plans and address all your dental health concerns.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;

import React from 'react';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
    return (
        <>
            <section className="home-about-area section-gap relative">
                <div className="container">
                    <div className="row align-items-center justify-content-end">
                        <div className="col-lg-6 no-padding home-about-right">
                            <h1 className="text-white">
                                Who We Are <br />
                                Committed to Your Dental Health
                            </h1>
                            <p>
                                At our dental clinic, we prioritize your oral health with a team of experienced professionals. Our mission is to provide exceptional care with the latest technology and a compassionate approach. Whether you need a routine check-up or advanced dental treatments, we are here to ensure your smile is bright and healthy.
                            </p>
                            <div className="row no-gutters">
                                <div className="single-services col">
                                    <span className="lnr lnr-diamond"></span>
                                    <Link to="#">
                                        <h4 className="text-white">Comprehensive Care</h4>
                                    </Link>
                                    <p>
                                        From preventive care to cosmetic treatments, we offer a wide range of services to meet all your dental needs in one place.
                                    </p>
                                </div>
                                <div className="single-services col">
                                    <span className="lnr lnr-phone"></span>
                                    <Link to="#">
                                        <h4 className="text-white">Personalized Support</h4>
                                    </Link>
                                    <p>
                                        Our friendly staff is dedicated to providing personalized support, ensuring a comfortable and caring experience at every visit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeAbout;

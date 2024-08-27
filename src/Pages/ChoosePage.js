import React from 'react'
import Team from '../Componets/Team';
import Features from '../Componets/Features';
import { Link } from 'react-router-dom';

const ChoosePage = () => {
    return (
        <>
            <section className="banner-area relative about-banner" id="home" style={{ position: 'relative' }}>
                <div className="overlay overlay-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="about-content col-lg-12">
                            <h1 className="text-white" style={{ textAlign: 'center' }}>
                                Pricing Plan
                            </h1>
                            <p className="text-white link-nav" style={{ textAlign: 'center' }}>
                                <Link to="home">Home</Link> <span className="lnr lnr-arrow-right"></span> <Link to="/">Pricing Plan</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="price-area section-gap" id="price" style={{ padding: '60px 0' }}>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="menu-content pb-60 col-lg-8">
                            <div className="title text-center">
                                <h1 className="mb-10">Choose the best dental care plan for you</h1>
                                <p>Find the right plan to suit your dental needs and budget.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="col-lg-4" style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="single-price no-padding" style={{ textAlign: 'center', border: '1px solid #ddd', borderRadius: '8px', padding: '20px', margin: '10px' }}>
                                <div className="price-top">
                                    <h4>Basic Plan</h4>
                                </div>
                                <ul className="lists" style={{ listStyleType: 'none', padding: 0 }}>
                                    <li><i className="fa fa-check"></i> Routine Check-Up</li>
                                    <li><i className="fa fa-check"></i> Cleaning & Polishing</li>
                                    <li><i className="fa fa-check"></i> Fluoride Treatment</li>
                                    <li><i className="fa fa-check"></i> X-Ray (if needed)</li>
                                    <li><i className="fa fa-times"></i> Scaling & Root Planing</li>
                                    <li><i className="fa fa-times"></i> Teeth Whitening</li>
                                    <li><i className="fa fa-times"></i> Cosmetic Consultations</li>
                                </ul>
                                <div className="price-bottom">
                                    <div className="price-wrap d-flex flex-row justify-content-center">
                                        <span className="price">₹</span><h1>599</h1><span className="time">One-Time</span>
                                    </div>
                                    <Link to="/" className="primary-btn header-btn" style={{ display: 'inline-block', marginTop: '10px' }}>Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="single-price no-padding" style={{ textAlign: 'center', border: '1px solid #ddd', borderRadius: '8px', padding: '20px', margin: '10px' }}>
                                <div className="price-top">
                                    <h4>Standard Plan</h4>
                                </div>
                                <ul className="lists" style={{ listStyleType: 'none', padding: 0 }}>
                                    <li><i className="fa fa-check"></i> All Basic Plan Services</li>
                                    <li><i className="fa fa-check"></i> Scaling & Root Planing</li>
                                    <li><i className="fa fa-check"></i> Teeth Whitening</li>
                                    <li><i className="fa fa-check"></i> Oral Health Consultation</li>
                                    <li><i className="fa fa-times"></i> Advanced Teeth Whitening</li>
                                    <li><i className="fa fa-times"></i> Cosmetic Consultations</li>
                                    <li><i className="fa fa-times"></i> Personalized Oral Hygiene Kit</li>
                                </ul>
                                <div className="price-bottom">
                                    <div className="price-wrap d-flex flex-row justify-content-center">
                                        <span className="price">₹</span><h1>999</h1><span className="time">One-Time</span>
                                    </div>
                                    <Link to="/" className="primary-btn header-btn" style={{ display: 'inline-block', marginTop: '10px' }}>Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="single-price no-padding" style={{ textAlign: 'center', border: '1px solid #ddd', borderRadius: '8px', padding: '20px', margin: '10px' }}>
                                <div className="price-top">
                                    <h4>Premium Plan</h4>
                                </div>
                                <ul className="lists" style={{ listStyleType: 'none', padding: 0 }}>
                                    <li><i className="fa fa-check"></i> All Standard Plan Services</li>
                                    <li><i className="fa fa-check"></i> Advanced Teeth Whitening</li>
                                    <li><i className="fa fa-check"></i> Cosmetic Consultation</li>
                                    <li><i className="fa fa-check"></i> Personalized Oral Hygiene Kit</li>
                                    <li><i className="fa fa-times"></i> None – All Services Covered</li>
                                </ul>
                                <div className="price-bottom">
                                    <div className="price-wrap d-flex flex-row justify-content-center">
                                        <span className="price">₹</span><h1>1299</h1><span className="time">One-Time</span>
                                    </div>
                                    <Link to="/" className="primary-btn header-btn" style={{ display: 'inline-block', marginTop: '10px' }}>Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Team />
            <Features />
        </>
    );
}

export default ChoosePage;

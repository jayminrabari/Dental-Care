import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="footer-area section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2  col-md-6">
                            <div className="single-footer-widget">
                                <h6>Top Services</h6>
                                <ul className="footer-nav">
                                    <li><Link to="/">Teeth Cleaning</Link></li>
                                    <li><Link to="/">Teeth Whitening</Link></li>
                                    <li><Link to="/">Dental Fillings</Link></li>
                                    <li><Link to="/">Dental Crowns</Link></li>
                                    <li><Link to="/">Dental Implants</Link></li>
                                    <li><Link to="/">Consultations</Link></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-6">
                            <div className="single-footer-widget mail-chimp">
                                <h6 className="mb-20">Contact Us</h6>
                                <h3>+91 8469530635</h3>
                                <h3>+91 9106940957</h3>
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12">
                            <div className="single-footer-widget newsletter">
                                <h6>Newsletter</h6>
                                <p>You can trust us. we only send promo offers, not a single spam.</p>
                                <div id="mc_embed_signup">
                                    <form target="_blank" novalidate="true" action="/" className="form-inline">

                                        <div className="form-group row" style={{ width: "100%" }}>
                                            <div className="col-lg-8 col-md-12">
                                                <input name="EMAIL" placeholder="Your Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address '" required="" type="email" />
                                                <div style={{ position: "absolute", left: "-5000px" }}>
                                                    <input tabindex="-1" value="" type="text" />
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-12">
                                                <button className="nw-btn primary-btn">Subscribe<span className="lnr lnr-arrow-right"></span></button>
                                            </div>
                                        </div>
                                        <div className="info"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row footer-bottom d-flex justify-content-between ">
                        <p className="col-lg-8 col-sm-12 footer-text m-0">
                            Copyright © 2024 Dentist. All Rights Reserved
                        <br />
                            Created by <a href="https://jaymin-rabari.vercel.app" target="_blank" rel="noopener noreferrer">Jaymin Rabari</a>
                        </p>
                        <div className="col-lg-4 col-sm-12 footer-social">
                            <Link to="https://www.linkedin.com/in/jayminrabari" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></Link>
                            <Link to="https://github.com/jayminrabari" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></Link>
                            <Link to="mailto:jayminrabari2000@gmail.com"><i className="fa fa-envelope"></i></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;
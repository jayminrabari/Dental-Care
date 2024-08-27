import React from 'react'
import { Link } from 'react-router-dom'

const ContactPage = () => {
    return (
        <>
            <section className="banner-area relative about-banner" id="home">
                <div className="overlay overlay-bg"></div>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="about-content col-lg-12">
                            <h1 className="text-white">
                                Contact Us
                            </h1>
                            <p className="text-white link-nav"><Link href="home">Home </Link>  <span className="lnr lnr-arrow-right"></span>  <Link to="/"> Contact Us</Link></p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="contact-page-area section-gap">
                <div className="container">
                    <div className="row">
                        <div className=" col-12 mb-5"  id="map">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14360.226669727034!2d72.5986075964157!3d23.037191559113158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e844d4d2a38f7%3A0x69c16b4c8e1b746b!2sMainagar%2C%20Ahmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1689082995794!5m2!1sen!2sin" 
                            style={{ border: "0", width: "100%", height: "60vh" }} 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                        </div>
                        <div className="col-lg-4 d-flex flex-column address-wrap">
                            <div className="single-contact-address d-flex flex-row">
                                <div className="icon">
                                    <span className="lnr lnr-home"></span>
                                </div>
                                <div className="contact-details">
                                    <h5>Ahmadabad, Gujarat</h5>
                                    <p>
                                        Maninagar, Ahmadabad
                                    </p>
                                </div>
                            </div>
                            <div className="single-contact-address d-flex flex-row">
                                <div className="icon">
                                    <span className="lnr lnr-phone-handset"></span>
                                </div>
                                <div className="contact-details">
                                    <h5>+91 8469530635</h5>
                                    <p>Mon to Fri 9am to 6 pm</p>
                                </div>
                            </div>
                            <div className="single-contact-address d-flex flex-row">
                                <div className="icon">
                                    <span className="lnr lnr-envelope"></span>
                                </div>
                                <div className="contact-details">
                                    <h5>jayminrabari2000@gmail.com</h5>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <form className="form-area contact-form text-right" id="myForm">
                                <div className="row">
                                    <div className="col-lg-6 form-group">
                                        <input name="name" placeholder="Enter your name" className="common-input mb-20 form-control" required="" type="text" />

                                        <input name="email" placeholder="Enter email address" className="common-input mb-20 form-control" required="" type="email" />

                                        <input name="subject" className="common-input mb-20 form-control" placeholder="Enter subject" required="" type="text" />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <textarea className="common-textarea form-control" name="message" placeholder="Enter Messege" required=""></textarea>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="alert-msg" style={{ textAlign: "left" }}></div>
                                        <button className="genric-btn primary circle" style={{ float: "right" }}>Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ContactPage;
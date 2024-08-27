import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <div className="pt-5"></div>
            <section className="banner-area relative" id="home">
                <div className="overlay overlay-bg"></div>
                <div className="container mb-5 mt-4 py-5">
                    <div className="row fullscreen d-flex justify-content-center align-items-center">
                        <div className="banner-content col-lg-9 col-md-12 justify-content-center">
                            <h6 className="text-uppercase">Don’t look further, This is your Dentist</h6>
                            <h1>
                                Authentic Dental Service
                            </h1>
                            <p className="text-white mx-auto">
                            "Discover top-notch dental care with our expert team. From routine cleanings to advanced treatments, we ensure your smile stays bright and healthy. Book your appointment today for personalized care!"
                            </p>
                            <Link to="#" className="primary-btn header-btn text-uppercase mt-10 my-0 my-lg-4">Get Started</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hero;
import React from 'react'

const Team = () => {
    return (
        <>
            <section className="team-area section-gap" id="team">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="menu-content pb-70 col-lg-8">
                            <div className="title text-center">
                                <h1 className="mb-10">Our Team</h1>
                                <p>Our skilled dental professionals provide top-notch care and personalized treatment in a friendly, comfortable environment.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center d-flex align-items-center">
                        <div className="col-lg-3 col-md-6 single-team">
                            <div className="thumb">
                                <img className="img-fluid" src="img/D1.jpg" alt=""  />
                                <div className="align-items-end justify-content-center d-flex">
                                    <p>
                                    DDS Doctor of Dental Surgery
                                    </p>
                                    <h4>Dr. Andy Florence</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 single-team">
                            <div className="thumb">
                                <img className="img-fluid" src="img/D2.jpg" alt="" />
                                <div className="align-items-end justify-content-center d-flex">
                                    <p>
                                    DMD Doctor of Medicine in Dentistry
                                    </p>
                                    <h4>Dr.Jaymin Rabari</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 single-team">
                            <div className="thumb">
                                <img className="img-fluid" src="img/D3.jpg" alt="" />
                                <div className="align-items-end justify-content-center d-flex">
                                    <p>
                                    BDS Bachelor of Dental Surgery
                                    </p>
                                    <h4>Dr. Jaime Thompson</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 single-team">
                            <div className="thumb">
                                <img className="img-fluid" src="img/D4.jpg" alt="" />
                                <div className="align-items-end justify-content-center d-flex">
                                    <p>
                                    MSD Master of Science in Dentistry
                                    </p>
                                    <h4>Dr. Rachel Thompson </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Team;
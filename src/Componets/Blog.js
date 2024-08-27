import React from 'react'

const Blog = () => {
    return (
        <>
            <section class="blog-area section-gap" id="blog">
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <div class="menu-content pb-70 col-lg-8">
                            <div class="title text-center">
                                <h1 class="mb-10">Latest From Our Blog</h1>
                                <p>Stay updated with our latest dental tips and news for a healthier smile.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6 single-blog">
                            <div class="thumb">
                                <img class="img-fluid" src="img/b1.jpg" alt=""/>
                            </div>
                            <p class="date">20 AUG 2023</p>
                            <a href="blog-single.html"><h4>The Importance of Regular Dental Checkups</h4></a>
                            <p>
                                Discover why routine visits are crucial for maintaining oral health.
                            </p>
                            <div class="meta-bottom d-flex justify-content-between">
                                <p><span class="lnr lnr-heart"></span> 15 Likes</p>
                                <p><span class="lnr lnr-bubble"></span> 02 Comments</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 single-blog">
                            <div class="thumb">
                                <img class="img-fluid" src="img/b2.jpg" alt=""/>
                            </div>
                            <p class="date">20 AUG 2023</p>
                            <a href="blog-single.html"><h4>Top Tips for Maintaining Oral Hygiene at Home</h4></a>
                            <p>
                                Simple practices to keep your teeth and gums healthy between visits.
                            </p>
                            <div class="meta-bottom d-flex justify-content-between">
                                <p><span class="lnr lnr-heart"></span> 15 Likes</p>
                                <p><span class="lnr lnr-bubble"></span> 02 Comments</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 single-blog">
                            <div class="thumb">
                                <img class="img-fluid" src="img/b3.jpg" alt=""/>
                            </div>
                            <p class="date">20 AUG 2023</p>
                            <a href="blog-single.html"><h4>Understanding Tooth Sensitivity: Causes and Solutions</h4></a>
                            <p>
                            Learn about common triggers for tooth sensitivity and how to manage it.
                            </p>
                            <div class="meta-bottom d-flex justify-content-between">
                                <p><span class="lnr lnr-heart"></span> 15 Likes</p>
                                <p><span class="lnr lnr-bubble"></span> 02 Comments</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 single-blog">
                            <div class="thumb">
                                <img class="img-fluid" src="img/b4.jpg" alt=""/>
                            </div>
                            <p class="date">20 AUG 2023</p>
                            <a href="blog-single.html"><h4>How to Choose the Right Toothpaste for Your Needs</h4></a>
                            <p>
                            Guidance on selecting toothpaste based on your specific dental concerns.
                            </p>
                            <div class="meta-bottom d-flex justify-content-between">
                                <p><span class="lnr lnr-heart"></span> 15 Likes</p>
                                <p><span class="lnr lnr-bubble"></span> 02 Comments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Blog;
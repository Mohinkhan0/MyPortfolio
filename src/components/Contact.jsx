import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                id='contact'
                className='py-20'
            >

                <div className="container py-5">
                    {/* Heading */}
                    <div className="text-center mb-5">
                        <h1 className="fw-bold display-4">
                            Contact <span className="text-primary">Us</span>
                            <p className=" fs-5">
                                Have a project or want to connect? Let’s talk.
                            </p>
                        </h1>
                    </div>

                    <section className="contact-section py-5" id="contact">
                        <div className="container">

                            {/* Heading */}
                            <div className="text-center mb-5">



                            </div>

                            <div className="row align-items-center g-5">

                                {/* Left Side */}
                                <div className="col-lg-5">

                                    <div className="contact-info p-4">

                                       

                                        <div className="mb-4 d-flex align-items-center">
                                            <div className="icon-box me-3">
                                                <i class="fa-solid fa-phone"></i>
                                            </div>

                                            <div>
                                                <h5 className="mb-1 text-primary">Phone</h5>
                                                <p className="text-muted mb-0">
                                                    +91 7456917763
                                                </p>
                                            </div>
                                        </div>

                                         <div className="mydetails mb-4 d-flex align-items-center">
                                            <div className="icon-box me-3">
                                               <i class="fa-solid fa-envelope"></i>
                                            </div>

                                            <div>
                                                <h5 className="mb-1 text-primary">Email</h5>
                                                <p className="text-muted mb-0">
                                                    mohin745691@gmail.com
                                                </p>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div className="icon-box me-3">
                                                <i class="fa-solid fa-location-dot"></i>
                                            </div>

                                            <div>
                                                <h5 className="mb-1 text-primary">Location</h5>
                                                <p className="text-muted mb-0">
                                                  Ghaziabad, Uttar Pradesh, India
                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                {/* Right Side Form */}
                                <div className="col-lg-7">

                                    <div className="contact-form p-4 p-md-5">

                                        <form>

                                            <div className="row">

                                                <div className="col-md-6 mb-4">
                                                    <input
                                                        type="text"
                                                        className="form-control custom-input"
                                                        placeholder="Your Name"
                                                    />
                                                </div>

                                                <div className="col-md-6 mb-4">
                                                    <input
                                                        type="email"
                                                        className="form-control custom-input"
                                                        placeholder="Your Email"
                                                    />
                                                </div>

                                            </div>

                                            <div className="mb-4">
                                                <input
                                                    type="text"
                                                    className="form-control custom-input"
                                                    placeholder="Subject"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <textarea
                                                    rows="5"
                                                    className="form-control custom-input"
                                                    placeholder="Your Message"
                                                ></textarea>
                                            </div>

                                            <button className="btn btn-primary px-5 py-3 fw-semibold contact-btn">
                                                Send Message
                                            </button>

                                        </form>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </section>


                </div>

            </motion.div>
        </>
    )
}

export default Contact
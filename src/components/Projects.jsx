import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import naukrimittraImage from '../assets/naukrimittra.png';

// Import Swiper styles
import 'swiper/css';


function Projects() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                id='projects'
                className='py-20'
            >

                <div className="container text-center">



                    <div className="container py-5">
                         <div className="text-center mb-5">
                            <h1 className="fw-bold display-4">
                                My <span className="text-primary">Projects</span>
                                <p className=" fs-5">
                                    These are my projects
                                </p>
                            </h1>
                        </div>


                    </div>

                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        loop={true}

                      
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="card border-0 shadow-lg rounded-4 overflow-hidden h-100">

                                {/* Image */}
                                <img
                                    src="https://www.techuweb.com/assets/images/app%20development/codingwalla.png"
                                    className="card-img-top"
                                    alt="project"
                                />

                                {/* Content */}
                                <div className="card-body bg-dark text-white p-2">
                                    <h5 className="card-title fw-bold"> Codingwalla </h5>

                                    <p className="card-text small text-light">
                                     Developing responsive and scalable web applications using React.js
                                    </p>

                                    {/* Tech badges */}
                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        <span className="badge bg-secondary">React</span>
                                        <span className="badge bg-secondary">OpenAI API</span>
                                        <span className="badge bg-secondary">Cloudinary</span>
                                        <span className="badge bg-secondary">Tailwind CSS</span>
                                    </div>

                                    {/* Buttons */}
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-primary btn-sm w-50">
                                            View Demo
                                        </button>
                                        <button className="btn btn-outline-light btn-sm w-50">
                                            Code
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card border-0 shadow-lg rounded-4 overflow-hidden h-100">

                                {/* Image */}
                                <img
                                    src="https://www.techuweb.com/assets/images/app%20development/asian-fuel.png"
                                    className="card-img-top"
                                    alt="project"
                                />

                                {/* Content */}
                                <div className="card-body bg-dark text-white p-2">
                                    <h5 className="card-title fw-bold">Asian Fuel</h5>

                                    <p className="card-text small text-light">
                                       Developing responsive and scalable web applications using React.js.
                                    </p>

                                    {/* Tech badges */}
                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        <span className="badge bg-secondary">React</span>
                                        <span className="badge bg-secondary">OpenAI API</span>
                                        <span className="badge bg-secondary">Cloudinary</span>
                                        <span className="badge bg-secondary">Tailwind CSS</span>
                                    </div>

                                    {/* Buttons */}
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-primary btn-sm w-50">
                                            View Demo
                                        </button>
                                        <button className="btn btn-outline-light btn-sm w-50">
                                            Code
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card border-0 shadow-lg rounded-4 overflow-hidden h-100">

                                {/* Image */}
                                <img
                                    src="https://www.techuweb.com/assets/images/app%20development/abfc%20fuel.png"
                                    className="card-img-top"
                                    alt="project"
                                />

                                {/* Content */}
                                <div className="card-body bg-dark text-white p-2">
                                    <h5 className="card-title fw-bold">ABFC Fuel</h5>

                                    <p className="card-text small text-light">
                                        Developing responsive and scalable web applications using React.js,
                                        Next.js, JavaScript (ES6), and Bootstrap.
                                    </p>

                                    {/* Tech badges */}
                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        <span className="badge bg-secondary">React</span>
                                        <span className="badge bg-secondary">OpenAI API</span>
                                        <span className="badge bg-secondary">Cloudinary</span>
                                        <span className="badge bg-secondary">Tailwind CSS</span>
                                    </div>

                                    {/* Buttons */}
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-primary btn-sm w-50">
                                            View Demo
                                        </button>
                                        <button className="btn btn-outline-light btn-sm w-50">
                                            Code
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card border-0 shadow-lg rounded-4 overflow-hidden h-100">

                                {/* Image */}
                                <img
                                    src="https://www.techuweb.com/assets/images/app%20development/appboombox1.png"
                                    className="card-img-top"
                                    alt="project"
                                />

                                {/* Content */}
                                <div className="card-body bg-dark text-white p-2">
                                    <h5 className="card-title fw-bold">App Boom Box </h5>

                                    <p className="card-text small text-light">
                                      Developing responsive and scalable web applications using React.js
                                    </p>

                                    {/* Tech badges */}
                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        <span className="badge bg-secondary">React</span>
                                        <span className="badge bg-secondary">OpenAI API</span>
                                        <span className="badge bg-secondary">Cloudinary</span>
                                        <span className="badge bg-secondary">Tailwind CSS</span>
                                    </div>

                                    {/* Buttons */}
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-primary btn-sm w-50">
                                            View Demo
                                        </button>
                                        <button className="btn btn-outline-light btn-sm w-50">
                                            Code
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card border-0 shadow-lg rounded-4 overflow-hidden h-100">

                                {/* Image */}
                                <img
                                    src={naukrimittraImage}
                                    className="card-img-top"
                                    alt="project"
                                />

                                {/* Content */}
                                <div className="card-body bg-dark text-white p-2">
                                    <h5 className="card-title fw-bold"> Job Portal </h5>

                                    <p className="card-text small text-light">
                                      Developing responsive and scalable web applications using React.js
                                    </p>

                                    {/* Tech badges */}
                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        <span className="badge bg-secondary">React</span>
                                        <span className="badge bg-secondary">OpenAI API</span>
                                        <span className="badge bg-secondary">Cloudinary</span>
                                        <span className="badge bg-secondary">Tailwind CSS</span>
                                    </div>

                                    {/* Buttons */}
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-primary btn-sm w-50">
                                            View Demo
                                        </button>
                                        <button className="btn btn-outline-light btn-sm w-50">
                                            Code
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>


                    </Swiper>

                    <button className='btn btn-primary p-2 my-5'> 
                        <a href="#projects" className="text-white text-decoration-none">
                            See more
                        </a>
                    </button>

                </div>

            </motion.div>
        </>
    )
}

export default Projects
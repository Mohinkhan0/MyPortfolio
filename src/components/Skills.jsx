import React from 'react'
import { motion } from 'framer-motion'

function Skills() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                id='skills'
                className='py-20'
            >

                <div className="container text-center">



                    <div className="container py-5">
                        <div className="text-center mb-5">
                            <h1 className="fw-bold display-4">
                                My <span className="text-primary">Skills</span>
                                <p className=" fs-5">
                                    Thses are my Skills
                                </p>
                            </h1>
                        </div>

                        <div className="row g-4">

                            {/* HTML */}
                            <div className="col-6 col-md-4 col-lg-2">
                                <div className="skill-box text-center p-4 shadow-sm rounded-4">
                                    <i className="fa-brands fa-html5 fa-3x text-danger mb-3"></i>
                                    <h5 className="fw-bold">HTML5</h5>
                                </div>
                            </div>

                            {/* CSS */}
                            <div className="col-6 col-md-4 col-lg-2">
                                <div className="skill-box text-center p-4 shadow-sm rounded-4">
                                    <i className="fa-brands fa-css3-alt fa-3x text-primary mb-3"></i>
                                    <h5 className="fw-bold">CSS3</h5>
                                </div>
                            </div>

                            {/* JavaScript */}
                            <div className="col-6 col-md-4 col-lg-2">
                                <div className="skill-box text-center p-4 shadow-sm rounded-4">
                                    <i className="fa-brands fa-js fa-3x text-warning mb-3"></i>
                                    <h5 className="fw-bold">JavaScript</h5>
                                </div>
                            </div>

                            {/* React */}
                            <div className="col-6 col-md-4 col-lg-2">
                                <div className="skill-box text-center p-4 shadow-sm rounded-4">
                                    <i className="fa-brands fa-react fa-3x text-info mb-3"></i>
                                    <h5 className="fw-bold">React JS</h5>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-2">
                                <div className="skill-box text-center p-4 shadow-sm rounded-4">
                                    <i className="fa-brands fa-node-js fa-3x text-success mb-3"></i>
                                    <h5 className="fw-bold">Node JS</h5>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-2">
                                <div className="skill-box text-center p-4 shadow-sm rounded-4">
                                    <i className="fa-solid fa-server fa-3x text-dark mb-3"></i>
                                    <h5 className="fw-bold">Express JS</h5>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-2">
                                <div className="skill-box text-center p-4 shadow-sm rounded-4">
                                    <i className="fa-solid fa-database fa-3x text-success mb-3"></i>
                                    <h5 className="fw-bold">MongoDb</h5>
                                </div>
                            </div>

                            {/* Bootstrap */}
                            <div className="col-6 col-md-4 col-lg-2">
                                <div className="skill-box text-center p-4 shadow-sm rounded-4">
                                    <i className="fa-brands fa-bootstrap fa-3x text-purple mb-3"></i>
                                    <h5 className="fw-bold">Bootstrap</h5>
                                </div>
                            </div>

                            {/* Tailwind */}
                            <div className="col-6 col-md-4 col-lg-2">
                                <div className="skill-box text-center p-4 shadow-sm rounded-4">
                                    <i className="fa-solid fa-wind fa-3x text-info mb-3"></i>
                                    <h5 className="fw-bold">Tailwind</h5>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-2">
                                <div className="skill-box text-center p-4 shadow-sm rounded-4">
                                    <i className="fa-brands fa-java fa-3x text-danger mb-3"></i>
                                    <h5 className="fw-bold">Java</h5>
                                </div>
                            </div>

                            {/* Git */}
                            <div className="col-6 col-md-4 col-lg-2">
                                <div className="skill-box text-center p-4 shadow-sm rounded-4">
                                    <i className="fa-brands fa-git-alt fa-3x text-danger mb-3"></i>
                                    <h5 className="fw-bold">Git</h5>
                                </div>
                            </div>

                            {/* GitHub */}
                            <div className="col-6 col-md-4 col-lg-2">
                                <div className="skill-box text-center p-4 shadow-sm rounded-4">
                                    <i className="fa-brands fa-github fa-3x text-dark mb-3"></i>
                                    <h5 className="fw-bold">GitHub</h5>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </motion.div>
        </>
    )
}

export default Skills
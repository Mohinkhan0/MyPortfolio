import React from 'react'
import { motion } from 'framer-motion'


function Work() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                id='experince'
                className='py-20'
            >

                <div className="container py-5">
                    {/* Heading */}
                    <div className="text-center mb-5">
                        <h1 className="fw-bold display-4">
                            My <span className="text-primary">Experience</span>
                        </h1>

                        <p className="text-light">
                            My professional journey & skills
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="timeline">

                        {/* Item 1 */}
                        <div className="timeline-item left">
                            <div className="timeline-content">
                                <h4>Frontend Developer</h4>
                                <span>Techuweb (Noida) | Dec 2024 -- Feb 2026</span>
                                <p className='text-dark'>
                                    Developing responsive and scalable web applications using React.js,
                                    Next.js, JavaScript (ES6), and Bootstrap. Building reusable
                                    components, integrating REST APIs, optimizing performance, and
                                    creating user-friendly interfaces for better user experience.
                                </p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="timeline-item right">
                            <div className="timeline-content">
                                <h4>Frontend Developer</h4>
                                <span>Live India Tech | June 2024 -- Dec 2024</span>
                                <p className='text-dark'>
                                    Designed and developed responsive web interfaces using HTML, CSS,
                                    JavaScript, and React.js. Worked on UI improvements, API integration,
                                    component-based architecture, and interactive user experiences to
                                    deliver modern and efficient web solutions.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </motion.div>
        </>
    )
}

export default Work
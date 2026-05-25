import React from 'react'
import { motion } from 'framer-motion'
import profile from '../assets/profile.jpeg'

function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        id='about'
        className='py-20'
      >

        <div className="container text-center">
          <div className="text-center mb-5">
            <h1 className="fw-bold display-4">
              About <span className="text-primary">Us</span>
              <p className=" fs-5">
                Passionate about building modern, responsive, and impactful digital experiences that turn ideas into reality.
              </p>
            </h1>
          </div>

          {/* imgaes section */}
          <div className="container py-5">
            <div className="row align-items-center g-5">

              {/* Image Section */}
              <div className="col-lg-5 text-center">
                <div className="about-img">
                  <img
                    src={profile}
                    alt="Profile"
                    className=" img-fluid rounded-4 shadow-lg"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="col-lg-7">
                <div className="content">
                  <h2 className="fw-bold mb-4 text-primary">
                    My Journey
                  </h2>

                  <p className=" fs-5">
                    Frontend Developer with 1.9+ years of experience in building responsive, scalable, and high-performance web applications. Skilled in <span className="text-primary">HTML5</span>, <span className="text-primary">CSS3</span>, <span className="text-primary">JavaScript (ES6)</span>, <span className="text-primary">React.js</span>, <span className="text-primary">Next.js</span>, <span className="text-primary">Redux</span>, and <span className="text-primary">Bootstrap</span> to create modern and user-friendly digital experiences.
                  </p>
                  <p className=" fs-5">
                    Experienced in developing reusable components, integrating RESTful APIs, and optimizing application performance. Strong understanding of component-based architecture, state management, and responsive design principles to build efficient and maintainable applications.
                  </p>

                  <p className=" fs-5 mb-4">
                    Currently expanding expertise in the <span className="text-primary">MERN Stack</span> (MongoDB, Express.js, React.js, Node.js) to develop full-stack applications. Passionate about continuous learning, solving real-world problems, and creating impactful digital solutions through technology. 🚀
                  </p>


                  <div className="row g-4">

                    <div className="col-md-4">
                      <div className="card border-0 shadow-sm h-100 text-center p-4 rounded-4 hover-card">
                        <div className="mb-3">
                          <i className="fa-solid fa-briefcase fa-2x text-primary"></i>
                        </div>
                        <h5 className="fw-bold text-primary">Experience</h5>
                        <p className="text-muted small mb-0">
                          1.6+ Years Working
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card border-0 shadow-sm h-100 text-center p-4 rounded-4 hover-card">
                        <div className="mb-3">
                          <i className="fa-solid fa-diagram-project fa-2x text-success"></i>
                        </div>
                        <h5 className="fw-bold text-success">Projects</h5>
                        <p className="text-muted small mb-0">
                          15+ Completed
                        </p>
                      </div>
                    </div>


                    <div className="col-md-4">
                      <div className="card border-0 shadow-sm h-100 text-center p-4 rounded-4 hover-card">
                        <div className="mb-3">
                          <i className="fa-solid fa-users fa-2x text-danger"></i>
                        </div>
                        <h5 className="fw-bold text-danger">Happy Clients</h5>
                        <p className="text-muted small mb-0">
                          Worldwide Happy Clients
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </motion.div>
    </>
  )
}

export default About
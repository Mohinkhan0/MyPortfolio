import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
     
        className='d-flex'
      >
        <div className="container hero-section d-flex justify-content-center align-items-center">
          {/* left side */}
          <div className="hero-left w-100 w-md-50">
            <h1 className='fs-1 fw-bold'>
              Hii, I'm <span className='text-primary'>Mohin khan</span>
            </h1>
            <h2 className='text-primary typewriter fw-bold'>I am Fullstack developer</h2>
            <p className='mytext pt-2 pb-1'>Frontend Developer skilled in React.js, creating responsive,<br /> scalable web
              applications with modern and seamless experiences.
            </p>
            <div className="social-links d-flex  ">
              <a className='mx-1 my-1 fs-3' target='_blank' href="http://www.linkedin.com/in/mohin-khan-4409b8196"><i class="fa-brands fa-linkedin-in"></i></a>
              <a className='mx-1 my-1 fs-3' target='_blank' href="https://github.com/Mohinkhan0"><i class="fa-brands fa-github"></i></a>
              <a className='mx-1 my-1 fs-3' href=""><i class="fa-brands fa-instagram"></i></a>
              <a className='mx-1 my-1 fs-3' href=""><i class="fa-brands fa-twitter"></i></a>
            </div>
            <div className=" hero-btns d-flex">
              <a className='bg-primary fw-semibold  px-4 py-2 ' href="#projects">View Work</a>
              <a
                className="btn btn-outline-primary px-4 py-2 fw-semibold"
                href="#contact"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* right side */}
          <div className="d-flex justify-content-center w-50">
            <div className="position-relative">

              <div className="rounded-circle bg-primary p-2 d-flex align-items-center justify-content-center"
                style={{ width: "400px", height: "450px" }}>
                <img
                  src={profile}
                  alt="Profile"
                  className="floating-img rounded-circle w-100 h-100"
                />
              </div>

            </div>
          </div>

        </div>

      </motion.div>
    </>
  )
}

export default Hero
import react, { useState } from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [showMenu, setShowMenue] = useState(false)
    return (
        <>
            <nav className=" navbar fixed w-full z-50  fixed py-4 px-8 shadow-lg">
                <div className=" main-box container mx-auto flex justify-between item-center ">
                    <div className="nav-itsms">
                        <a className='text-3xl font-bold text-white fs-3' href="">Mohin
                            <span className='text-primary'> Khan</span>
                        </a>
                    </div>
                    <div className="navs nav-itsms hidded md:flex space-x-10">
                        <Link to="/" className='relative text-white transition duration-300
                         hover:text-primary group'>
                            <span>Home</span>
                           
                        </Link>
                        <a href="#about" className='relative text-white transition duration-300
                         hover:text-primary group'>
                            <span>About</span>
                           
                        </a>
                        <a href="#skills" className='relative text-white transition duration-300
                         hover:text-primary group'>
                            <span>Skills</span>
                           
                        </a>
                        <a href="#experince" className='relative text-white transition duration-300
                         hover:text-primary group'>
                            <span>Experince</span>
                           
                        </a>
                        <a href="#projects" className='relative text-white transition duration-300
                         hover:text-primary group'>
                            <span>Projects</span>
                           
                        </a>
                        <a href="#contact" className='relative text-white transition duration-300
                         hover:text-primary group'>
                            <span>Contact us </span>
                           
                        </a>

                    </div>
                    <div className="menu-btns">
                        {
                            showMenu ? <button onClick={() => setShowMenue(!showMenu)}><i class="fa-solid fa-xmark"></i></button> :
                                <button onClick={() => setShowMenue(!showMenu)}><i class="fa-solid fa-bars"></i></button>
                        }


                    </div>
                </div>
                {/* mobile views */}
                {
                    showMenu && (
                        <div className={`mobile-menu d-md-none bg-dark vh-100 d-flex flex-column gap-3 
                            ${showMenu ? "menu-open" : "menu-close"}`}>

                            <div className="nav-itsms">
                                <a className='text-3xl font-bold text-white' href="">Mohin
                                    <span className='text-primary'>Khan</span>
                                </a>
                            </div>
                            <a href="#home" onClick={() => setShowMenue(!showMenu)} className='relative text-white transition duration-300
                           hover:text-primary group'>
                                <span>Home</span>
                              
                            </a>
                            <a href="#about" onClick={() => setShowMenue(!showMenu)} className='relative text-white transition duration-300
                         hover:text-primary group'>
                                <span>About</span>
                               
                            </a>
                            <a href="#skills" onClick={() => setShowMenue(!showMenu)} className='relative text-white transition duration-300
                         hover:text-primary group'>
                                <span>Skills</span>
                               
                            </a>
                            <a href="#experince" onClick={() => setShowMenue(!showMenu)} className='relative text-white transition duration-300
                         hover:text-primary group'>
                                <span>Experince</span>
                                
                            </a>
                            <a href="#projects" onClick={() => setShowMenue(!showMenu)} className='relative text-white transition duration-300
                         hover:text-primary group'>
                                <span>Projects</span>
                               
                            </a>
                            <a href="#contact" onClick={() => setShowMenue(!showMenu)} className='relative text-white transition duration-300
                         hover:text-primary group'>
                                <span>Contact us </span>
                               
                            </a>
                        </div>
                    )
                }

            </nav >
        </>
    )
}

export default Navbar;
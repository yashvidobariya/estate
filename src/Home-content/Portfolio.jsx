import React from 'react'
import '../css/Index.css'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import p1 from '../../src/images/p1.jpg';
import p2 from '../../src/images/p2.jpg';
import p3 from '../../src/images/p3.jpg';
import p4 from '../../src/images/p4.jpg';
import { FaGreaterThan } from "react-icons/fa";

const Portfolio = () => {
    return (
        <div className='home-sec-container'>
            <div className="home-port-title">
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }} className="home-port-textdiv">

                    <h2>Portfolio</h2>
                    <p>Lora adipiem ipsum  elit. Sunt incidunt voluptatem,  expeditsci corrupti
                        olup amet. Lorem ipsum dolor sit amet consectetur.!</p>
                </motion.div>
            </div>

            <div className="home-port-content">
                <div className="home-port-cap">
                    <div className="home-port-img">
                        <img src={p1} alt="Image 1" />
                        <div className="home-port-info">
                            <h2>Building Name</h2>
                            <p>Building Address</p>
                        </div>
                    </div>

                </div>
                <div className="home-port-cap">
                    <div className="home-port-img">
                        <img src={p2} alt="Image 2" />
                        <div className="home-port-info">
                            <h2>Building Name</h2>
                            <p>Building Address Lorem, ipsum. Lorem, ipsum dolor.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="home-port-cap">
                    <div className="home-port-img">
                        <img src={p3} alt="Image 3" />
                        <div className="home-port-info">
                            <h2>Building Name</h2>
                            <p>Building Address Lorem, ipsum. Lorem, ipsum dolor.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="home-port-cap">
                    <div className="home-port-img">
                        <img src={p4} alt="Image 4" />
                        <div className="home-port-info">
                            <h2>Building Name</h2>
                            <p>Building Address Lorem, ipsum. Lorem, ipsum dolor.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="home-port-button">
                <Link to="/Portfolio"><button className='home-port-btn'><p>MORE PROJECTS </p><div className="home-port-icon"><FaGreaterThan /></div> </button></Link>
            </div>

        </div>
    )
}

export default Portfolio
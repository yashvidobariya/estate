import React from 'react';
import center from '../../src/images/center.jpg';
import { motion } from "framer-motion"

const Contact = () => {
    return (
        <>
            <div className='main-contact'>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}

                    className="div-title">
                    <p>Contact Us</p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}

                className='cont-container'>
                <div className="con-content">
                    <div className="con-cap1">
                        <div className="con-div">
                            <div className="cont-info">
                                <h3>Call us 24/7</h3>
                                <p>number +45667 89898</p>
                            </div>
                            <div className="contact-box">
                                <div className="cont-info">
                                    <h3>Email</h3>
                                    <p>emailaddress@xyz.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="cont-container1">
                <div className="con-cap1">
                    <div className="con-img1">
                        <div className="con-info">
                            <img src={center} alt='img1' />
                        </div>
                        <div className="contact-box1">
                            <form>
                                <div className="con-info1">
                                    <h3>Get in touch with us today</h3>
                                    <input type="text" placeholder='Your Full Name' required />

                                    <div className="con">
                                        <div className="email">
                                            <input type="email" placeholder='Email Address' required />
                                        </div>
                                        <div className="number">
                                            <input type="tel" placeholder='Contact' required />
                                        </div>
                                    </div>


                                    <textarea placeholder='Message' required></textarea>
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Contact;

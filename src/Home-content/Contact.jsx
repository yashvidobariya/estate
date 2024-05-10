import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../css/Index.css';

const Contact = () => {
    return (
        <div className='contact' >
            <motion.div
                initial={{ x: -400, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 3 }}
                viewport={{ once: true }}
                className="contact-title">
                <h2>READY TO WORK WITH<br />
                    OUR TEAM?</h2>
                <div className="contact-button">
                    <Link to="/contact">
                        <button>Contact With us</button>
                    </Link>
                </div>
            </motion.div>
            <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0360503765!2d-74.30932697674075!3d40.69753996663266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1711003674526!5m2!1sen!2sin" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contact;

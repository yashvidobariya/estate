import React from 'react';
import t1 from '../images/t1.jpg';
import t2 from '../images/t2.jpg';
import t3 from '../images/t3.jpg';
import t4 from '../images/t4.jpg';
import '../css/Index.css'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const Team = () => {
    return (
        <div className='home-team-container'>
            <div className="home-team-content">

                <div className="home-team-cap">
                    <div className="home-team-bg">
                        <div className="home-team-info">
                            <img src={t1} alt="" />
                        </div>
                        <div className="home-team-info">
                            <img src={t2} alt="" />
                        </div>
                        <div className="home-team-info">
                            <img src={t3} alt="" />
                        </div>
                    </div>
                </div>

                <div className="home-team-title">
                    <div className="home-team-textdiv">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="home-team-h2"
                            whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                        >
                            <h2>Our Team</h2>
                        </motion.div>
                        <p>Lora adipiem ipsum  elit. Sunt incidunt voluptatem,  expeditsci corrupti olup amet. Lorem ipsum dolor sit amet consectetur.! Lorem ipsum dolor sit, amet ro alias debitis! Harum temporibus quisquam, facere cupiditate atque quo ipsa?</p>
                        <div className="home-team-button">
                            <Link to="/about"><button>Team more</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;

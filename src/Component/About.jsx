import React from 'react';
import '../css/Index.css'
import teamdata from '../data/Team.json'
import { motion } from "framer-motion"

const About = () => {
    return (
        <>
            <div className='about'>
            </div>

            <motion.div
                className='about-container'
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}>
                <div className="main-about-content">
                    <div className="about-cap1">
                        <div className="about-div">
                            <div className="about-info">
                                <h3>About us</h3>
                            </div>
                            <div className="about-info-box">
                                <div className="about-info">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore expedita voluptatem iure? Officiis totam illum aborum aliquid iste esse incidunt nostrum. Cum, vitae libero repellat temporibus enim sit non.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className='aboutteam-container'>

                <div className="aboutteam-title">
                    <div className="aboutteam-textdiv">
                        <h2>Leadership</h2>
                        <p>Lora adipiem ipsum  elit. Sunt incidunt voluptatem,  expeditsci corrupti
                            olup amet. Lorem ipsum dolor sit amet consectetur.!</p>
                    </div>
                </div>

                <div className="aboutteam-content">
                    {teamdata.map(data => (
                        <div
                            key={data.id}
                            className="aboutteam-cap">
                            <motion.div
                                initial={{ y: -100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}

                                className="about-team-img">
                                <img src={data.image} alt={`Image ${data.id}`} />
                                <div className="team-name">
                                    <h4>{data.name}</h4>
                                    <p>{data.position}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

            </div>



        </>
    );
}

export default About;

import React from 'react';
import data from '../../src/data/portfolio.json'
import '../css/Index.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const Portfolio = () => {
    return (
        <>
            <div className='portfolio'>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="port-div-title">
                    <p>Portfolio
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 0.8 }}
                className="main-port-content">
                <div className="port-cap1">
                    <div className="port-div">
                        <div className="port-info">
                            <h3>Collection</h3>
                        </div>
                        <div className="port-info-box">
                            <div className="port-info">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore expedita voluptatem iure? Officiis totam illum aborum aliquid iste esse incidunt nostrum. Cum, vitae libero repellat temporibus enim sit non.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className='port-container'>
                <div className="port-content">

                    {data.map((item) => (
                        <div className="port-cap" key={item.id}>
                            <div className="port-img">
                                <img src={item.image} alt={item.name} />
                                <div className="port-info">
                                    <h2>{item.name}</h2>
                                    <p>{item.address}</p>
                                    <Link to={`/portfolio/details/${item.id}`} className='save'><button>Read more</button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Portfolio;

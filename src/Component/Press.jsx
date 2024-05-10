import React from 'react';
import data from '../../src/data/press.json'
import '../css/Index.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
const Press = () => {
    return (
        <>
            <div className='press'>
            </div>


            <div className="press-title-div ">
                <div className="press-sub ">
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="pres-title">
                        <p>
                            In the news</p>
                    </motion.div>
                </div>
            </div>


            <div className='press-sec-container container'>
                <div className="press-content">

                    {data.map((item) => (
                        <div className="press-cap" key={item.id}>
                            <div
                                className="press-img">
                                <img src={item.image} alt={item.name} />
                                <div className="press-info">
                                    <h2>{item.name}</h2>
                                    <p>{item.address}</p>
                                    <Link to={`/press/details/${item.id}`} className='save'><button>Read more</button></Link>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </>
    );
};

export default Press;

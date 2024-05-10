import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../src/data/press.json';
import '../css/Index.css'
import { motion } from "framer-motion"
const Pressdet = () => {
    const { id } = useParams();
    const selectitem = data.find(item => item.id === parseInt(id));

    if (!selectitem) {
        return <div>Item not found</div>;
    }
    const imageUrl = process.env.PUBLIC_URL + selectitem.image;
    const imageUrl1 = process.env.PUBLIC_URL + selectitem.image1;
    const imageUrl2 = process.env.PUBLIC_URL + selectitem.image2;
    return (
        <>
            <div className='press-det'>
            </div>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}

                className="press-detail-content">
                <div className="press-det-cap1">
                    <div className="press-det-div">
                        <div className="press-det-info">
                            <h3>{selectitem.name}</h3>
                            <p>{selectitem.date}</p>
                        </div>
                        <div className="press-info-box">
                            <div className="press-det-info">
                                <p>{selectitem.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>


            <div className="press-det-content">

                <div className="det-cap">
                    <div className="press-det-bg">

                        <div className="press-det-info">
                            <img src={imageUrl} alt="" />
                        </div>
                    </div>


                </div>

                <div className="det-cap">
                    <div className="press-det-bg">

                        <div className="press-det-info">
                            <img src={imageUrl1} alt="" />
                        </div>
                    </div>


                </div>

                <div className="det-cap">
                    <div className="press-det-bg">

                        <div className="press-det-info">
                            <img src={imageUrl2} alt="" />
                        </div>
                    </div>


                </div>

            </div>

        </>
    );
}


export default Pressdet;

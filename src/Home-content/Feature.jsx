import React from 'react'
import '../css/Index.css'
import fe from '../../src/images/fe.jpg'
import { AiFillHome } from "react-icons/ai";
import { FaUserLarge } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import video from '../images/video.mp4';

const Feature = () => {
    return (
        <>

            <div className='home-fe-sec-container'>
                <div className="home-fe-title">
                    <div className="home-fe-textdiv">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lora adipiem ipsum  elit. Sunt incidunt voluptatem,  expeditsci corrupti
                            olup amet. Lorem ipsum dolor sit amet consectetur.!</p>
                    </div>
                </div>

                <div className="home-fe-content">
                    <div className="home-fe-cap">
                        <div className="home-fe-bg">

                            <div className="home-fe-info">
                                <img src={fe} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="home-fe-cap1">

                        <div className="home-fe-img">
                            <div className="home-fe-info">
                                <AiFillHome className='home-fe-icon' />
                            </div>

                            <div className="home-fe-info">
                                <h3>Quality</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.
                                </p>
                            </div>
                        </div>

                        <div className="home-fe-img">
                            <div className="home-fe-info">
                                <FaUserLarge className='home-fe-icon' />
                            </div>

                            <div className="home-fe-info">
                                <h3>Top Rented agents</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing.
                                </p>
                            </div>
                        </div>

                        <div className="home-fe-img">
                            <div className="home-fe-info">
                                <MdOutlineSecurity className='home-fe-icon' />
                            </div>

                            <div className="fe-info">
                                <h3>Easy and safe</h3>
                                <p>Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>


        </>
    )
}

export default Feature
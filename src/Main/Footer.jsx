import React from 'react'
import { SiYourtraveldottv } from "react-icons/si";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import '../css/Index.css';

const Footer = () => {
    return (
        <div className='footer-main'>
            <div className="seccontainer container ">


                <div className="footer flex">

                    <div className="footerlogo">
                        <div className='logo '>
                            <div className='h1'>xyz</div>
                            <p className='p'>©xyz 2024. All rights reserved</p>
                        </div>
                    </div>



                    <div className="socials flex" >

                        <FaTwitter className='icon-footer' />
                        <FaInstagram className='icon-footer' />
                        <FaFacebookF className='icon-footer' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
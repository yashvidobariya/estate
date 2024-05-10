import React from 'react'
import '../css/Index.css'
import Portfolio from '../Home-content/Portfolio'
import Feature from '../Home-content/Feature'
import Team from '../Home-content/Team'
import Contact from '../Home-content/Contact'

import { motion } from "framer-motion"
const Home = () => {
    return (
        <>
            <div className='home'>
                <div className="home-seccontainer container">
                    <motion.div
                        initial={{ opacity: 0, y: -500 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, delay: 0.8 }}

                        className="home-title">
                        <p>
                            Discover Prime  <br />Real Estate Today!</p>
                    </motion.div>
                </div>
            </div>
            <Portfolio />
            <Team />
            <Feature />
            <Contact />
        </>

    )
}

export default Home
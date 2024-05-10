import React, { useState } from 'react';
import '../css/Index.css';
import { GrFormClose } from 'react-icons/gr';
import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Header = () => {
    const [active, setActive] = useState('navbar');

    const showNavbar = () => {
        setActive('navbar activenavbar');
    };

    const removeNavbar = () => {
        setActive('navbar');
    };

    const [trans, setTrans] = useState('header');

    const addBg = () => {
        if (window.scrollY >= 10) {
            setTrans('header activeheader');
        } else {
            setTrans('header');
        }
    };

    window.addEventListener('scroll', addBg);

    return (
        <section className='navbarsection'>
            <div className={trans}>
                <div className='logodiv'>
                    <Link to='/' className='logo'>
                        <h1 className='flex'>
                            xyz<div className='icon' />
                        </h1>
                    </Link>
                </div>

                <div className={active}>
                    <ul className='navlist flex'>
                        <li className='navItem'>
                            <Link to='/' className='navLink'>
                                Home
                            </Link>
                        </li>
                        <li className='navItem'>
                            <Link to='/About' className='navLink'>
                                About
                            </Link>
                        </li>
                        <li className='navItem'>
                            <Link to='/portfolio' className='navLink'>
                                Portfolio
                            </Link>
                        </li>
                        <li className='navItem'>
                            <Link to='/Press' className='navLink'>
                                Press
                            </Link>
                        </li>
                        <li className='navItem'>
                            <Link to='/Contact' className='navLink'>
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <div onClick={removeNavbar} className='closenavbar'>
                        <GrFormClose className='icon' />
                    </div>
                </div>

                <div onClick={showNavbar} className='togglenavbar'>
                    <HiMenu className='icon' />
                </div>
            </div>
        </section>
    );
};

export default Header;

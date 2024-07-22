import React from 'react'
import '../style/Navbar.css'
import { menuLinks } from '../helper/helper'
import { Twirl as Hamburger } from 'hamburger-react'

export const Navbar = () => {

    return (
        <nav className='navMenu'>
            {/* ====/Logo==== */}
            <h3 className='logo'>navbarModel</h3>
            {/* ====/Icons==== */}
            <input type='checkbox' id='check'></input>
            <label htmlFor='check' className='iconMenu' >
                <Hamburger/>
            </label>
            {/* ====/HiperLinks==== */}
            <div className='navBar'>
            {menuLinks.map((link,index)=>{
                return(
                    <ul key={index}>
                        <li>
                            <a to={link.href}>{link.label}</a>
                        </li>
                    </ul>
                )
            })}
            </div>
        </nav>

    );
};

export default Navbar
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import Button from '../UI/Button'

function Navbar() {
    const [menuState, setMenuState] = useState(false)
    const menuHandler = () => setMenuState(!menuState)
    const closeMobileMenu = () => setMenuState(false)
    const [btnState, setBtnState] = useState(true)
    const handleBtn = () => {
        if (window.innerWidth <= 960) {
            setBtnState(false)
        }
        else {
            setBtnState(true)
        }
    }
    window.addEventListener('resize', handleBtn)
    return (
        <nav className='navbar'>
            <section className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    Travel <FontAwesomeIcon className='navbar-icon' icon={faPlaneDeparture} />
                </Link>
                <div className='menu-icon' onClick={menuHandler}>
                    <FontAwesomeIcon className='burger-icon' icon={menuState ? faTimes : faBars} />
                </div>
                <ul className={menuState ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            HomePage
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Tourism
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Travel Tour
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Register
                        </Link>
                    </li>

                </ul>
                {
                    btnState ?
                        <Button to="/" btbStyle='btn--outline'>
                            Register
                        </Button> : null
                }
            </section>
        </nav>
    )
}

export default Navbar
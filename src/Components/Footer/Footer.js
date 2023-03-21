import React from 'react'
import './Footer.css'
import Button from '../UI/Button'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture, faCopyright, } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join our newsletter to get information about tours
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time
                </p>
                <div>
                    <form >
                        <input className='footer-input' type="email" placeholder='Enter Your Email' />
                        <Button btnStyle="btn--special">Sign up</Button>
                    </form>
                </div>
            </section>
            <section className='footer-links'>
                <article className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About us</h2>
                        <Link to='/'>Job positions</Link>
                        <Link to='/'>Contact us</Link>
                        <Link to='/'>Cooperate with us</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Guide</h2>
                        <Link to='/'>Sitemap</Link>
                        <Link to='/'>FAQ</Link>
                        <Link to='/'>Privacy</Link>
                    </div>
                </article>
                <article className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Booking</h2>
                        <Link to='/'>Hotel booking</Link>
                        <Link to='/'>Airline ticket booking</Link>
                        <Link to='/'>Train ticket booking</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Linkedin</Link>
                        <Link to='/'>Facebook</Link>
                    </div>
                </article>
            </section>
            <section className='social-media'>
                <article className='social-media-wrap'>
                    <Link to='/' className='social-logo'>
                        Travel <FontAwesomeIcon className='navbar-icon' icon={faPlaneDeparture} />
                    </Link>
                    <small className='website-rights'>
                        Travel <FontAwesomeIcon icon={faCopyright} /> 2023
                    </small>
                    <div className='social-icons'>
                        <Link to='/' className='social-icon-link'>
                            <i class="fa-solid fa-camera-retro" aria-hidden="true"></i>
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link to='/' className='social-icon-link'>
                            <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                        <Link to='/' className='social-icon-link'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                        <Link to='/' className='social-icon-link'>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </Link>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Footer
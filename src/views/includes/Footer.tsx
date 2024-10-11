import React from 'react'
import NewsLetter from '../../components/NewsLetter'
import { SocialsNetworks } from '../../components/SocialsNetworks'
import { Link } from 'react-router-dom'
import RoutePaths from '../../config'

const Footer = () => {

    return (
        <footer className='mt-5'>
            <NewsLetter />
            <div className='footer-content bg-black gap-3 px-3 px-lg-5 py-5'>
                <div className="f-content d-flex flex-wrap justify-content-space-between">
                    <div className="contacts w-20">
                        <h5 className='my-5'>Our Address</h5>
                        <div className="opacity-75">
                            <div><i className="bi bi-geo-alt fd-color-primary me-2"></i>Anambra, Nigeria</div>
                            <div><i className="bi bi-phone fd-color-primary me-2"></i>+234</div>
                            <div><i className="bi bi-envelope fd-color-primary me-2"></i>sunnezcosmetics@gmail.com</div>
                        </div>
                        <SocialsNetworks />
                    </div>
                    <div className="informations">
                        <h5 className='my-5'>Information</h5>
                        <div className="opacity-75">
                            <div><a href="#">About Us</a></div>
                            <div><a href="#">Contact Us</a></div>
                            <div><a href="#">Privacy Policy</a></div>
                            <div><a href="#">Frequently Questions</a></div>
                            <div><a href="#">Customer Service</a></div>
                        </div>
                    </div>
                    <div className="account">
                        <h5 className='my-5'>My Account</h5>
                        <div className="opacity-75">
                            <div><Link to={RoutePaths.userAccount}>My Account</Link></div>
                            <div><a href="#">Login Page</a></div>
                            <div><a href="#">Shopping Cart</a></div>
                            <div><a href="#">Register Account</a></div>
                            <div><a href="#">Logout</a></div>
                        </div>
                    </div>
                    <div className="help">
                        <h5 className='my-5'>Need Help?</h5>
                        <div className="opacity-75">
                            <div><a href="#">Help Center</a></div>
                            <div><a href="#">Sunnez Market Terms</a></div>
                            <div><a href="#">Author Terms</a></div>
                            <div><a href="#">Sunnez Licences</a></div>
                            <div><a href="#">Contact Us</a></div>
                        </div>
                    </div>
                    <div className="categories">
                        <h5 className='my-5'>Categories</h5>
                        <div className="opacity-75">
                            <div><a href="#">Cosmetics &</a></div>
                            <div><a href="#">Beauty Products</a></div>
                            <div><a href="#">Facials</a></div>
                            <div><a href="#">Skin Care</a></div>
                            <div><a href="#">Health & Wellness</a></div>
                        </div>
                    </div>
                </div>
                <div className='my-5'>
                    <div className="d-flex flex-wrap gap-3">
                        <h6 className='fw-bold'>Cosmetics & Beauty Products </h6>
                        <p className='opacity-50'><span>Cosmetics | </span><span>Beauty | </span><span> Creams| </span><span>Lotions | </span><span>Broccoli | </span><span>Patato | </span><span>Carrots | </span><span>Broccoli | </span><span>Patato | </span></p>
                    </div>
                    <div className="d-flex flex-wrap gap-3">
                        <h6 className='fw-bold'>Health & Skin Care: </h6>
                        <p className='opacity-50'><span>Skin Care | </span><span>Cosmetics | </span><span>Makeup | </span></p>
                    </div>
                </div><hr />
                <div className="d-flex flex-wrap justify-content-between">
                    <p><img src="/img/payment.png" alt="" className='w-100'/></p>
                    <p className="opacity-75">Copyright &copy; 2024 <span className='fw-bold'>Sunnez Cosmetics</span></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
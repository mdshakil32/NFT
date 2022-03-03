import React from 'react';
import './Footer.css';
import fb from "./images/facebook.png";
import tweet from "./images/twitter.png";
import linkedin from "./images/linkedin.png";


const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">

                    {/*=========== left  ===========*/}
                    <div className="col-md-4 col-sm-6 col-12">
                        <h1 className='footer-logo'>NFters </h1>
                        <div className="footer-subtitle">
                            The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
                        </div>
                        <div className="social-media">
                            <img src={fb} alt="" />
                            <img src={tweet} alt="" />
                            <img src={linkedin} alt="" />
                        </div>
                    </div>

                    {/*========== market place  ==========*/}
                    <div className="col-md-2 col-sm-6 col-6">
                        <h2 className='footer-heading'>Market Place</h2>
                        <ul className='link-list'>
                            <li><a href="#">All NFTs</a> </li>
                            <li><a href="#">New</a> </li>
                            <li><a href="#">Art</a> </li>
                            <li><a href="#">Sports</a> </li>
                            <li><a href="#">Utility</a> </li>
                            <li><a href="#">Music</a> </li>
                            <li><a href="#">Domain Name</a> </li>
                        </ul>
                    </div>

                    {/*======== my account ========= */}
                    <div className="col-md-2 col-sm-6 col-6">
                        <h2 className='footer-heading'>My Account</h2>
                        <ul className='link-list'>
                            <li><a href="#">Profile</a> </li>
                            <li><a href="#">Favorite</a> </li>
                            <li><a href="#">My Collections</a> </li>
                            <li><a href="#">Settings</a> </li>
                        </ul>
                    </div>

                    {/*========== right  ==========*/}
                    <div className="col-md-4 col-sm-6 col-xm-12">
                        <h1 className='footer-heading'>Stay in the loop </h1>
                        <div className="footer-subtitle">
                           Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.
                        </div>
                        <div className="subscribe-field">
                           <input type="text" placeholder='Enter Your Email Address..' />
                           <button className="subscribe-btn">Subscibe Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
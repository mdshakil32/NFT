import React from 'react';
import './TopCollections.css';
import user1 from "./images/user1.png";
import user2 from "./images/user2.png";
import user3 from "./images/user3.png";
import user4 from "./images/user4.png";
import user5 from "./images/user5.png";
import user6 from "./images/user6.png";
import leftImg from "./images/middle-1.png";
import ethBlack from "./images/eth-black.png";
import bidImg1 from "./images/middle-1.png";
import bidImg2 from "./images/middle-2.png";
import bidImg3 from "./images/middle3.png";
import bidImg4 from "./images/middle-4.png";
import ethGreen from "./images/eth-green.png";
import devideImg from "./images/devider.png";
import BidUser from './BidUser';
import UserCurrency from './UserCurrency';


const TopCollections = () => {
    return (
        <div className='top-collection-section'>
            <div className="container">
                <div className="row">
                    {/*====== top collection left ========== */}
                    <div className=" col-lg-4 col-md-12">
                        <div className="top-collection-left">
                            <img  src={leftImg} alt="" />
                            <div className="user d-flex">
                                <div className="user-left d-flex">
                                    <img className='user-img-size-1' src={user1} alt="" />

                                    <div>
                                        <h3 className="user-title-1">
                                            The Futr Abstr
                                        </h3>

                                        <p className="user-subtitle-1">
                                            10 in the stock
                                        </p>
                                    </div>
                                </div>
                                <div className="user-right">
                                    <p className='user-subtitle-2 mt__3 mb__7 top-collection-user-status'>
                                        Highest Bid
                                    </p>
                                    <p className='user-subtitle-3 '>
                                        <img className='eth-black-sm me-10 minus-mt-4' src={ethBlack} alt="" />
                                        0.25 ETH
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 top-collection-right ">


                        {/*====== top collection middle ========== */}
                        <div className="bid-user-wrapper">
                            <BidUser bidImg={bidImg2}></BidUser>
                            <BidUser bidImg={bidImg3}></BidUser>
                            <BidUser bidImg={bidImg4}></BidUser>
                        </div>

                        {/*======= devider ======= */}
                        <div className="devider">
                        </div>

                        {/* ======== top collection right  =========*/}
                        <div className="user-currency-wrapper">
                            <h1 className='heading-1'>
                                Top Collections over 
                            </h1>
                            <p className='blue-title-1'>
                                Last 7 days
                            </p>

                            <UserCurrency 
                                serial={1} 
                                title={'CryptoFunks'} 
                                percent={'+26.52%'} 
                                amount={'19,769.39'} 
                                img={user2} 
                                percentColor={'cyan-color'}>
                            </UserCurrency>
                            <UserCurrency 
                                serial={2} 
                                title={'Cryptix'} 
                                percent={'+10.52%'} 
                                amount={'2,769.39'} 
                                img={user3} 
                                percentColor={'red'}>
                            </UserCurrency>
                            <UserCurrency 
                                serial={3} 
                                title={'Frensware'} 
                                percent={'+2.52%'} 
                                amount={'9,232.39'} 
                                img={user4} 
                                percentColor={'cyan-color'}>
                            </UserCurrency>
                            <UserCurrency 
                                serial={4} 
                                title={'PunkArt'} 
                                percent={'+1.52%'} 
                                amount={'3,769.39'} 
                                img={user5} 
                                percentColor={'cyan-color'}>
                            </UserCurrency>
                            <UserCurrency 
                                serial={5} 
                                title={'Art Crypto'} 
                                percent={'+2.52%'} 
                                amount={'10,769.39'} 
                                img={user6} 
                                percentColor={'red'}>
                            </UserCurrency>

                           
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCollections;
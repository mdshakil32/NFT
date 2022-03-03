import React from 'react';
import user1 from "./images/user1.png";
import leftImg from "./images/middle-1.png";
import ethBlack from "./images/eth-black.png";
import bidImg1 from "./images/middle-1.png";
import bidImg2 from "./images/middle-2.png";
import bidImg3 from "./images/middle3.png";
import bidImg4 from "./images/middle-4.png";
import ethGreen from "./images/eth-green.png";

const BidUser = ({bidImg}) => {
    return (
        <div className=" single-bid-user ">
           
                <div className="bid-user-left">
                    <img src={bidImg} alt="" />
                </div>
            
                <div className="bid-user-right">
                    <h3 className="user-title-1">
                        The Futr Abstr
                    </h3>
                    <div className=' bid-user-right-balance'>
                        <img className="user-img-size-2" src={user1} alt="" />
                        <button className='bid-grren-btn '>
                            <img src={ethGreen} />
                            0.25 ETH
                        </button>
                        <span className='fs__1'>1 of 8</span>
                    </div> 
                    <button className='bid-blue-btn mt__15'>
                    Place a bid
                </button>
                </div>
                
        </div>
    );
};

export default BidUser;
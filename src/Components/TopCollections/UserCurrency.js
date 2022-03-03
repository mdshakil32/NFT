import React from 'react';
import user1 from "./images/user1.png";
import user2 from "./images/user2.png";
import user3 from "./images/user3.png";
import user4 from "./images/user4.png";
import user5 from "./images/user5.png";

import ethBlack from "./images/eth-black.png";
import ethGreen from "./images/eth-green.png";
import devideImg from "./images/devider.png";

const UserCurrency = ({serial,title,percent,amount,img,percentColor}) => {
    return (
         <div className="single-user-currency ">

            <p className='curency-no'>{serial}</p>
            <img className='user-currency-img' src={img} alt="" />
            <div >
                <p className='currency-name'>{title}</p>
                <div className='flex-2 currency-amount'>
                    <img src={ethBlack} alt="" />
                    <span>{amount}</span>
                </div>
            </div>
            {
                percentColor ==="red"?
                <h1 className='crypto-percent red-color '> {percent}</h1>:
                <h1 className='crypto-percent cyan-color '> {percent}</h1>
            }
            
        </div>
    );
};

export default UserCurrency;
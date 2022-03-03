import React from 'react';
import user1 from "./images/user1.png";

import bigImage2 from "./images/bigImg1.png";
import bigImage3 from "./images/bigImg2.png";
import bigImage1 from "./images/bigImg3.png";
import smImage1 from "./images/smImg1.png";
import smImage2 from "./images/smImg2.png";
import smImage3 from "./images/smImg3.png";
import smImage4 from "./images/smImg4.png";
import smImage5 from "./images/smImg5.png";
import smImage6 from "./images/smImg6.png";

const SingleFeature = ({mainImg,smallImage1,smallImage2,smallImage3}) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-feature">
                            <div className="fitured-images ">
                                <div className="fitured-left-img">
                                    <img src={mainImg} alt="" />
                                </div>
                                <div className="fitured-right-imgs">
                                    <img src={smallImage1} alt="" />
                                    <img src={smallImage2} alt="" />
                                    <img src={smallImage3} alt="" />
                                </div>
                            </div>
                            <div className="fitured-user">
                                <h1 className='userTitle'>Amazing Collection</h1>
                                <div className='flex-1'>
                                    <div>
                                        <img className='featured-user-img' src={user1} alt="" />
                                        <span className='featured-user-name'>by Arkhan</span>
                                    </div>
                                    <button className='featured-btn'>Total 54 items</button>
                                </div>
                            </div>
                        </div>
                    </div>
    );
};

export default SingleFeature;
import React from 'react';
import './FeaturedNft.css';
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
import SingleFeature from './SingleFeature';


const FeaturedNft = () => {
    return (
        <div className='featured-nft'>
            <div className="container">
                <div className="row">
                    <h1 className='featured-heading'>Collection Featured NFTs</h1>

                    {/* ---- single feature  ---- */}
                   <SingleFeature
                        mainImg={bigImage1}
                        smallImage1={smImage1}
                        smallImage2={smImage5}
                        smallImage3={smImage2}
                   ></SingleFeature>
                    {/* ---- single feature  ---- */}
                   <SingleFeature
                        mainImg={bigImage2}
                        smallImage1={smImage5}
                        smallImage2={smImage1}
                        smallImage3={smImage3}
                   ></SingleFeature>
                    {/* ---- single feature  ---- */}
                   <SingleFeature
                        mainImg={bigImage3}
                        smallImage1={smImage6}
                        smallImage2={smImage4}
                        smallImage3={smImage1}
                   ></SingleFeature>
                    
                   
                </div>
            </div>
        </div>
    );
};

export default FeaturedNft;
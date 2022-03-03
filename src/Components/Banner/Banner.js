import React from 'react';
import './Banner.css';
import bannerImg from "./Component 1.png"

const Banner = () => {
    return (
        <div className='banner-section'>
            <div className="container">
            <div className="row">

                {/* banner content  */}
                <div className="col-md-6">
                    <div className="banner-content">
                        <h1 className="banner-heading">
                            Discover, and collect Digital Art  NFTs 
                        </h1>
                        <p className="banner-subtitle ">
                            Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
                        </p>
                        <button className='explore-btn'>Explore Now</button>

                        {/* banner counts  */}
                         <div className="banner-counts">
                            <div className="banner-count">
                                <h1 className='count-num'>98k+</h1>
                                <p className='count-title'>Artwork</p>
                            </div>
                            <div className="banner-count">
                                <h1 className='count-num'>12k+</h1>
                                <p className='count-title'>Auction</p>
                            </div>
                            <div className="banner-count">
                                <h1 className='count-num'>15k+</h1>
                                <p className='count-title'>Artist</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* banner img  */}
                <div className="col-md-6">
                       <div className="banner-img">
                           <img src={bannerImg} alt="" />
                       </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;
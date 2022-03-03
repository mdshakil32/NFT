import React from 'react';
import './AmazingArt.css';
import chartSquare from "./chart-square.png";
import cardTick from "./card-tick.png";

const AmazingArt = () => {
    return (
        <div className='amazing-art-section d-flex'>
            <div className="container">
                <div className="amazing-art-wrapper">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <div className="amazing-art-heading mb__50">
                                <h1>The amazing NFT art  of the world here</h1>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="amazing-art-single  ">
                                <img src={cardTick} alt="" />
                                <div>
                                    <h2>Fast Transaction</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="amazing-art-single  ">
                                <img src={chartSquare} alt="" />
                                <div>
                                    <h2>Growth Transaction</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus</p>
                                </div>
                            </div>
                        </div>
                    </div>                
                
                </div>
            </div>
        </div>
    );
};

export default AmazingArt;
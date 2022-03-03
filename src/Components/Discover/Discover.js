import React from 'react';
import './Discover.css';
import grpIcon from './images/Group.png';
import cardImg1 from './images/cardImg1.png';
import cardImg2 from './images/cardImg2.png';
import cardImg3 from './images/cardImg3.png';
import cardImg4 from './images/cardImg4.png';
import cardImg5 from './images/cardImg5.png';

import user1 from './images/Ellipse1.png';
import user2 from './images/Ellipse2.png';
import user3 from './images/Ellipse3.png';
import user4 from './images/Ellipse4.png';
import greenEth from './images/Vector.png';


const Discover = () => {

    const cards = [
        {
            id:1,
            title:'ArtCrypto',
            image:cardImg5
        },
        {
            id:2,
            title:'This NFT',
            image:cardImg2
        },
        {
            id:3,
            title:'NameCrypto',
            image:cardImg3
        },
        {
            id:4,
            title:'KingCrypto',
            image:cardImg1
        },
        {
            id:5,
            title:'ArtCrypto',
            image:cardImg2
        },
        {
            id:6,
            title:'This NFT',
            image:cardImg3
        },
        {
            id:7,
            title:'NameCrypto',
            image:cardImg4
        },
        {
            id:8,
            title:'KingCrypto',
            image:cardImg5
        },
        {
            id:9,
            title:'This NFT',
            image:cardImg3
        },
        {
            id:10,
            title:'NameCrypto',
            image:cardImg5
        },
        {
            id:11,
            title:'ArtCrypto',
            image:cardImg4
        },
        {
            id:12,
            title:'NameCrypto',
            image:cardImg1
        },
        {
            id:13,
            title:'KingCrypto',
            image:cardImg2
        },
        {
            id:14,
            title:'This NFT',
            image:cardImg3
        },
        {
            id:15,
            title:'ArtCrypto',
            image:cardImg4
        },
        {
            id:16,
            title:'NameCrypto',
            image:cardImg5
        },
];
console.log(cards);
    return (
        <div className='discover'>
            <div className="container">
                <h1 className="discover-heading">Discover more NFTs</h1>
                <div className="categories">
                    {/* ======  category buttons ========  */}
                    <div className="category-buttons">
                        <button className='active-category-btn'>All Categories</button>
                        <button className='category-btn'>Art</button>
                        <button className='category-btn'>Celebrities</button>
                        <button className='category-btn'>Gaming</button>
                        <button className='category-btn'>Sports</button>
                        <button className='category-btn'>Music</button>
                        <button className='category-btn'>Crypto</button>
                    </div>
                    
                    <button className=' category-btn filter-btn'>
                        <img src={grpIcon} alt="" />All Filter</button>
                </div>
                <div className="discover-cards">
                    <div className="row">
                        {/* ======= single discover card ======== */}
                        {
                            cards.map(card=>
                                <div key={card.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-discover-card">
                                         {/* ======= card main image ======== */}
                                        <img className='w-100' src={card.image} alt="" />

                                        <div className="card-content">
                                            <div className="card-user-images ">
                                                <img src={user2} alt="" />
                                                <img src={user4} alt="" />
                                                <img src={user3} alt="" />
                                                <img src={user1} alt="" />
                                            </div>
                                             {/* =======  card title ======== */}
                                            <h1 className='card-title'>{card.title}</h1>

                                            <div className='card-crypto-part'>
                                                <div className="card-crypto">
                                                    <img src={greenEth} alt="" />
                                                    <span>0.25 ETH</span>
                                                </div>
                                                <p className="card-number">1 of 321</p>
                                            </div>
                                            <div className="card-footer">
                                                <p className="card-footer-time">3h 50m 2s left</p>
                                                <button className="card-footer-btn">Place a bid</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        
                        
                        

                    </div>
                </div>
                <button className='more-nft-btn'>More NFTs</button>
            </div>
            
        </div>
    );
};

export default Discover;
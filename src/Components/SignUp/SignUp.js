import React from 'react';
import './SignUp.css';
import image1 from './images/image-1.png';
import image2 from './images/image-2.png';
import image3 from './images/image-3.png';

const SignUp = () => {
    return (
        <div className='signup'>
            <div className="container">
                <div className="signup-wrapper">
                    <div className="row">
                        <div className="col-md-4 col-sm-7 col-6">
                            <div className="signup-left">
                                <img className='signup-left-top-img ' src={image1} alt="" />
                                <img className='signup-left-bottom-img  ' src={image2} alt="" />
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-5 col-6">
                            <div className="signup-middle ">
                                <img  src={image3} alt="" />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="signup-right">
                            <h1 className='signup-heading'>Create and <br /> sell your NFTs</h1>
                            <p className='signup-article'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
                            <button className='signup-btn'>Sign Up Now</button>
                        </div>
                        </div>
                    </div>
                     
                </div>
            </div>
        </div>
    );
};

export default SignUp;
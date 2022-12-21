import React from 'react';
import chir from '../../assets/images/chair.png'
import Actionbtn from './Actionbtn';
const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chir} className='w-2/4'/>
                <div  className='text-justify'>
                    <h1 className="text-5xl font-bold	">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <Actionbtn>Get Started</Actionbtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;
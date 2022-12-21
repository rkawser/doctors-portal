import React from 'react';
import contactbg from '../../assets/images/appointment.png'
const MakeContact = () => {
    return (
        <div style={{
            background: `url(${contactbg})`
        }} className='my-12 py-20 rounded'>
            <div className='mb-5'>
                <h2 className='text-secondary font-bold'>Contact Us</h2>
                <h1 className='text-3xl text-white '>Stay connected with us</h1>

            </div>
            <form className=''>
                <input className='my-3 lg:w-1/3 rounded py-2' type="text" placeholder='Email Address' /> <br />
                <input className='my-3 lg:w-1/3 rounded py-2' type="text" placeholder='Subject' /> <br />
                <textarea className='my-3 lg:w-1/3 rounded' placeholder='Your message' rows="4" cols="50"></textarea> <br />
                <button className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold border-none my-5">Get Started</button>
            </form>
        </div>
    );
};

export default MakeContact;
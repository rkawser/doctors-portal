import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitting from '../../assets/images/whitening.png'
import teatment from '../../assets/images/treatment.png'
const Services = () => {
    const servives = [
        {
            _id: 1,
            img: fluoride,
            name: 'Fluoride Treatment',
            des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id: 2,
            img: cavity,
            name: 'Cavity Filling',
            des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id: 3,
            img: whitting,
            name: 'Teeth Whitening',
            des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h1 className='text-primary font-bold'>OUR SERVICES</h1>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>

            <div className='grid sm:grid-cols-1 lg:grid-cols-3'>
                {
                    servives.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>

            <div className='my-24 '>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={teatment} className="max-w-sm rounded-lg" />
                        <div className='text-justify'>
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className="btn bg-gradient-to-r from-secondary to-primary border-none text-white">Get Started</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Services;
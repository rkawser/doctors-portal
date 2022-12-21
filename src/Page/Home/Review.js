import React from 'react';

const Review = ({ data }) => {
    const { name, location, img, review } = data;
    return (
        <div className="card  shadow-xl">
            <div className="card-body">
                <p className='text-justify'>{review}</p>
                <div className=" flex items-center justify-between">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} />
                        </div>
                    </div>

                    <div>
                        <h2>{name}</h2>
                        <h3>{location}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
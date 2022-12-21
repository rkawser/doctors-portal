import React from 'react';
import { useForm, } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
const AddDoctors = () => {

    const { data: service, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()))


    const imageStorageKey = '99e78e0bb928b919b1b7dab51f72cf08'


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;

                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.Specialty,
                        img: img
                    }

                    //add doctor

                    fetch('http://localhost:5000/doctor', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('doctor added seccessfuly')
                                reset();
                            }
                            else{
                                toast.error('failed to add the doctor')
                            }
                        })

                }




            })
    };

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl font-bold text-start'>add docotors </h2>
            <form className='bg-slate-700 mx-auto  p-5 grid grid-flow-row w-1/2 rounded' onSubmit={handleSubmit(onSubmit)}>

                <input className='my-2 py-1 rounded' placeholder='Name' {...register("name")} />
                <input className='my-2 py-1 rounded' placeholder='Email' {...register("email")} />
                <select {...register("Specialty")} className="select select-primary my-2 rounded">
                    <option disabled selected>Specialty</option>
                    {
                        service.map(service => <option
                            key={service._id}
                            value={service.name}
                        >{service.name}</option>)
                    }
                </select>

                <input type='file' {...register("image")} className='my-2 py-1 rounded' required />
                <input className='text-white bg-red-800 my-2 py-1 rounded cursor-pointer' value='Add' type="submit" />
            </form>
        </div>
    );
};

export default AddDoctors;
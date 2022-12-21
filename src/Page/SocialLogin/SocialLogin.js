import React from 'react';
import loginimage from '../../assets/images/login.png';
import { useAuthState, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.config';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../hooks/UseToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fuser, floading, ferror] = useSignInWithFacebook(auth);
    const [user1]=useAuthState(auth)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.path || '/'
     
    const [token] =useToken(user || fuser)

    if (token) {
      navigate(from, { replace: true });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={loginimage} className="max-w-sm rounded-lg shadow-2xl" />

          <div className=''>
           <button onClick={()=>signInWithGoogle()
            .then(()=>{
              
            })
          } className='btn mx-2'>sign In Google</button>

           <button onClick={()=>signInWithFacebook()} className='btn'>Sign In Facebook</button>
          </div>
        </div>
      </div>
    );
};

export default SocialLogin;
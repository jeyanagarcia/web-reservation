import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import images from '../../constant/images';
import { useUserAuth } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = useUserAuth();


{/*sample account user test@test.com pass qwertyuiop */}


const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  try {
    await signIn(email, password);
    navigate('/event');
  } catch (e) {
    setError(e.message);
    console.log(e.message);
  }
};


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block' style={{ marginTop: '4rem' }}>
        <img className='w-full h-full object-cover' src={images.login} />
      </div>

      <div className='bg-transparent flex flex-col justify-center items-center '>
        <div className='flex flex-col justify-center'>
        <form className='max-w-[500px] w-full bg-transparent p-4 border border-black rounded-lg' onSubmit={handleSubmit}> 

            <h2 className='text-4xl font-bold text-center py-6'>Sign In</h2>

            <div className='flex flex-col py-2 relative'>
              <FontAwesomeIcon icon={faEnvelope} className='text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2' />
              <input
                className='border border-black p-2 rounded-lg pl-10 w-full'
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='flex flex-col py-2 relative'>
              <FontAwesomeIcon icon={faLock} className='text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2' />
              <input
                className='border border-black p-2 rounded-lg pl-10 w-full'
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className='rounded-full border w-full my-5 py-2 bg-green-600 hover:bg-green-500 text-white'>Sign In</button>
            <div className='flex justify-between gap-5'>
              <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
              <br></br>
              <Link to = '/signup'>
              <p>Create an account</p>
              </Link>
            </div>
            <p className='flex justify-center mt-4'>Forgot Password?</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
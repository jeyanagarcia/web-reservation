import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import images from '../../constant/images';
import { useUserAuth } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom';
import { credentials } from '../adminn/adminLogData';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = useUserAuth();



{/*sample account user test@test.com pass qwertyuiop */}
{/*sample account admin admin@gmail.com pass admin1 */}


const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  try {
    await signIn(email, password);
    
    if (credentials[email] === password) {
      navigate('/admin');
    } else {
      navigate('/event');
    }
    
  } catch (e) {
    setError(e.message);
    console.log(e.message);
  }
};


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>

      <div className='bg-transparent flex flex-col justify-center items-center '>
        <div className='flex flex-col justify-center'>
        <form className='max-w-[500px] w-full bg-transparent p-4' onSubmit={handleSubmit}> 

            <h2 className='text-4xl font-bold text-center py-6'>Sign In</h2>

            <div className='flex flex-col py-2 relative'>
              <FontAwesomeIcon icon={faEnvelope} className='text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2' />
              <input
                className='border-black border-opacity-40 p-2 rounded-full pl-10 border w-full bg-transparent' 
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='flex flex-col py-2 relative'>
              <FontAwesomeIcon icon={faLock} className='text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2' />
              <input
                 className='border-black border-opacity-40 p-2 rounded-full pl-10 border w-full bg-transparent'
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className='rounded-full border w-full my-5 py-2 bg-black hover:bg-gray-500 text-white'>Sign In</button>
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

      <div className='hidden sm:block' style={{ marginTop: '0rem' }}>
        <img className='w-full h-full object-cover' src={images.login} />
      </div>
    </div>
  );
};

export default Login;
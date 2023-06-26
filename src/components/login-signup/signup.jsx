import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../config/firebase"
import images from '../../constant/images'


const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const SignIn = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
    })
    .catch((error) => {
      console.log(error)
    });
  };
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'style={{ marginTop: '4rem' }}>
        <img className='w-full h-full object-cover' src={images.signup} alt="" />
      </div>

      <div className='bg-transparent flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-transparent p-4 border border-black rounded-lg ' onSubmit={SignIn}>
          <h2 className='text-4xl font-bold text-center py-6'>Sign In</h2>
          
          <div className='flex flex-col py-2'>
          <input
                className='border border-black p-2 rounded-lg pl-10 w-full'
                type="text"
                placeholder='Firstname'
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                />
          </div>

          <div className='flex flex-col py-2'>
          <input
                className='border border-black p-2 rounded-lg pl-10 w-full'
                type="text"
                placeholder='Lastname'
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                />
          </div>

          <div className='flex flex-col py-2'>
          <input
                className='border border-black p-2 rounded-lg pl-10 w-full'
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
          </div>

          <div className='flex flex-col py-2'>
          <input
                className='border border-black p-2 rounded-lg pl-10 w-full'
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
          </div>
          
          <div className='flex flex-col py-2'>
          <input
                className='border border-black p-2 rounded-lg pl-10 w-full'
                type="password"
                placeholder='Retype Password'
                value={repassword}
                onChange={(e) => setRepassword(e.target.value)}
                />
          </div>
          
          <button className='rounded-5 border w-full my-5 py-2 bg-green-600 hover:bg-green-500 text-white'>Sign Up</button>

        </form>
      </div>
    </div>
  );
};

export default Signup

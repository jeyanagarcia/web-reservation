import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from "../context/authContext";
import { db } from "../../config/firebase";
import BirthdaySelector from '../../constant/birthdaySelector';
import GenderSelector from '../../constant/genderSelector';
import { doc, setDoc } from 'firebase/firestore';
import images from '../../constant/images';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [residency, setResidency] = useState(false);

  const [error, setError] = useState('');
  const { createUser } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const userCredential = await createUser(
        email,
        firstname,
        lastname,
        age,
        selectedDay,
        selectedMonth,
        selectedYear,
        phoneNumber,
        password,
        selectedGender,
        residency,
      );

      const userRef = doc(db, 'users', userCredential.user.uid);
      const userData = {
        firstname,
        lastname,
        age,
        email,
        selectedDay,
        selectedMonth,
        selectedYear,
        phoneNumber,
        selectedGender,
        residency
      };
      await setDoc(userRef, userData);

      navigate('/event');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'style={{ marginTop: '0rem' }}>
        <img className='w-full h-full object-cover' src={images.signup} alt="" />
      </div>

      <div className='bg-transparent flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-transparent p-4' onSubmit={handleSubmit}>
          <h2 className='text-4xl font-bold text-center py-6'>Sign Up</h2>

          <div className='flex py-2 gap-2'>
            <input 
              className='border-black border-opacity-40 p-2 rounded-full pl-10 border w-full bg-transparent'
              type="text"
              placeholder='Firstname'
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              className='border-black border-opacity-40 p-2 rounded-full pl-10 border w-full bg-transparent'
              type="text"
              placeholder='Lastname'
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <div className='flex py-2 gap-2'>
            <input
              className='border-black border-opacity-40 p-2 rounded-full pl-10 border w-1/3 bg-transparent'
              type="text"
              placeholder='Age'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              className='border-black border-opacity-40 p-2 rounded-full pl-10 border w-2/3 bg-transparent'
              type="text"
              placeholder='Phone Number'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

          </div>


          <div className="py-2 bg-transparent">
          <GenderSelector 
            selectedGender ={selectedGender}
            setSelectedGender={setSelectedGender}
           />
          </div>

          <div className="py-2">
            <p className="text-sm text-gray-400 mb-2 bg-transparent">Date of Birth:</p>
            <BirthdaySelector
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              selectedMonth={selectedMonth}
              setSelectedMonth={setSelectedMonth}
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
            />
          </div>

          <div className="flex flex-col mt-1">
          <p className="text-sm text-gray-400 mb-2 bg-transparent">Resident of Binan?</p>
          <div className="flex gap-2 mt-1">
            <div className="flex items-center ml-12">
              <input
                id="yesCheckbox"
                type="checkbox"
                checked={residency === true}
                onChange={() => setResidency(true)}
              />
              <label htmlFor="yesCheckbox" className="ml-1">
                Yes
              </label>
            </div>
            <div className="flex items-center ml-8">
              <input
                id="noCheckbox"
                type="checkbox"
                checked={residency === false}
                onChange={() => setResidency(false)}
                
              />
              <label htmlFor="noCheckbox" className="ml-1">
                No
              </label>
            </div>
          </div>
          </div>

          <div className='flex flex-col py-2'>
            <input
              className='border-black border-opacity-40 p-2 rounded-full pl-10 border w-full bg-transparent'
              type="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='flex flex-col py-2'>
            <input
              className='border-black border-opacity-40 p-2 rounded-full pl-10 border w-full bg-transparent'
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='flex flex-col py-2'>
            <input
              className='border-black border-opacity-40 p-2 rounded-full pl-10 border w-full bg-transparent'
              type="password"
              placeholder='Retype Password'
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
            />
          </div>

          <button className='rounded-full border w-full my-5 py-2 bg-black hover:bg-gray-500 text-white'>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

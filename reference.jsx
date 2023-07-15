import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/authContext';
import { db } from '../../config/firebase';
import images from '../../constant/images';
import BirthdaySelector from './brthDropdown';

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
        password
      );

      const userRef = db.collection('users').doc(userCredential.user.uid);
      const userData = {
        firstname,
        lastname,
        age,
        email,
        phoneNumber,
        birthday: {
          day: selectedDay,
          month: selectedMonth,
          year: selectedYear,
        },
      };
      await userRef.set(userData);

      navigate('/event');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    } 
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block" style={{ marginTop: '0rem' }}>
        <img className="w-full h-full object-cover" src={images.signup} alt="" />
      </div>

      <div className="bg-transparent flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto bg-transparent p-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl font-bold text-center py-6">Sign Up</h2>

          <div className="flex flex-col space-y-2">
            <div className="flex space-x-2">
              <input
                className="border-black border-opacity-40 p-2 rounded-full pl-10 border w-1/2"
                type="text"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <input
                className="border-black border-opacity-40 p-2 rounded-full pl-10 border w-1/2"
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>

            <div className="flex">
              <input
                className="border-black border-opacity-40 p-2 rounded-full pl-10 border w-1/3"
                type="text"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <input
                className="border-black border-opacity-40 p-2 rounded-full pl-10 border w-1/1"
                type="int"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <p className="text-sm text-gray-400 mb-2">Date of Birth:</p>
            <BirthdaySelector
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              selectedMonth={selectedMonth}
              setSelectedMonth={setSelectedMonth}
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
            />

            <input
              className="border-black border-opacity-40 p-2 rounded-full pl-10 border w-full"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="border-black border-opacity-40 p-2 rounded-full pl-10 border w-full"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              className="border-black border-opacity-40 p-2 rounded-full pl-10 border w-full"
              type="password"
              placeholder="Retype Password"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
            />

          <button className='rounded-full border w-full my-5 py-2 bg-black hover:bg-gray-500 text-white'>
          Sign Up
          </button>
          
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;


import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../../config/firebase';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';

export const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (email, firstname, lastname, password, age, ) => {
    return createUserWithEmailAndPassword(auth, email, password).then(async (result) => {
      const userRef = doc(db, 'users', result.user.uid);
      const userData = {
        email: result.user.email,
        firstname: firstname,
        lastname: lastname,
        password: password,
        age: age,
        
      };
      await setDoc(userRef, userData);
      return result;
    });
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);

      if (currentUser) {
        const userRef = doc(db, 'users', currentUser.uid);
        onSnapshot(userRef, (snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.data();
            setUser((prevUser) => ({
              ...prevUser,
              firstname: userData.firstname,
              lastname: userData.lastname,
             
            }));
          }
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const contextValue = {
    createUser,
    signIn,
    logout,
    user,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserAuth = () => {
  const contextValue = useContext(UserContext);
  if (!contextValue) {
    throw new Error('useUserAuth must be used within an AuthContextProvider');
  }
  return contextValue;
};

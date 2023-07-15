import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, db, storage, ref, uploadBytes, getDownloadURL } from '../../config/firebase';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';

export const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (email, firstname, lastname, age, selectedDay, selectedMonth, selectedYear, phoneNumber, password, selectedGender) => {
    return createUserWithEmailAndPassword(auth, email, password).then(async (result) => {
      const userRef = doc(db, 'users', result.user.uid);
      const userData = {
        email: result.user.email,
        firstname,
        lastname,
        age,
        selectedDay,
        selectedMonth,
        selectedYear,
        phoneNumber,
        selectedGender,
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
              age: userData.age,
              selectedDay: userData.selectedDay,
              selectedMonth: userData.selectedMonth,
              selectedYear: userData.selectedYear,
              phoneNumber: userData.phoneNumber,
              selectedGender: userData.selectedGender,
            }));
          }
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const uploadImage = async (file) => {
    const storageRef = ref(storage, `${user.uid}/${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    setUser((prevUser) => ({
      ...prevUser,
      photoURL: downloadURL,
    }));
  };

  const contextValue = {
    createUser,
    signIn,
    logout,
    user,
    uploadImage,
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

  const { user } = contextValue;
  const photoURL = user ? user.photoURL : null;

  return { ...contextValue, photoURL };
};

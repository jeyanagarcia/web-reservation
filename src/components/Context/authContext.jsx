import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../../config/firebase';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';

export const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (email, firstname, lastname, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(async (result) => {
      const userRef = doc(db, 'users', result.user.uid);
      const userData = {
        email: result.user.email,
        firstname: firstname,
        lastname: lastname,
        password: password,
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

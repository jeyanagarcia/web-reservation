import { createContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { eventData } from '../../constant/eventData';
import { doc, setDoc, getFirestore, getDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { useUserAuth } from '../context/authContext';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const { eventKey } = useParams();
  const navigate = useNavigate();
  const { user } = useUserAuth();
  const parsedEventKey = parseInt(eventKey);
  const eventInfo = eventData.find((event) => event.eventKey === parsedEventKey);

  const [cartItems, setCartItems] = useState({});
  const [wishlistItems, setWishlistItems] = useState([]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const eventId in cartItems) {
      if (cartItems[eventId] > 0) {
        const event = eventData.find((eventt) => eventt.eventKey === Number(eventId));
        totalAmount += cartItems[eventId] * event.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (eventKey) => {
    setCartItems((prev) => ({
      ...prev,
      [eventKey]: prev[eventKey] ? prev[eventKey] + 1 : 1
    }));
  };

  const removeFromCart = (eventId) => {
    setCartItems((prev) => {
      const updatedCartItems = { ...prev };
      delete updatedCartItems[eventId];
      return updatedCartItems;
    });
  };

  const updateCartItemCount = (newAmount, eventId) => {
    setCartItems((prev) => ({
      ...prev,
      [eventId]: newAmount
    }));
  };

  const checkout = () => {
    setCartItems({});
  };

  const saveWishlist = async (user) => {
    if (user) {
      try {
        const firestore = getFirestore();
        const wishlistRef = doc(firestore, `wishlists/${user.uid}`);
        const wishlistSnapshot = await getDoc(wishlistRef);
        const existingWishlistData = wishlistSnapshot.exists() ? wishlistSnapshot.data() : {};
        const updatedWishlistData = {
          ...existingWishlistData,
          events: Object.keys(cartItems)
        };
        await setDoc(wishlistRef, updatedWishlistData);
      } catch (error) {
        console.error('Error saving wishlist:', error);
      }
    }
  };

  useEffect(() => {
    if (user) {
      saveWishlist(user);
    }
  }, [user, cartItems]);

  useEffect(() => {
    const fetchWishlistData = async () => {
      if (user) {
        try {
          const firestore = getFirestore();
          const wishlistRef = doc(firestore, `wishlists/${user.uid}`);
          const wishlistSnapshot = await getDoc(wishlistRef);
          if (wishlistSnapshot.exists()) {
            const wishlistData = wishlistSnapshot.data();
            setWishlistItems(wishlistData.events || []);
          } else {
            setWishlistItems([]);
          }
        } catch (error) {
          console.error('Error fetching wishlist data:', error);
        }
      }
    };

    fetchWishlistData();
  }, [user]);

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    wishlistItems
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

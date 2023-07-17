import { createContext, useState } from "react";
import { useParams } from "react-router-dom";
import { eventData } from "../../constant/eventData";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const { eventKey } = useParams();
    const parsedEventKey = parseInt(eventKey);
    const eventInfo = eventData.find((event) => event.eventKey === parsedEventKey);
  
    const [cartItems, setCartItems] = useState({});
  
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
  
    const contextValue = {
      cartItems,
      addToCart,
      updateCartItemCount,
      removeFromCart,
      getTotalCartAmount,
      checkout,
    };

    console.log(addToCart);
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
      );
    };


  //https://www.youtube.com/watch?v=tEMrD9t85v4
  
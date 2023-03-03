import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const InitialCartState = [];

  const [cartItems, setCartItems] = useState(InitialCartState);

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cartItems")) ?? []);
  }, []);

  useEffect(() => {
    if (cartItems !== InitialCartState) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;

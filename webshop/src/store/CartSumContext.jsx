// context on väga sarnane tehnoloogial redux
// mõlemad on globaalse muutuja jaoks

import { createContext, useState } from 'react';

// Create a Context for the app
export const CartSumContext = createContext(
	{
		cartSum: 0,
		setCartSum: (value) => { }
	}
);

// Create a provider component
export const CartSumProvider = ({ children }) => {
  // State that will be shared in the context
  const [cartSum, setCartSum] = useState(199);

  return (
    <CartSumContext.Provider value={{ cartSum, setCartSum }}>
      {children}
    </CartSumContext.Provider>
  );
};
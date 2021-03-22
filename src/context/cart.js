import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [minicartOpen, setMinicartOpen] = useState(false);

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                minicartOpen,
                setMinicartOpen
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
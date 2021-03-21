import React, { createContext, useState } from 'react';

export const ProductsContext = createContext();

export default function ({ children }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <ProductsContext.Provider
            value={{
                products,
                setProducts,
                loading,
                setLoading
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}
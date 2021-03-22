import React, { createContext, useState } from 'react';

export const ProductsContext = createContext();

export default function ({ children }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});

    return (
        <ProductsContext.Provider
            value={{
                products,
                setProducts,
                loading,
                setLoading,
                error,
                setError
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}
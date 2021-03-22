import React, { createContext, useState } from 'react';

export const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
    const [categories, setCategories] = useState([
        {
            name: 'blush',
            products: []
        },
        {
            name: 'bronzer',
            products: []
        },
        {
            name: 'eyebrow',
            products: []
        },
        {
            name: 'eyeliner',
            products: []
        },
        {
            name: 'eyeshadow',
            products: []
        },
        {
            name: 'foundation',
            products: []
        },
        {
            name: 'lip_liner',
            products: []
        },
        {
            name: 'lipstick',
            products: []
        },
        {
            name: 'mascara',
            products: []
        },
        {
            name: 'nail_polish',
            products: []
        }
    ]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});

    return (
        <CategoryContext.Provider
            value={{
                categories,
                setCategories,
                loading,
                setLoading,
                error,
                setError
            }}
        >
            {children}
        </CategoryContext.Provider>
    );
}

export default CategoryContextProvider;
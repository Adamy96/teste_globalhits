import React, { createContext, useState } from 'react';

export const CategoryContext = createContext();

export default function ({ children }) {
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

    return (
        <CategoryContext.Provider
            value={{
                categories,
                setCategories,
                loading,
                setLoading
            }}
        >
            {children}
        </CategoryContext.Provider>
    );
}
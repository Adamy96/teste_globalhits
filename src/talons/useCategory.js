import { useCallback, useEffect } from 'react';
import { useContext } from 'react';
import axios from 'axios';
import { CategoryContext } from '@context/category';

export const useCategory = (categoryName) => {
    const {
        categories,
        setCategories,
        loading,
        setLoading,
        error,
        setError
    } = useContext(CategoryContext);

    const fetchCategory = useCallback(() => {
        axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${categoryName}`)
            .then( res => {
                const newCategories = categories.filter(category => (
                    category.name !== categoryName
                ))

                setCategories([
                    ...newCategories,
                    {
                        name: categoryName,
                        products: res.data
                    }
                ]);
                setLoading(false);
            })
            .catch( err => {
                setLoading(false);
                setError(err);
            });
    }, [categories, categoryName, setCategories, setLoading, setError]);

    const { products } = categories.find(category => (
        category.name === categoryName
    ));

    useEffect(() => {
        if (products.length === 0) {
            setLoading(true);
            fetchCategory();
        }
    }, [fetchCategory, products.length, setLoading]);

    return {
        products,
        loading,
        error,
        setError
    };
}
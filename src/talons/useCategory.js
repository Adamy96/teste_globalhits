import { useEffect } from 'react';
import { useContext } from 'react';
import axios from 'axios';
import { CategoryContext } from '@context/category';

export const useCategory = (categoryName) => {
    const {
        categories,
        setCategories,
        loading,
        setLoading
    } = useContext(CategoryContext);

    const fetchCategory = () => {
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
                throw new Error(err);
            });
    }

    const { products } = categories.find(category => (
        category.name === categoryName
    ));

    useEffect(() => {
        if (products.length === 0) {
            setLoading(true);
            fetchCategory();
        }
    }, []);

    return {
        products,
        loading
    };
}
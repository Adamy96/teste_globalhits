import { useEffect } from 'react';
import { useContext } from 'react';
import { ProductsContext } from '@context/products';
import { CartContext } from '@context/cart';
import axios from 'axios';

export const useProducts = () => {
    const { 
        products,
        setProducts,
        loading,
        setLoading
    } = useContext(ProductsContext);
    const { cart, setCart } = useContext(CartContext);

    const fetchProducts = () => {
        axios.get('http://makeup-api.herokuapp.com/api/v1/products.json')
            .then( res => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch( err => {
                setLoading(false);
                throw new Error(err);
            });
    }

    useEffect(() => {
        if (products.length === 0) {
            setLoading(true);
            fetchProducts();
        }
    }, []);

    const getCurrentProduct = (id) => {
        return products.find(product => {
            return product.id == id;
        });
    }

    const addToCart = (product, color, quantity) => {
        const alreadyOnCart = cart.find(cartProduct => {
            if (cartProduct.id === product.id) {
                return cartProduct.selected_color.hex_value == color.hex_value;
            }
        });

        if (!alreadyOnCart) {
            setCart([...cart, {
                ...product,
                selected_color: color,
                quantity: parseInt(quantity)
            }]);
        } else {
            const productOnCart = cart.find(cartProduct => {
                if (cartProduct.id === product.id) {
                    return cartProduct.selected_color.hex_value == color.hex_value;
                }
            });
            const newCart = cart.filter(cartProduct => {
                if (cartProduct.id !== product.id) return true;

                return cartProduct.selected_color.hex_value !== color.hex_value;
            });

            setCart([...newCart, {
                ...productOnCart,
                quantity: productOnCart.quantity + parseInt(quantity)
            }]);
        }
    }

    return {
        addToCart,
        products,
        setProducts,
        getCurrentProduct,
        fetchProducts,
        loading,
        setLoading
    };
}
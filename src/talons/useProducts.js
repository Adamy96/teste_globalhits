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
        setLoading,
        error,
        setError
    } = useContext(ProductsContext);
    const {
        cart,
        setCart,
        setMinicartOpen
    } = useContext(CartContext);

    const fetchProducts = () => {
        axios.get('https://makeup-api.herokuapp.com/api/v1/products.json')
            .then( res => {
                setProducts(res.data);
                setError(false);
                setLoading(false);
            })
            .catch( err => {
                setError(err);
                setLoading(false);
            });
    }

    useEffect(() => {
        if (products.length === 0) {
            setLoading(true);
            fetchProducts();
        }
    }, []);

    const getProductDetails = (id) => {
        return products.find(product => {
            return product.id == id;
        });
    }

    const addToCart = (id, color, quantity, openMinicart = false) => {
        const productOnCart = cart.find(cartProduct => {
            if (cartProduct.id === id) {
                return cartProduct.selected_color.hex_value == color.hex_value;
            }
        });

        if (!productOnCart) {
            setCart([
                {
                    ...getProductDetails(id),
                    selected_color: color,
                    quantity: parseInt(quantity)
                },
                ...cart
            ]);
        } else {
            const newCart = cart.filter(cartProduct => {
                if (cartProduct.id !== id) return true;
                return cartProduct.selected_color.hex_value !== color.hex_value;
            });

            setCart([
                {
                    ...productOnCart,
                    quantity: productOnCart.quantity + parseInt(quantity)
                },
                ...newCart, 
            ]);
        }

        openMinicart && setMinicartOpen(true);
    }

    const removeFromCart = (id, color) => {
        const currentProduct = cart.find(product => {
            return (product.id == id && product.selected_color.hex_value === color.hex_value);
        });

        const newCart = cart.filter(cartProduct => {
            if (cartProduct.id !== id) return true;
            return cartProduct.selected_color.hex_value !== color.hex_value;
        });

        if (currentProduct.quantity === 1) {
            setCart([...newCart]);
        } else {
            setCart([
                {
                    ...currentProduct,
                    selected_color: color,
                    quantity: currentProduct.quantity - 1
                },
                ...newCart
            ]);
        }
    }

    return {
        addToCart,
        removeFromCart,
        products,
        setProducts,
        getProductDetails,
        fetchProducts,
        loading,
        setLoading,
        error
    };
}
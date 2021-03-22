import { useContext } from 'react';
import { CartContext } from '@context/cart';

export const useCart = () => {
    const {
        cart,
        setCart,
        minicartOpen,
        setMinicartOpen
    } = useContext(CartContext);

    const removeProduct = (id, color) => {
        const newCart = cart.filter(cartProduct => {
            if (cartProduct.id !== id) return true;
            return cartProduct.selected_color.hex_value !== color.hex_value;
        });

        setCart([...newCart]);
    }

    const grandTotal = cart.reduce((acc, product) => {
        return acc + product.price * product.quantity; 
    }, 0);

    return {
        cart,
        cartLength: cart.length,
        setCart,
        removeProduct,
        grandTotal: grandTotal.toFixed(2),
        minicartOpen,
        setMinicartOpen
    }
}
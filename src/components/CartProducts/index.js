import React from 'react';
import EmptyCart from './EmptyCart';
import ProductsList from './ProductsList';

const CartProducts = ({ cart }) => {
    const ProductsComponent = cart.length ? ProductsList : EmptyCart;

    return <ProductsComponent cart={cart} />
}

export default CartProducts;
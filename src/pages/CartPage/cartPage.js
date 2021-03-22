import React from 'react';
import { Breadcrumbs, ProductCard } from '@components';
import { useCart } from '@talons/useCart';
import './cartPage.scss';
import { Button, Container } from '@material-ui/core';
import { CartProducts } from '@components';

const CartPage = () => {
    const { cart, setCart, grandTotal } = useCart();
    const path = [{
        name: `carrinho`,
        link: `/cart`
    }];

    return (
        <div className='cart_page'>
            <Breadcrumbs path={path} />
            <CartProducts cart={cart} />
            {
                cart.length > 0 && 
                    <div className='summary'>
                        <Button onClick={() => setCart([])}>
                            limpar carrinho
                        </Button>
                        Total: {grandTotal}
                    </div>
            }
        </div>
    )
}

export default CartPage;
import React from 'react';
import { useCart } from '@talons/useCart';
import { Button } from '@material-ui/core';
import { Breadcrumbs, CartProducts } from '@components';
import './cartPage.scss';

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
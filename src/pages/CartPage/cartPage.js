import React from 'react';
import {
    Breadcrumbs,
    Navbar,
    ProductCard
} from '@components';
import { useCart } from '@talons/useCart';
import './cartPage.scss';
import { Button, Container, Typography } from '@material-ui/core';

const CartPage = () => {
    const { cart, setCart, grandTotal } = useCart();

    const path = [{
        name: `carrinho`,
        link: `/cart`
    }];

    return (
        <>
            <Navbar />
            <div className='cart_page'>
                <Breadcrumbs path={path} />

                <Container className='products_container'>
                    {cart.map((product, idx) => (
                        <ProductCard {...product} isCart={true} key={idx} />
                    ))}
                </Container>

                <Button onClick={() => setCart([])}>
                    limpar carrinho
                </Button>

                {grandTotal}
            </div>
        </>
    )
}

export default CartPage;
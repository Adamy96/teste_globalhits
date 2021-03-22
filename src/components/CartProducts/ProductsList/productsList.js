import React from 'react';
import { ProductCard } from '@components';
import { Container } from '@material-ui/core';
import './productsList.scss';

const ProductsList = ({ cart }) => {
    return (
        <Container className='cart_products_container'>
            {cart.map((product, idx) => (
                <ProductCard {...product} isCart={true} key={idx} />
            ))}
        </Container>
    )
}

export default ProductsList;
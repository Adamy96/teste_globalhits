import React from 'react';
import { Typography } from '@material-ui/core';
import './emptyCart.scss';

const EmptyCart = () => {
    return (
        <Typography className='empty_cart'>
            Seu carrinho está vazio
        </Typography>
    );
}

export default EmptyCart;
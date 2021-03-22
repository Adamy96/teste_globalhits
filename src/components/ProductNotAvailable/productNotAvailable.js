import React from 'react';
import { Typography } from '@material-ui/core';
import './productNotAvailable.scss';

const ProductNotAvailable = () => {
    return (
        <div className='product_not_available'>
            <Typography align='center'>
                Produto não disponível
            </Typography>            
        </div>
    )
}

export default ProductNotAvailable;
import React from 'react';
import { TextField, Typography } from '@material-ui/core';
import './productQuantity.scss';

const ProductQuantity = ({ selectedQuantity, setSelectedQuantity }) => {
    return (
        <div className='product_quantity'>
            <Typography className='text'>
                Insira a quantidade desejada:
            </Typography>
            <TextField
                value={selectedQuantity}
                onChange={(e) => setSelectedQuantity(e.target.value)}
                type='number'
                variant='outlined'
                className='quantity_input'
            />
        </div>
    )
}

export default ProductQuantity;
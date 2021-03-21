import React from 'react';
import { ProductCard } from '@components';
import { Container, Typography } from '@material-ui/core';
import './topSelling.scss';

const TopSelling = ({ products }) => {
    return (
        <div className='topSelling'>
            <Typography align='center' className='subtitle'>
                produtos mais vendidos
            </Typography>

            <Container className='products_container'>
                {products.slice(0,6).map((product, idx) => (
                    <ProductCard {...product} key={idx} />
                ))}
            </Container>
        </div>
    )
}

export default TopSelling;
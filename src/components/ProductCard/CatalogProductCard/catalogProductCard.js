import React, { useState, useEffect } from 'react'
import { Card, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { handleBrokenImage } from '@utils/helper';
import './catalogProductCard.scss';

const ProductCard = ({
    brand,
    description,
    image_link,
    name,
    price,
    price_sign,
    product_colors,
    id
}) => {
    const [colorsText, setColorsText] = useState('');

    useEffect(() => {
        const colorsLength = product_colors.length;
        if (colorsLength === 1) {
            setColorsText('1 cor disponível');
        } else {
            setColorsText(`${colorsLength} cores disponíveis`);
        }
    }, [product_colors.length]);

    return (
        <Card className='catalog_product_card'>
            <Link to={`/product/${id}`} className='link'>
                <img
                    src={image_link}
                    alt={description}
                    onError={handleBrokenImage}
                />
                <Card className='color_card'>
                    <Typography>{colorsText}</Typography>
                </Card>
                <Typography className='brand'>{brand}</Typography>
                <Typography className='name'>{name}</Typography>
                <Typography className='price'>
                    {price_sign} {parseInt(price).toFixed(2)}
                </Typography>
            </Link>
        </Card>
    )
}

export default ProductCard;
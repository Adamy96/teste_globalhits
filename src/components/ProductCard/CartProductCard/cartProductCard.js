import React from 'react';
import { Box, Card, Container, SvgIcon, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { handleBrokenImage } from '@utils/helper';
import { ReactComponent as TrashSvg } from '@assets/svg/trash.svg';
import { useCart } from '@talons/useCart';
import './cartProductCard.scss';

const CartProductCard = ({
    brand,
    description,
    image_link,
    name,
    price,
    price_sign,
    selected_color,
    quantity,
    id
}) => {
    const { removeProduct } = useCart();

    return (
        <Card className='cart_product_card'>
            <Container className='left-side'>
                <img
                    src={image_link}
                    alt={description}
                    onError={handleBrokenImage}
                />
            </Container>
            <Container className='right-side'>
                <Typography className='brand'>{brand}</Typography>
                <Typography className='name'>{name}</Typography>
                <Container className='color_container'>
                    <Typography>cor:</Typography>
                    <Box
                        component='span'
                        className='selected_color'
                        style={{backgroundColor: selected_color.hex_value}}
                    />
                </Container>
                <Typography className='price'>
                    {price_sign} {parseInt(price * quantity).toFixed(2)}
                </Typography>
                <Container className='delete' onClick={() => removeProduct(id, selected_color)}>
                    <SvgIcon>
                        <TrashSvg />
                    </SvgIcon>
                    <Typography variant='span'>excluir</Typography>
                </Container>
            </Container>
            
            
        </Card>
    )
}

export default CartProductCard;
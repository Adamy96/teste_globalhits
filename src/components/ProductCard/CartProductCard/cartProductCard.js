import React from 'react';
import { Box, Card, Container, SvgIcon, Typography } from '@material-ui/core';
import { handleBrokenImage } from '@utils/helper';
import { ReactComponent as TrashSvg } from '@assets/svg/trash.svg';
import { useCart } from '@talons/useCart';
import { useProducts } from '@talons/useProducts'
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
    const { addToCart, removeFromCart } = useProducts();

    return (
        <Card className='cart_product_card'>
            <Container className='header'>
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
                    <Container className='delete' onClick={() => removeProduct(id, selected_color)}>
                        <SvgIcon>
                            <TrashSvg />
                        </SvgIcon>
                        <Box component='span'>excluir</Box>
                    </Container>
                </Container>
            </Container>
            
            <Container className='footer'>
                <Container className='quantity_changer'>
                    <Box component='span' onClick={() => removeFromCart(id, selected_color)}>–</Box>
                    <Box component='span' className='quantity'>{quantity}</Box>
                    <Box component='span' onClick={() => addToCart(id, selected_color, 1)}>+</Box>
                </Container>
                <Typography className='price'>
                    {price_sign} {(parseFloat(price) * quantity).toFixed(2)}
                </Typography>
            </Container>
        </Card>
    )
}

export default CartProductCard;
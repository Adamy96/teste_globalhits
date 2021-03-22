import React from 'react';
import { SvgIcon, Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Close } from '@material-ui/icons';
import { CartProducts } from '@components';
import { ReactComponent as MinicartSvg } from '@assets/svg/minicart.svg';
import { useCart } from '@talons/useCart';
import  './minicart.scss';

const Minicart = () => {
    const {
        cart,
        cartLength,
        minicartOpen,
        setMinicartOpen
    } = useCart();

    return (
        <div className='minicart'>
            <div className='cart_trigger' onClick={() => setMinicartOpen(!minicartOpen)}>
                <Box className='count_container'>
                    <Typography >
                        {cartLength}
                    </Typography>
                </Box>
                <SvgIcon component={MinicartSvg} />
            </div>
            

            {minicartOpen &&
                <div className='minicart_container'>
                    <div className='header'>
                        <Link
                            to='/cart'
                            onClick={() => setMinicartOpen(false)}
                            className='link'
                        >
                            Ir para o carrinho
                        </Link>
                        <Close onClick={() => setMinicartOpen(false)} />
                    </div>

                    <CartProducts cart={cart} />
                </div>
            }
        </div>
    );
}

export default Minicart;
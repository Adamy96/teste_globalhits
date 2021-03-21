import React from 'react';
import { SvgIcon, Box, Typography } from '@material-ui/core';
import { ReactComponent as MinicartSvg } from '@assets/svg/minicart.svg';
import { useCart } from '@talons/useCart';
import  './minicart.scss';

const Minicart = () => {
    const { cartLength } = useCart();

    return (
        <div className='minicart'>
            <Box className='count_container'>
                <Typography >
                    {cartLength}
                </Typography>
            </Box>
            <SvgIcon component={MinicartSvg} />
        </div>
    );
}

export default Minicart;
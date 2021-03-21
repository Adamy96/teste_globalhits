import React, { useEffect } from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import './productColors.scss';

const ProductColors = ({ colors, selectedColor, setSelectedColor }) => {
    useEffect(() => {
        setSelectedColor(colors[0]);
    }, []);

    return (
        <div className='product_colors'>
            <Container className='header'>
                <Typography>
                    Escolha a cor:
                </Typography>
                <Box
                    component='span'
                    className='selected_color'
                    style={{backgroundColor: selectedColor.hex_value}}
                />
            </Container>

            <Container className='colors_container'>
                {colors.map((color, idx) => (
                    <Box
                        component='span'
                        className='color'
                        key={idx}
                        style={{backgroundColor: color.hex_value}}
                        onClick={() => setSelectedColor(color)}
                    />
                ))}
            </Container>
        </div>
    )
}

export default ProductColors;
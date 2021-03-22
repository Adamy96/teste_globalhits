import React from 'react';
import { Button } from '@material-ui/core';
import { ProductColors, ProductQuantity } from '@components';
import './productAvailable.scss';

const ProductAvailable = ({
    addToCart,
    currentProduct,
    selectedColor,
    setSelectedColor,
    selectedQuantity,
    setSelectedQuantity
}) => {
    return (
        <div className='product_available'>
            <ProductColors
                colors={currentProduct.product_colors}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
            />
            <ProductQuantity
                selectedQuantity={selectedQuantity}
                setSelectedQuantity={setSelectedQuantity}
            />
            <Button
                className='add_btn'
                onClick={() => addToCart(
                    currentProduct.id,
                    selectedColor,
                    selectedQuantity,
                    true
                )}
            >
                Adicionar à sacola
            </Button>
        </div>
    )
}

export default ProductAvailable;
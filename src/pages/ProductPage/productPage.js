import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useProducts } from '@talons/useProducts'
import { Button } from '@material-ui/core';
import './productPage.scss';
import {
    Breadcrumbs,
    LoadingIndicator,
    Navbar,
    ParcelOptions,
    ProductColors,
    ProductInfo,
    ProductQuantity
} from '@components';

const ProductPage = () => {
    const { id } = useParams();
    const { addToCart, products, getCurrentProduct, loading } = useProducts();
    const [currentProduct, setCurrentProduct] = useState({});
    const [selectedColor, setSelectedColor] = useState({});
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [path, setPath] = useState([{
        name: `produto ${id}`,
        link: `/product/${id}`
    }]);

    useEffect(() => {
        if (products.length !== 0 && id) {
            setCurrentProduct(getCurrentProduct(id));
        }
    }, [products, id]);

    useEffect(() => {
        if (currentProduct.product_type && path.length < 2) {
            setPath([
                {
                    name: currentProduct.product_type,
                    link: `/category/${currentProduct.product_type}`
                },
                ...path
            ]);
        }
    }, [currentProduct]);

    return (
        <>
            <Navbar />
            <div className='product_page'>
                {loading && <LoadingIndicator />}
                {!(Object.keys(currentProduct) == 0) &&
                    <>
                        <Breadcrumbs path={path} />
                        <ProductInfo currentProduct={currentProduct} />
                        <ParcelOptions value={12} />
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
                                currentProduct, 
                                selectedColor,
                                selectedQuantity
                            )}
                        >
                            Adicionar à sacola
                        </Button>
                    </>
                }
            </div>
        </>
    )
}

export default ProductPage;
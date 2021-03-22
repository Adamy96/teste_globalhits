import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from "react-router-dom";
import { useProducts } from '@talons/useProducts'
import './productPage.scss';
import {
    Breadcrumbs,
    LoadingIndicator,
    ParcelOptions,
    ProductAvailable,
    ProductInfo,
} from '@components';
import ProductNotAvailable from '../../components/ProductNotAvailable/productNotAvailable';

const ProductPage = () => {
    const { id } = useParams();
    const { addToCart, products, getProductDetails, loading, error } = useProducts();
    const [currentProduct, setCurrentProduct] = useState({});
    const [selectedColor, setSelectedColor] = useState({});
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [path, setPath] = useState([{
        name: `produto ${id}`,
        link: `/product/${id}`
    }]);

    useEffect(() => {
        if (products.length !== 0 && id) {
            setCurrentProduct(getProductDetails(id));
        }
    }, [products, id, getProductDetails]);

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
    }, [currentProduct, path]);
    
    const checkAvailableProduct = () => {
        return (
            currentProduct.product_colors.length > 0 &&
            currentProduct.price > 0
            );
        }
        
    if (Object.keys(error).length !== 0) return <Redirect to="/error" />

    return (
        <div className='product_page'>
            {loading && <LoadingIndicator />}
            {Object.keys(currentProduct).length !== 0 &&
                <>
                    <Breadcrumbs path={path} />
                    <ProductInfo currentProduct={currentProduct} />
                    <ParcelOptions value={12} />
                    {
                        checkAvailableProduct() ? 
                            <ProductAvailable
                                addToCart={addToCart}
                                currentProduct={currentProduct}
                                selectedColor={selectedColor}
                                setSelectedColor={setSelectedColor}
                                selectedQuantity={selectedQuantity}
                                setSelectedQuantity={setSelectedQuantity}
                            /> : <ProductNotAvailable />
                    }
                </>
            }
        </div>
    )
}

export default ProductPage;
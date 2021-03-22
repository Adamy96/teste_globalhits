import React from 'react';
import { useParams } from "react-router-dom";
import { useCategory } from '@talons/useCategory';
import { Container } from '@material-ui/core';
import {
    Breadcrumbs,
    LoadingIndicator,
    Navbar,
    ProductCard
} from '@components';
import './categoryPage.scss';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const { products, loading } = useCategory(categoryName);

    const path = [{
        name: categoryName,
        link: `/category/${categoryName}`
    }]

    return (
        <div className='category_page'>
            {loading && <LoadingIndicator />}
            <Breadcrumbs path={path}/>
            <Container className='products_container'>
                {products.map((product, idx) => (
                    <ProductCard {...product} key={idx} />
                ))}
            </Container>
        </div>
    )
}

export default CategoryPage;
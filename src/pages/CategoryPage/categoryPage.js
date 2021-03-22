import React from 'react';
import { useParams } from "react-router-dom";
import { useCategory } from '@talons/useCategory';
import { Container } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import {
    Breadcrumbs,
    LoadingIndicator,
    ProductCard
} from '@components';
import './categoryPage.scss';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const { products, loading, error } = useCategory(categoryName);

    const path = [{
        name: categoryName,
        link: `/category/${categoryName}`
    }]

    if (Object.keys(error).length !== 0) return <Redirect to="/error" />

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
import React from 'react';
import {
    Breadcrumbs,
    Categories,
    LoadingIndicator,
    TopSelling
} from '@components';
import { Redirect } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import { useProducts } from '@talons/useProducts'
import './homepage.scss';

const Homepage = () => {
    const { products, loading, error } = useProducts();

    if (Object.keys(error) != 0) return <Redirect to="/error" />

    return (
        <div className='homepage'>
            {loading && <LoadingIndicator />}
            <Breadcrumbs />
            <Categories />
            <Divider />
            <TopSelling products={products} />
        </div>
    )
}

export default Homepage;
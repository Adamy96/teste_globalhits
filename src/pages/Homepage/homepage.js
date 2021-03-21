import React from 'react';
import {
    Breadcrumbs,
    Categories,
    LoadingIndicator,
    Navbar,
    TopSelling
} from '@components';
import { Divider } from '@material-ui/core';
import { useProducts } from '@talons/useProducts'
import './homepage.scss';

const Homepage = () => {
    const { products, loading } = useProducts();

    return (
        <>
            <Navbar />
            <div className='homepage'>
                {loading && <LoadingIndicator />}
                <Breadcrumbs />
                <Categories />
                <Divider />
                <TopSelling products={products} />
            </div>
        </>
    )
}

export default Homepage;
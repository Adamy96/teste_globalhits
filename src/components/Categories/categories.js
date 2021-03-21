import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import './categories.scss';
import { CategoryCard } from '@components';
import categoriesData from '@data/categories';

const Categories = () => {
    const [showAllCategories, setShowAllCategories] = useState(false);
    const [categories, setCategories] = useState([]);
    const [categoriesMessage, setCategoriesMessage] = useState('Exibir todas');
    const ArrowIcon = showAllCategories ? ExpandLess : ExpandMore;

    useEffect(() => {
        if (showAllCategories) {
            setCategories(categoriesData);
            setCategoriesMessage('Ocultar');
        } else {
            setCategories(categoriesData.slice(0,4));
            setCategoriesMessage('Exibir todas');
        }
    }, [showAllCategories])

    return (
        <div className='categories'>
            <Typography className='subtitle' align='center'>
                Categorias mais procuradas
            </Typography>

            <Container className='cards_container'>
                {categories.map((category, idx) => (
                    <CategoryCard
                        name={category.name}
                        url={category.url}
                        key={idx}
                    />
                ))}
            </Container>
            
            <Typography
                className='text'
                onClick={() => setShowAllCategories(!showAllCategories)}
            >
                {categoriesMessage}
                <Box component='span' className='highlight'>
                    &nbsp;categorias&nbsp;
                </Box>
                <ArrowIcon />
            </Typography>
        </div>
    )
}

export default Categories;
import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './categoryCard.scss';

const CategoryCard = ({ name, url }) => {
    return (
        <Card className='category_card'>
            <Link to={url}>
                <Typography align='center'>
                    {name}
                </Typography>
            </Link>
        </Card>
    )
}

export default CategoryCard;
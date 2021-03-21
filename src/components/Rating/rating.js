import React, { useState } from 'react';
import { Star, StarBorder, StarHalf } from '@material-ui/icons';
import './rating.scss';
import { Container, Typography } from '@material-ui/core';

const Rating = ({ rating }) => {
    const stars = new Array(5).fill('');
    const [reviewCount, setReviewCount] = useState(
        rating > 0 ? (Math.random(1, 200) * 100).toFixed(0) : 0
    );

    return (
        <div className='rating'>
            <Container className='stars_container'>
                {stars.map((current, idx) => {
                    if (rating - (idx + 1) >= 1) return <Star key={idx} />
                    if (rating - (idx + 1) >= 0.5) return <StarHalf key={idx} />
                    return <StarBorder key={idx} />
                })}
            </Container>

            <Typography className='reviews'>
                ({reviewCount} avaliações)
            </Typography>
        </div>
    )
}

export default Rating;
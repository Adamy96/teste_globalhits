import React from 'react';
import CatalogProductCard from './CatalogProductCard';
import CartProductCard from './CartProductCard';

const Card = ({
    isCart = false,
    ...props
}) => {
    const SelectedCard = isCart ? CartProductCard : CatalogProductCard;

    return <SelectedCard {...props} />;
}

export default Card;
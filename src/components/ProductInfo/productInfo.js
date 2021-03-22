import React from "react";
import "./productInfo.scss";
import { Box, Container, Typography } from "@material-ui/core";
import { handleBrokenImage } from "@utils/helper";
import { Rating } from "@components";

const ProductInfo = ({ currentProduct }) => {
	const {
		brand,
		description,
		rating,
		name,
		image_link,
		price_sign,
		price,
	} = currentProduct;

	return (
		<Container className='product_info'>
			<Typography className='brand'>{brand}</Typography>
			<Rating rating={rating} />
			<Typography className='name'>{name}</Typography>
			<img src={image_link} alt={description} onError={handleBrokenImage} />
			<Typography className='price'>
				Por apenas
				<Box component='span' className='highlight'>
					&nbsp;{price_sign}
					&nbsp;{parseFloat(price).toFixed(2)}
				</Box>
			</Typography>
		</Container>
	);
};

export default ProductInfo;

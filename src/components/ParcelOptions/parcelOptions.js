import { Typography } from '@material-ui/core';
import React from 'react';
import './parcelOptions.scss';

const ParcelOptions = ({ value }) => {
    return (
        <Typography className='parcel_options'>
            Aceitamos parcelamento em até {value}x
        </ Typography>
    )
}

export default ParcelOptions;
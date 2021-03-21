import React from "react";
import ReactLoading from "react-loading";
import './loadingIndicator.scss';

const LoadingIndicator = () => (
    <ReactLoading
        className='loading_indicator'
        type={'spin'}
        color={'#FE80A6'}
        height={50}
        width={50}
    />
);

export default LoadingIndicator;

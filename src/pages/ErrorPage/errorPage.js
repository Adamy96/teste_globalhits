import React from 'react';
import { Typography } from '@material-ui/core';
import './errorPage.scss';

const ErrorPage = ({ errorMessage = 'A API fornecida está indisponível no momento.'}) => {
    return (
        <div className='errorPage'>
            <Typography align='center'>
                {errorMessage}
            </Typography>
        </div>
    )
}

export default ErrorPage;
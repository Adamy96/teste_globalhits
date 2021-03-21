import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './breadcrumbs.scss';

const Breadcrumbs = ({ path = [] }) => {
    return (
        <div className='breadcrumbs'>
            <Link to='/'>página inicial</Link>
            {path.map((current, idx) => (
                <Fragment key={idx}>
                    <span>/</span>
                    <Link to={current.link}>
                        {current.name}
                    </Link>
                </Fragment>
            ))}
        </div>
    );
}

export default Breadcrumbs;
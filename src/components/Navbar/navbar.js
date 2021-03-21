import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import Logo from '@assets/png/logo_mobile.png';
import { Minicart } from '@components';
import './navbar.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='topside'>
                <Menu className='menu' />
                <Link to='/'>
                    <img src={Logo} alt='Logo name' />
                </Link>
                <Link to='/cart'>
                    <Minicart />
                </Link>
            </div>

            <div className='searchbar'>
                <Input
                    placeholder='o que você está procurando? :)'
                    disableUnderline={true}
                />
                <Button>BUSCAR</Button>
            </div>
        </div>
    );
}

export default Navbar;
import React from 'react'
import AppBar from './styled-components/AppBar';
import styled from 'styled-components';
import Toolbar from './styled-components/Toolbar';
import { useSelector } from 'react-redux';

const Title = styled.h2`
    flex: 1;
`;

const NavBar = () => {
    const cartCount = useSelector(state => state.cart.length);
    return (
        <AppBar>
            <Toolbar>
                <Title>Shop</Title>
                <span>Shopping cart: {cartCount}</span>
            </Toolbar>
        </AppBar>
    )
};

export default NavBar;
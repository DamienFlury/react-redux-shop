import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AppBar from './styled-components/AppBar';
import Toolbar from './styled-components/Toolbar';
import Typography from './styled-components/Typography';

const NavLinks = styled.div`
  flex: 1;
  margin-left: 20px;
`;

const NavBar = () => {
  const cartCount = useSelector(state => state.cart.length);
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h3">Shop</Typography>
        <NavLinks>
          <Typography>Home</Typography>
        </NavLinks>
        <Typography>
Shopping cart:
          {' '}
          {cartCount}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

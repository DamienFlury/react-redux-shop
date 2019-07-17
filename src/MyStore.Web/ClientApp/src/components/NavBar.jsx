import React from 'react';
import styled from 'styled-components';
import AppBar from './styled-components/AppBar';
import Toolbar from './styled-components/Toolbar';
import Typography from './styled-components/Typography';
import StyledNavLink from './styled-components/StyledNavLink';

const NavLinks = styled.div`
  flex: 1;
  margin-left: 20px;
`;

const AppTitle = styled(Typography)`
  margin-left: 20px;
`;

const NavBar = () => (
  <AppBar>
    <Toolbar>
      <AppTitle variant="h3">Shop</AppTitle>
      <NavLinks>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/products">Products</StyledNavLink>
        <StyledNavLink to="/purchases">My Purchases</StyledNavLink>
      </NavLinks>
      <StyledNavLink to="/shopping-cart"><i className="material-icons" style={{ fontSize: '1.2em' }}>shopping_cart</i></StyledNavLink>
    </Toolbar>
  </AppBar>
);

export default NavBar;

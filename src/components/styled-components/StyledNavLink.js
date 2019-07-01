import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    color: #ffffff;
    padding: 15px;
    font-family: ${props => props.theme.fontFamily};
    transition: .2s;
    &:hover {
      background-color: ${props => props.theme.palette.primary[1]}
    }
    &:active {
      background-color: ${props => props.theme.palette.primary[2]}
    }
`;

export default StyledNavLink;

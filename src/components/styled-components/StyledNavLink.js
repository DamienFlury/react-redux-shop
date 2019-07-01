import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #ffffff;
    padding: 10px;
    font-family: ${props => props.theme.fontFamily};
    &:hover {
      background-color: ${props => props.theme.palette.primary[1]}
    }
`;

export default StyledNavLink;

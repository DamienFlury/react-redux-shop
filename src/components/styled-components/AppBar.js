import styled from 'styled-components';

const AppBar = styled.nav`
    background-color: ${props => props.theme.palette[props.color || 'primary'][0]};
    box-shadow: ${props => props.theme.shadows[0]};
    color: white;
    padding: 0 20px;
    align-items: center;
    position: sticky;
`;

export default AppBar;

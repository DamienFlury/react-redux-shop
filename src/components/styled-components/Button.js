import styled from 'styled-components';

const Button = styled.button`
    padding: 10px 20px;
    box-shadow: ${props => props.theme.shadows[0]};
    background-color: ${props => props.theme.palette.primary[0]};
    border-radius: ${props => props.theme.borderRadius};
    border: none;
    color: white;
    outline: none;
    transition: .2s;
    cursor: pointer;
    &:disabled {
        background-color: #aaaaaa;
    }
    &:hover {
        background-color: ${props => props.theme.palette.primary[1]};
        box-shadow: ${props => props.theme.shadows[1]};
    }
    &:active {
        background-color: ${props => props.theme.palette.primary[2]};
        box-shadow: ${props => props.theme.shadows[2]};
    }
`;

export default Button;

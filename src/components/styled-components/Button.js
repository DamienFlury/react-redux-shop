import styled from 'styled-components';

const Button = styled.button`
    padding: 10px 20px;
    box-shadow: ${props => props.theme.shadows[0]};
    background-color: ${props => props.theme.palette[props.color || 'primary'][0]};
    border-radius: ${props => props.theme.borderRadius};
    border: none;
    color: white;
    outline: none;
    transition: .2s;
    &:enabled {
        cursor: pointer;
    }
    &:disabled {
        background-color: #aaaaaa;
    }
    &:hover:enabled {
        background-color: ${props => props.theme.palette[props.color || 'primary'][1]};
        box-shadow: ${props => props.theme.shadows[1]};
    }
    &:active:enabled {
        background-color: ${props => props.theme.palette[props.color || 'primary'][2]};
        box-shadow: ${props => props.theme.shadows[2]};
    }
`;

export default Button;

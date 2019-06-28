import styled from 'styled-components';

const TextField = styled.input`
    padding: 10px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid #aaaaaa;
    outline: none;
    transition: .2s;
    &:focus {
        border-bottom-color: ${props => props.theme.palette.primary[0]}
    }
`;

export default TextField;
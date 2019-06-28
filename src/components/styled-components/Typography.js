import styled from 'styled-components';

const Typography = styled.span`
    font-size: ${props => getFontSize(props.variant)};
`;

const getFontSize = (fontSizeName) => {
    switch(fontSizeName) {
        case 'h1':
            return '4em';
        case 'h2':
            return '3em';
        default:
            return '1em';
    }
};

export default Typography;
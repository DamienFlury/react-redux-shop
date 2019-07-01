import styled from 'styled-components';

const getFontSize = (fontSizeName) => {
  switch (fontSizeName) {
    case 'h1':
      return '4em';
    case 'h2':
      return '3em';
    case 'h3':
      return '2em';
    default:
      return '1em';
  }
};

const Typography = styled.span`
    font-size: ${props => getFontSize(props.variant)};
    font-family: ${props => props.theme.fontFamily};
`;


export default Typography;

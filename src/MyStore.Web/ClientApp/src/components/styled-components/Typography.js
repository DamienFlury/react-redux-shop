import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const Typography = styled(motion.span)`
    display: inline-block;
    font-size: ${props => getFontSize(props.variant)};
    font-family: ${props => props.theme.fontFamily};
`;


export default Typography;

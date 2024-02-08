import { css } from '@emotion/css';
import styled from '@emotion/styled';


const getDimension = ({ $size = 'default' }) => {
  switch ($size) {
    case 'small':
      return '1.6rem';
    case 'default':
      return '2.2rem';
    case 'medium':
      return '2.0rem';
    case 'large':
      return '3.4rem';
  }
};

const IconContainer = styled.div`
  ${props =>
    props.$colour &&
    css`
      color: ${props.$colour};
      &:hover {
        color: ${props.$colour} !important;
      }
    `};
  width: ${getDimension};
  height: ${getDimension};
  margin-right: ${props => (props.$noMargin ? 0 : '1rem')};
  display: inline-block;
  transition: color 0.2s ease-out;
  svg {
    height: 100%;
    width: 100%;
  }
`;

export default IconContainer;

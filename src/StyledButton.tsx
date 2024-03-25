import styled from 'styled-components';
import { darken } from 'polished';

interface ButtonProps {
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ backgroundColor }) => backgroundColor || '#007bff'};
  color: ${({ color }) => color || '#fff'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ backgroundColor }) => backgroundColor ? darken(0.1, backgroundColor) : darken(0.1, '#007bff')};
  }
`;

export default StyledButton;
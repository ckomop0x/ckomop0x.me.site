import styled from 'styled-components'
import { blue } from './colors';

export interface ITitleStyled {
  centered?: boolean
}

export const TitleStyled = styled.h2`
  color: ${blue[900]};
  width: 100%;
  padding: 0 16px;
  font-family: 'Roboto', sans-serif;
  
  ${({ centered }: ITitleStyled) => centered ? 'text-align: center;' : ''}
`;

import styled from 'styled-components';

export const SectionTitleStyled = styled.h2`
  text-align: left;
  font-size: 40px;
  color: #fff;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 48px 0 32px;

  &::before {
    content: '\E801';
    font-family: 'Fontello', sans-serif;
    color: #007bff;
    font-size: 15px;
    display: block;
    line-height: 15px;
    margin-bottom: 10px;
  }
`;

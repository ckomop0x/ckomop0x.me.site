import Link from 'next/link';
import styled from 'styled-components';

export const MainSection = styled.section<{
  backgroundImage?: string;
}>`
  height: 100vh;
  max-height: 100%;
  background: radial-gradient(ellipse at 80% 50%, #00000010, #00000080) 100% 50%,
    url(${({ backgroundImage }) => `${backgroundImage}?tr=w-2000`}) no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;

  .main-section__text {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  font-family: Neucha, Roboto, Helvetica, Arial, sans-serif;
  font-weight: 700;
  line-height: 1.1;
  font-size: 30px;
  max-width: 400px;
  color: #fff;

  @media (min-width: 700px) {
    font-size: 48px;
  }
`;

export const SubTitle = styled.p`
  font-family: Neucha, Roboto, Helvetica, Arial, sans-serif;
  color: #fff;
  font-size: 20px;
  line-height: 32px;
  margin-top: 24px;
  max-width: 400px;
  font-weight: 400;
`;

export const StartButton = styled(Link)`
  display: flex;
  line-height: 19px;
  font-size: 16px;
  white-space: nowrap;
  background-size: 200px;
  background: #007bff;
  border: 0;
  color: #e1e1e1;
  padding: 16px 32px;
  flex-grow: 0;
  flex-shrink: 1;
  margin-top: 48px;
  transition: 0.5s ease;
  box-shadow: 0 0 20px #000000;
  border-radius: 8px;

  &:hover {
    background-position: -50px;
    box-shadow: 0 0 10px #000000;
    color: #e1e1e1;
    text-decoration: none;
  }
`;

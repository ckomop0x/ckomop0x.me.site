import styled from '@emotion/styled';

export const HeroSectionWrapper = styled.section<{
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
`;

export const HeroSectionText = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.h1`
  font-family: var(--font-secondary), Roboto, Helvetica, Arial, sans-serif;
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
  font-family: var(--font-secondary), Roboto, Helvetica, Arial, sans-serif;
  color: #fff;
  font-size: 20px;
  line-height: 32px;
  margin-top: 24px;
  max-width: 400px;
  font-weight: 400;
`;

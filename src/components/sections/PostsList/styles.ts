import Link from 'next/link';
import styled from 'styled-components';

export const PostsListStyled = styled.div`
  justify-content: center;
`;

export const AllPostsLink = styled(Link)`
  background-color: hsl(211, 100%, 40%);
  color: #fff;
  display: inline-block;
  margin: 40px auto 0;
  padding: 10px 20px;
  box-shadow: 0 0 10px #0000002e;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
`;

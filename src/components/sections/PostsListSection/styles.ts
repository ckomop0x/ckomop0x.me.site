import styled from '@emotion/styled';
import Link from 'next/link';

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

export const AllPostsLinkButton = styled.button`
  transition: box-shadow 0.3s ease;
  box-shadow: 0 2px 3px #0000001c;
  border: 0;
  background: #0063cc;
  padding: 10px 20px;
  color: white;
`;

export const PostsListSectionWrapper = styled.section`
  padding: 0 0 80px;
`;

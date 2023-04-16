import styled from '@emotion/styled';
import { FC } from 'react';

interface PostDateProps {
  publicationDate: string;
}

const PostDate: FC<PostDateProps> = ({ publicationDate }): JSX.Element => {
  const [publicationDay, publicationMonth, publicationYear] =
    publicationDate.split(' ');

  return (
    <PostDateWrapper>
      <span>{publicationDay}</span>
      <span>{publicationMonth}</span>
      <span>{publicationYear}</span>
    </PostDateWrapper>
  );
};

export const PostDateWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  z-index: 20;
  right: 0;
  bottom: 0;
  color: #747474;
  text-align: center;
  font-size: 13px;
  height: 80px;
  background: #fff;
  width: 80px;
  border-radius: 0 0 20px 0;

  span {
    display: block;
    padding: 0;
    margin: 0;
  }

  span:first-of-type {
    display: block;
    font-size: 22px;
    padding: 4px 0 0 0;
    color: #513b34;
  }
`;

export default PostDate;

import Heading2 from 'components/atoms/Typography/Heading2';
import React from 'react';
import styled from 'styled-components';

import PostSkeleton from '../PostSkeleton';

interface Props {
  title: string;
  postCount: number;
}

const PostListSkeleton: React.FC<Props> = ({ title, postCount }) => {
  const items = [];

  for (let index = 0; index < postCount; index++) {
    items.push(
      <PostWrapper>
        <PostSkeleton />
      </PostWrapper>
    );
  }

  return (
    <Layout>
      <Header>
        <Heading2 fontWeight="bold">{title}</Heading2>
      </Header>
      <Content>{items}</Content>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin-bottom: 10px;
`;

const Content = styled.div`
  width: 100%;
`;

const PostWrapper = styled.div`
  border-bottom: 1px solid #e8e8e8;

  :last-child {
    border-bottom: none;
  }
`;

export default React.memo(PostListSkeleton);

import React from 'react';
import styled from 'styled-components';

import Heading2 from '../../atoms/Typography/Heading2';
import Post from '../Post';
import { PostSummaryFields } from '../Post/__generated__/PostSummaryFields';

interface Props {
  posts: PostSummaryFields[];
}

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <Layout>
      <Header>
        <Title fontWeight="bold">Today</Title>
      </Header>
      <Content>
        {posts.map(post => (
          <PostWrapper>
            <Post post={post} />
          </PostWrapper>
        ))}
      </Content>
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

const Title = styled(Heading2)``;

const Content = styled.div`
  width: 100%;
`;

const PostWrapper = styled.div`
  border-bottom: 1px solid #e8e8e8;

  :last-child {
    border-bottom: none;
  }
`;

export default React.memo(PostList);

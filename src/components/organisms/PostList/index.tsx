import Heading2 from 'components/atoms/Typography/Heading2';
import React from 'react';
import styled from 'styled-components';

import Post from '../Post';
import { PostSummaryFields } from '../Post/__generated__/PostSummaryFields';

interface Props {
  title: string;
  posts: PostSummaryFields[];
}

const PostList: React.FC<Props> = ({ title, posts }) => {
  return (
    <Layout>
      <Header>
        <Title fontWeight="bold">{title}</Title>
      </Header>
      <Content>
        {posts.map(post => (
          <Post post={post} />
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

export default React.memo(PostList);

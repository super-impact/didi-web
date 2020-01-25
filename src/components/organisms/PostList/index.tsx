import { TwoColumnList } from 'components/molecules/List';
import React, { useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';

import Post from '../Post';
import { PostSummaryFields } from '../Post/__generated__/PostSummaryFields';

interface Props {
  title: string;
  posts: PostSummaryFields[];
  hasMore: boolean;
  fetchedPostLength: number;
  loadMore: () => void;
}

const PostList: React.FC<Props> = ({
  title,
  posts,
  hasMore,
  fetchedPostLength,
  loadMore
}) => {
  const renderItem = useCallback(
    (item: PostSummaryFields) => <Post key={item.id} post={item} />,
    []
  );

  return (
    <Layout>
      <Content>
        <InfiniteScroll
          dataLength={fetchedPostLength}
          hasMore={hasMore}
          next={loadMore}
          loader={<></>}
        >
          <ListWrapper>
            <TwoColumnList items={posts} renderItem={renderItem} />
          </ListWrapper>
        </InfiniteScroll>
      </Content>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin-bottom: 18px;
`;

const Content = styled.div`
  width: 100%;
`;

const ListWrapper = styled.div`
  margin: 1px;
`;

export default React.memo(PostList);

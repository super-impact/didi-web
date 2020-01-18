import { gql } from 'apollo-boost';
import Heading2 from 'components/atoms/Typography/Heading2';
import { ColumnStackList } from 'components/molecules/List';
import React, { useCallback } from 'react';
import styled from 'styled-components';

import Post, { PostFragments } from '../Post';
import { LikePostFields, LikePostFields_likePosts } from './__generated__/LikePostFields';

export const LikePostFragments = {
  fields: gql`
    fragment LikePostFields on User {
      likeCount
      likePosts {
        ...PostSummaryFields
      }
    }

    ${PostFragments.fields}
  `
};

interface Props {
  likePost: LikePostFields;
}

export const LikePostList: React.FC<Props> = React.memo(props => {
  console.log("props: ", props);

  const renderItem = useCallback(
    (item: LikePostFields_likePosts) => <Post key={item.id} post={item} />,
    []
  );

  return (
    <Container>
      <Title color="#272727" fontWeight="bold">
        추천한 콘텐츠
      </Title>
      <ColumnStackList
        items={props.likePost.likePosts}
        renderItem={renderItem}
      />
    </Container>
  );
});

const Container = styled.div`
  display: block;
`;

const Title = styled(Heading2)`
  margin-bottom: 24px;
`;

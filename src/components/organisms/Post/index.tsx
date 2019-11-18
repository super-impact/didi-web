import gql from 'graphql-tag';
import React from 'react';
import { MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import IconButton from '../../atoms/IconButton';
import Thumbnail from '../../atoms/Thumbnail';
import Body2 from '../../atoms/Typography/Body2';
import Caption1 from '../../atoms/Typography/Caption1';
import { PostSummaryFields } from './__generated__/PostSummaryFields';

export const PostFragments = {
  fields: gql`
    fragment PostSummaryFields on Post {
      id
      title
      thumbnailImageUrl
      description
      likeCount
    }
  `
};

type Props = {
  post: PostSummaryFields;
};

const Post: React.FC<Props> = ({ post }) => {
  return (
    <Layout>
      <StyledLink to={`/posts/${post.id}`}>
        <ThumbnailWrapper>
          <Thumbnail
            imageURL={post.thumbnailImageUrl}
            width="80px"
            height="80px"
          />
        </ThumbnailWrapper>
        <DescriptionLayout>
          <Title color="#484848" fontWeight="bold">
            {post.title}
          </Title>
          <Description color="#484848">{post.description}</Description>
        </DescriptionLayout>
      </StyledLink>
      <IconButtonWrapper>
        <IconButton
          icon={<MdFavorite size={16} />}
          text={post.likeCount.toString()}
          width="64px"
          height="74px"
          backgroundColor="white"
          border="1px solid #eee"
          onClick={() => alert("like butotn clicked")}
        />
      </IconButtonWrapper>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 20px;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex: 1;
  cursor: pointer;
  text-decoration: none;
`;

const ThumbnailWrapper = styled.div`
  margin-right: 12px;
`;

const DescriptionLayout = styled.div`
  flex: 1;
  place-self: flex-start;
`;

const Description = styled(Caption1)`
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Title = styled(Body2)`
  font-weight: bold;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const IconButtonWrapper = styled.div`
  margin-left: 12px;
`;

export default React.memo(Post);

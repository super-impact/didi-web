import gql from 'graphql-tag';
import React from 'react';
import { MdFavorite } from 'react-icons/md';
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
      <Link>
        <ThumbnailWrapper>
          <Thumbnail
            imageURL={post.thumbnailImageUrl}
            width="80px"
            height="80px"
          />
        </ThumbnailWrapper>
        <DescriptionLayout>
          <Title>{post.title}</Title>
          <Description>{post.description}</Description>
        </DescriptionLayout>
      </Link>
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
  position: relative;
`;

const Link = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
  cursor: pointer;
  :hover {
    background-color: #f9f9f9;
  }
`;

const ThumbnailWrapper = styled.div`
  margin-right: 10px;
`;

const DescriptionLayout = styled.div`
  flex: 1;
  place-self: flex-start;
`;

const Description = styled(Caption1)`
  color: #6f6f6f;
`;

const Title = styled(Body2)`
  font-weight: bold;
`;

const IconButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
`;

export default React.memo(Post);

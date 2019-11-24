import { gql } from 'apollo-boost';
import { Label } from 'components/atoms/Label';
import Line from 'components/atoms/Line';
import Body2 from 'components/atoms/Typography/Body2';
import React from 'react';
import styled from 'styled-components';
import { BreakPoints } from 'utils';
import { getPostWritedDate } from 'utils/DateUtils';

import { PostContentFields } from './__generated__/PostContentFields';

export const PostContentFragments = {
  fields: gql`
    fragment PostContentFields on Post {
      thumbnailImageUrl
      description
      createdAt
    }
  `
};

interface Props {
  post: PostContentFields;
}

const PostContent: React.FC<Props> = ({ post }) => {
  return (
    <Layout>
      <PostImage src={post.thumbnailImageUrl} />
      <Line marginTop="20px" marginBottom="20px" />
      <Body2>{post.description}</Body2>
      <Footer>
        <Label
          text={getPostWritedDate(post.createdAt)}
          backgroundColor="white"
        />
      </Footer>
    </Layout>
  );
};

export default React.memo(PostContent);

const Layout = styled.div`
  width: 680px;
  background-color: white;
  box-shadow: rgba(41, 42, 43, 0.16) 0px 1px 3px -1px,
    rgba(0, 0, 0, 0.04) 0px 0px 1px 1px;
  border-radius: 3px;
  padding: 20px;

  ${BreakPoints.media.tablet`
  width: 100%;
  margin-left: 0;
  margin-top: 20px;
`}
`;

const PostImage = styled.img`
  width: 100%;
  height: 380px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

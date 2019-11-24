import { gql } from 'apollo-boost';
import Body2 from 'components/atoms/Typography/Body2';
import React from 'react';
import styled from 'styled-components';
import { BreakPoints } from 'utils';

import { PostBottomFixFields } from './__generated__/PostBottomFixFields';

export const PostBottomFixFragments = {
  fields: gql`
    fragment PostBottomFixFields on Post {
      contentLink
    }
  `
};

interface Props {
  post: PostBottomFixFields;
}

const PostBottomFix: React.FC<Props> = ({ post }) => {
  return (
    <Layout>
      <CTAButtonLayout>
        <RecommendButton onClick={() => alert("Hello")}>
          <Text fontWeight="bold">추천하기 (3)</Text>
        </RecommendButton>
        <ContentLink target="_blank" href={post.contentLink}>
          <Text color="white" fontWeight="bold">
            콘텐츠 보기
          </Text>
        </ContentLink>
      </CTAButtonLayout>
    </Layout>
  );
};

export default React.memo(PostBottomFix);

const Layout = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 14px 0;
  display: flex;

  ${BreakPoints.media.tablet`
    padding: 14px 20px;
  `};
`;

const CTAButtonLayout = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const RecommendButton = styled.div`
  padding: 12px 24px;
  cursor: pointer;
  margin-right: 12px;

  ${BreakPoints.media.tablet`
    padding: 8px 12px;
  `}
`;

const ContentLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #4c9968;
  padding: 12px 24px;
  border-radius: 3px;
  text-decoration: none;
  line-height: 24px;
  background-color: #4c9968;
  border-radius: 3px;

  ${BreakPoints.media.tablet`
    padding: 8px 12px;
  `}
`;

const Text = styled(Body2)`
  ${BreakPoints.media.tablet`
    font-size: 12px;
  `}
`;

import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';

const PostSkeleton: React.FC = () => {
  return (
    <Layout>
      <ThumbnailWrapper>
        <Skeleton width={80} height={80} />
      </ThumbnailWrapper>
      <DescriptionLayout>
        <Skeleton width={300} />
        <DescriptionContent>
          <Skeleton width={100} count={2} />
        </DescriptionContent>
      </DescriptionLayout>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  background-color: white;
  :hover {
    background-color: #f9f9f9;
  }
`;

const ThumbnailWrapper = styled.div`
  margin-right: 10px;
`;

const DescriptionLayout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const DescriptionContent = styled.div`
  max-width: 100px;
  margin-top: 4px;
`;

export default React.memo(PostSkeleton);

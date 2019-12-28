import React from 'react';
import styled from 'styled-components';
import { BreakPoints } from 'utils';

interface Props {
  header: React.ReactNode;
  breadcrumb: React.ReactNode;
  contentHeader: React.ReactNode;
  contentMain: React.ReactNode;
  contentAside: React.ReactNode;
  bottomFix: React.ReactNode;
}

const PostDetailTemplate: React.FC<Props> = ({
  header,
  breadcrumb,
  contentHeader,
  contentMain,
  contentAside,
  bottomFix
}) => {
  return (
    <Layout>
      <Header>{header}</Header>
      <Main>
        <BreadcrumbsWrapper>{breadcrumb}</BreadcrumbsWrapper>
        <ContentHeader>{contentHeader}</ContentHeader>
        <ContentBody>
          <ContentMain>{contentMain}</ContentMain>
          <ContentAside>{contentAside}</ContentAside>
        </ContentBody>
      </Main>
      <FixBottom>{bottomFix}</FixBottom>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 100px;
`;

const Header = styled.header`
  width: 100%;
  background-color: white;
  padding: 14px 16px;
`;

const Main = styled.main`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  ${BreakPoints.media.tablet`
    padding: 0 20px;
  `};
`;

const BreadcrumbsWrapper = styled.div`
  margin-bottom: 12px;
  ${BreakPoints.media.tablet`
    margin-bottom: 8px;
  `}
`;

const ContentHeader = styled.div`
  margin-bottom: 24px;
`;

const ContentBody = styled.main`
  display: flex;

  ${BreakPoints.media.tablet`
    flex-direction: column;
  `};
`;

const ContentMain = styled.main`
  flex: 1;
`;

const ContentAside = styled.aside`
  width: 340px;
  margin-left: 20px;

  ${BreakPoints.media.tablet`
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
  `}
`;

const FixBottom = styled.div`
  background-color: white;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #e8e8e8;
  width: 100%;
`;

export default React.memo(PostDetailTemplate);

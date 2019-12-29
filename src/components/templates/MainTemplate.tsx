import React from 'react';
import styled from 'styled-components';
import { BreakPoints } from 'utils';

interface Props {
  header: React.ReactNode;
  main: React.ReactNode;
  aside: React.ReactNode;
}

const MainTemplate: React.FC<Props> = ({ header, main }) => {
  return (
    <Layout>
      <Header>{header}</Header>
      <ContentSection>
        <Mian>{main}</Mian>
      </ContentSection>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
`;

const Header = styled.header`
  width: 100%;
  background-color: white;
  padding: 14px 16px;
`;

const ContentSection = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;

  ${BreakPoints.media.tablet`
    padding: 0 20px;
    flex-direction: column;
  `};
`;

const Mian = styled.main`
  flex: 1;
`;

export default React.memo(MainTemplate);

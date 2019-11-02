import React from 'react';
import styled from 'styled-components';

interface Props {
  header: React.ReactNode;
}

const MainTemplate: React.FC<Props> = ({ header }) => {
  return (
    <Layout>
      <Header>{header}</Header>
      <ContentSection>content</ContentSection>
    </Layout>
  );
};

export default React.memo(MainTemplate);

const Layout = styled.div`
  width: 100%;
`;

const Header = styled.header`
  width: 100%;
  background-color: white;
  padding: 12px 16px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid #e8e8e8;
`;

const ContentSection = styled.div`
  width: 100%;
  max-width: 1080px;

  margin: 0 auto;
  margin-top: 30px;
`;

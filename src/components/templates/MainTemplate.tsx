import React from 'react';
import styled from 'styled-components';

import { BreakPoints } from '../../utils';
import PostAddButtonAndDescription from '../molecules/PostAddButtonAndDescription';

interface Props {
  header: React.ReactNode;
  main: React.ReactNode;
}

const MainTemplate: React.FC<Props> = ({ header, main }) => {
  return (
    <Layout>
      <Header>{header}</Header>
      <ContentSection>
        <Mian>{main}</Mian>
        <Aside>
          <PostAddButtonAndDescription />
        </Aside>
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
  padding: 12px 16px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid #e8e8e8;
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

const Aside = styled.aside`
  width: 340px;
  margin-left: 20px;
  ${BreakPoints.media.tablet`
    margin-left: 0;
    margin-top: 20px;
  `}
`;

export default React.memo(MainTemplate);

import React from 'react';
import styled from 'styled-components';

interface Props {
  header: React.ReactNode;
  children: React.ReactNode;
}

const LayoutWithHeader: React.FC<Props> = props => {
  return (
    <Layout>
      <Header>{props.header}</Header>
      {props.children}
    </Layout>
  );
};

export default React.memo(LayoutWithHeader);

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

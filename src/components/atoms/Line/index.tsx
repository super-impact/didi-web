import React from 'react';
import styled from 'styled-components';

const Line: React.FC = () => {
  return <Layout />;
};

export default React.memo(Line);

const Layout = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e8e8e8;
  margin-top: 12px;
  margin-bottom: 12px;
`;

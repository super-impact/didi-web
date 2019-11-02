import React, { useCallback } from 'react';
import styled from 'styled-components';

import ModalContent from './ModalContent';

interface Props {
  onCloseModal: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ onCloseModal, children }) => {
  const handleClickContentLayout = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.stopPropagation();
    },
    []
  );

  return (
    <Layout onClick={onCloseModal}>
      <ContentLayout onClick={handleClickContentLayout}>
        <ContentBackground>
          <ModalContent onCloseModal={onCloseModal}>{children}</ModalContent>
        </ContentBackground>
      </ContentLayout>
    </Layout>
  );
};

const Layout = styled.div`
  background: rgba(0, 0, 0, 0.7);
  bottom: 0;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
`;

const ContentLayout = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0 40px;
`;

const ContentBackground = styled.div`
  background: #f9f9f9;
  border-radius: 3px;
  box-shadow: 1px 0 6px 0 rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  max-width: 1080px;
  width: 800px;
  padding: 20px;
`;

export default React.memo(Modal);

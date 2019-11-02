import React from 'react';
import { MdClear } from 'react-icons/md';
import styled from 'styled-components';

interface Props {
  onCloseModal: () => void;
  children: React.ReactNode;
}

const ModalContent: React.FC<Props> = ({ onCloseModal, children }) => {
  return (
    <Layout>
      <ActionBar>
        <CloseIcon size={24} onClick={onCloseModal} />
      </ActionBar>
      <ContentLayout>{children}</ContentLayout>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

const CloseIcon = styled(MdClear)`
  cursor: pointer;
`;

const ContentLayout = styled.div``;

export default ModalContent;

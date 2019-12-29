import Heading1 from 'components/atoms/Typography/Heading1';
import { UserSessionFragmentFields } from 'graphql/fragments/__generated__/UserSessionFragmentFields';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import AuthGnb from '../Gnb/AuthGnb';

interface Props {
  onClickAuthStartButton: () => void;
  authorized: boolean;
  userSession: UserSessionFragmentFields | null;
  isSessionLoading: boolean;
}

const Header: React.FC<Props> = props => {
  const {
    authorized,
    userSession,
    isSessionLoading,
    onClickAuthStartButton
  } = props;

  if (isSessionLoading) {
    return (
      <Layout>
        <Logo to="/">
          <Heading1 fontWeight="bold">ㄷㄷ</Heading1>
        </Logo>
      </Layout>
    );
  }

  return (
    <Layout>
      <Logo to="/">
        <Heading1 fontWeight="bold">ㄷㄷ</Heading1>
      </Logo>
      <GnbContainer>
        {authorized ? (
          <AuthGnb userSession={userSession as UserSessionFragmentFields} />
        ) : (
          <StartTextButton onClick={onClickAuthStartButton}>
            시작하기
          </StartTextButton>
        )}
      </GnbContainer>
    </Layout>
  );
};

export default React.memo(Header);

const Layout = styled.div`
  display: flex;
  align-items: center;
  max-width: 1080px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  text-decoration: none;
`;

const GnbContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const StartTextButton = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #17487f;
  border: 1px solid #17487f;
  border-radius: 3px;
  outline: none;
  padding: 8px 16px;
  cursor: pointer;
`;

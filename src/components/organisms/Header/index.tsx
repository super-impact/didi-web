import LegacyButton, { ButtonBackgroundColor, ButtonBorderColor, ButtonTextColor } from 'components/atoms/LegacyButton';
import Heading1 from 'components/atoms/Typography/Heading1';
import { UserSessionFragmentFields } from 'graphql/fragments/__generated__/UserSessionFragmentFields';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import UserProfile from '../Profile/UserProfile';

interface Props {
  onClickAuthStartButton: () => void;
  authorized: boolean;
  userSession: UserSessionFragmentFields | null;
}

const Header: React.FC<Props> = props => {
  const { authorized, userSession, onClickAuthStartButton } = props;

  return (
    <Layout>
      <Logo to="/">
        <Heading1 fontWeight="bold">ㄷㄷ</Heading1>
      </Logo>
      <AuthButtonsLayout>
        {authorized && userSession ? (
          <UserProfile userSession={userSession} />
        ) : (
          <LegacyButton
            color={ButtonTextColor.WHITE}
            backgroundColor={ButtonBackgroundColor.GREEN}
            borderColor={ButtonBorderColor.GREEN}
            text="시작하기"
            onClick={onClickAuthStartButton}
          />
        )}
      </AuthButtonsLayout>
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

const AuthButtonsLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

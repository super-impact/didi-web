import React from 'react';
import styled from 'styled-components';

import Button, { ButtonBackgroundColor, ButtonBorderColor, ButtonTextColor } from '../../atoms/Button';

interface Props {
  onClickSignInButton: () => void;
  onClickSignUpButton: () => void;
}

const Header: React.FC<Props> = ({
  onClickSignInButton,
  onClickSignUpButton
}) => {
  return (
    <Layout>
      <Logo>Didi</Logo>
      <AuthButtonsLayout>
        <SignInButton
          color={ButtonTextColor.BLACK}
          backgroundColor={ButtonBackgroundColor.WHITE}
          borderColor={ButtonBorderColor.GRAY}
          text="로그인"
          onClick={onClickSignInButton}
        />
        <Button
          color={ButtonTextColor.WHITE}
          backgroundColor={ButtonBackgroundColor.GREEN}
          borderColor={ButtonBorderColor.GREEN}
          text="시작하기"
          onClick={onClickSignUpButton}
        />
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

const Logo = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const AuthButtonsLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const SignInButton = styled(Button)`
  margin-right: 16px;
`;
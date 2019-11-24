import Button, { ButtonBackgroundColor, ButtonBorderColor, ButtonTextColor } from 'components/atoms/Button';
import Heading1 from 'components/atoms/Typography/Heading1';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
      <Logo to="/">
        <Heading1 fontWeight="bold">didi</Heading1>
      </Logo>
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

const Logo = styled(Link)`
  text-decoration: none;
`;

const AuthButtonsLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const SignInButton = styled(Button)`
  margin-right: 16px;
`;

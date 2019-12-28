import LegacyButton, { ButtonBackgroundColor, ButtonBorderColor, ButtonTextColor } from 'components/atoms/LegacyButton';
import Heading2 from 'components/atoms/Typography/Heading2';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  onClickAuthStartButton: () => void;
}

const Header: React.FC<Props> = ({ onClickAuthStartButton }) => {
  return (
    <Layout>
      <Logo to="/">
        <Heading2 fontWeight="bold">ㄷㄷ</Heading2>
      </Logo>
      <AuthButtonsLayout>
        <LegacyButton
          color={ButtonTextColor.WHITE}
          backgroundColor={ButtonBackgroundColor.GREEN}
          borderColor={ButtonBorderColor.GREEN}
          text="시작하기"
          onClick={onClickAuthStartButton}
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

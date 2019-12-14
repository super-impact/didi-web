import { GOOGLE_AUTH_URL } from 'api';
import IconWithTextButton from 'components/molecules/Button/IconWithTextButton';
import LinkBlock from 'components/molecules/Link/LinkBlock';
import { TitleWithDescription } from 'components/molecules/Title';
import React from 'react';
import GoogleLogo from 'resources/img/google-logo.svg';
import styled from 'styled-components';

const AuthTemplate: React.FC = () => {
  return (
    <Container>
      <MainSection>
        <HeaderWrapper>
          <TitleWithDescription
            titleText="디디 시작하기"
            descriptionText="복잡한 절차없이 빠르게 시작해 볼까요?"
          />
        </HeaderWrapper>
        <div>
          <LinkBlock to={GOOGLE_AUTH_URL}>
            <IconWithTextButton iconURL={GoogleLogo} text="구글로 시작하기" />
          </LinkBlock>
        </div>
      </MainSection>
    </Container>
  );
};

export default React.memo(AuthTemplate);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const MainSection = styled.section`
  margin-bottom: 120px;
`;

const HeaderWrapper = styled.div`
  margin-bottom: 32px;
`;

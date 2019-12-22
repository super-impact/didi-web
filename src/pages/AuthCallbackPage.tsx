import { useAuthContainer } from 'containers';
import { useUserSessionContainer } from 'containers/useUserSessionContainer';
import queryString from 'query-string';
import React, { useEffect } from 'react';
import ReactLoading from 'react-loading';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { setAccessToken, setRefreshToken } from 'utils/authTokenStore';

const AuthCallbackPage: React.FC = () => {
  const { startSocialAuth, error, loading, data } = useAuthContainer();
  const { setUserSession } = useUserSessionContainer();
  const { location, replace } = useHistory();

  useEffect(() => {
    const queryParams = queryString.parse(location.search);

    if (!queryParams.code) {
      return;
    }

    startSocialAuth({
      variables: {
        provider: "google",
        oAuthCode: queryParams.code as string
      }
    });
  }, [location, startSocialAuth]);

  if (loading) {
    return (
      <Container>
        <ReactLoading type="spin" color="#4c9968" width="64px" height="64px" />
      </Container>
    );
  }

  if (error || !data) {
    return (
      <Container>
        <ErrorText>소셜 인증을 할 수 없습니다</ErrorText>
        <Link to="/">
          <Button>홈으로 돌아가기</Button>
        </Link>
      </Container>
    );
  }

  const { accessToken, refreshToken, user } = data.startSocialAuth;

  setAccessToken(accessToken);
  setRefreshToken(refreshToken);
  setUserSession(user);

  replace("/");

  return <></>;
};

export default React.memo(AuthCallbackPage);

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorText = styled.h2`
  margin-bottom: 16px;
`;

const Button = styled.button`
  border: none;
  outline: none;
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 14px 12px;
  cursor: pointer;
  width: 100%;
`;

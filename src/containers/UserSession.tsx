import React from 'react';

import { useUserSessionContainer } from './useUserSessionContainer';

interface Props {
  children: React.ReactNode;
}

const UserSession: React.FC<Props> = ({ children }) => {
  const {
    loading,
    error,
    data,
    setUserSession,
    setUserSessionLoading
  } = useUserSessionContainer();

  if (loading) {
    setUserSessionLoading(loading);
  }

  if (error || !data) {
    console.error("인증 실패");
  }

  if (data) {
    setUserSession(data.myUser);
  }

  return <>{children}</>;
};

export default React.memo(UserSession);

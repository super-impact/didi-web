import React, { useEffect } from 'react';
import { getAccessToken } from 'utils/authTokenStore';

import { useUserSessionContainer } from './useUserSessionContainer';

interface Props {
  children: React.ReactNode;
}

const UserSession: React.FC<Props> = ({ children }) => {
  const {
    loading,
    error,
    data,
    getMyUser,
    setUserSession,
    setUserSessionLoading
  } = useUserSessionContainer();

  useEffect(() => {
    if (getAccessToken()) {
      getMyUser();
    }
  }, [getMyUser]);

  if (loading) {
    setUserSessionLoading(loading);
  }

  if (error || !data) {
    return <></>;
  }

  if (data) {
    setUserSession(data.myUser);
    setUserSessionLoading(false);
  }

  return <>{children}</>;
};

export default React.memo(UserSession);

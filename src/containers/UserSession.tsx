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
    setIsSessionLoading
  } = useUserSessionContainer();

  useEffect(() => {
    if (getAccessToken()) {
      getMyUser();
    }
  }, [getMyUser]);

  if (loading) {
    setIsSessionLoading(loading);
    return <>{children}</>;
  }

  if (error) {
    return <h3>error: {error.message}</h3>;
  }

  if (data) {
    setUserSession(data.myUser);
  }

  setIsSessionLoading(false);

  return <>{children}</>;
};

export default React.memo(UserSession);

import { RootContext } from 'context/rootContext';
import React, { useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../components/organisms/Header';

const HeaderContainer: React.FC = () => {
  const rootContext = useContext(RootContext);
  const history = useHistory();

  const goToAuthStartPage = useCallback(() => {
    history.push("/auth/start");
  }, [history]);

  const { authorized, userSession, isSessionLoading } = rootContext;

  return (
    <Header
      onClickAuthStartButton={goToAuthStartPage}
      authorized={authorized}
      userSession={userSession}
      isSessionLoading={isSessionLoading}
    />
  );
};

export default React.memo(HeaderContainer);

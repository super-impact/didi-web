import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../components/organisms/Header';

const HeaderContainer: React.FC = () => {
  const history = useHistory();

  const goToAuthStartPage = useCallback(() => {
    history.push("/auth/start");
  }, [history]);

  return (
    <>
      <Header onClickAuthStartButton={goToAuthStartPage} />
    </>
  );
};

export default React.memo(HeaderContainer);

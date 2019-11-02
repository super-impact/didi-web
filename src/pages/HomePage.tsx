import React from 'react';

import MainTemplate from '../components/templates/MainTemplate';
import HeaderContainer from '../containers/HeaderContainer';

const HomePage: React.FC = () => {
  // 여기서 상태 관리를 해야한다는 말인가 ? 하장

  return <MainTemplate header={<HeaderContainer />} />;
};

export default HomePage;

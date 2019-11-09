import React from 'react';

import MainTemplate from '../components/templates/MainTemplate';
import { HeaderContainer, PostContainer } from '../containers';

const HomePage: React.FC = () => {
  return <MainTemplate header={<HeaderContainer />} main={<PostContainer />} />;
};

export default HomePage;

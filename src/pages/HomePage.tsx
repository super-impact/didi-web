import PostAddButtonAndDescription from 'components/molecules/PostAddButtonAndDescription';
import MainTemplate from 'components/templates/MainTemplate';
import { HeaderContainer, PostContainer } from 'containers';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <MainTemplate
      header={<HeaderContainer />}
      main={<PostContainer />}
      aside={<PostAddButtonAndDescription />}
    />
  );
};

export default HomePage;

import PostAddButtonAndDescription from 'components/molecules/PostAddButtonAndDescription';
import MainTemplate from 'components/templates/MainTemplate';
import { HeaderContainer, PostContainer } from 'containers';
import React from 'react';
import { SiteHeadManager } from 'utils/components';

const HomePage: React.FC = () => {
  return (
    <>
      <SiteHeadManager title="DIDI - 콘텐츠 공유를 통한 지식 공유" />
      <MainTemplate
        header={<HeaderContainer />}
        main={<PostContainer />}
        aside={<PostAddButtonAndDescription />}
      />
    </>
  );
};

export default HomePage;

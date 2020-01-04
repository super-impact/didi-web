import LayoutWithHeader from 'components/templates/LayoutWithHeader';
import { HeaderContainer } from 'containers';
import React from 'react';
import { SiteHeadManager } from 'utils/components';

const ContentSharePage: React.FC = () => {
  return (
    <>
      <SiteHeadManager title="콘텐츠 공유" />
      <LayoutWithHeader header={<HeaderContainer />}>
        Context Share
      </LayoutWithHeader>
    </>
  );
};

export default React.memo(ContentSharePage);

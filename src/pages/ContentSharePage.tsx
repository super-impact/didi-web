import LayoutWithHeader from 'components/templates/LayoutWithHeader';
import { FullSection } from 'components/templates/ResponsiveSection';
import { HeaderContainer } from 'containers';
import ContentShareContainer from 'containers/ContentShareContainer';
import React from 'react';
import { SiteHeadManager } from 'utils/components';

const ContentSharePage: React.FC = () => {
  return (
    <>
      <SiteHeadManager title="콘텐츠 공유" />
      <LayoutWithHeader header={<HeaderContainer />}>
        <FullSection>{<ContentShareContainer />}</FullSection>
      </LayoutWithHeader>
    </>
  );
};

export default React.memo(ContentSharePage);

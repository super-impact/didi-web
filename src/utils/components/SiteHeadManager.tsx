import React from 'react';
import Helmet from 'react-helmet';

interface Props {
  title: string;
}

const SiteHeadManager: React.FC<Props> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default React.memo(SiteHeadManager);

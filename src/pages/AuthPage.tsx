import AuthTemplate from 'components/templates/AuthTemplate';
import React from 'react';
import { SiteHeadManager } from 'utils/components';

const AuthPage: React.FC = () => {
  return (
    <>
      <SiteHeadManager title="DIDI - 시작하기" />
      <AuthTemplate />
    </>
  );
};

export default React.memo(AuthPage);

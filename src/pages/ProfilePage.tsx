import MainTemplate from 'components/templates/MainTemplate';
import { UserProfileTemplate } from 'components/templates/UserProfileTemplate';
import { HeaderContainer } from 'containers';
import React from 'react';
import { SiteHeadManager } from 'utils/components';

// 프로필 페이지 구성
// 유저 정보 ( 수정 가능 ), 로그아웃 버튼
// 좋아요한 게시글

const ProfilePage: React.FC = () => {
  return (
    <>
      <SiteHeadManager title="마이 페이지" />
      <MainTemplate
        header={<HeaderContainer />}
        main={<UserProfileTemplate />}
      />
    </>
  );
};

export default React.memo(ProfilePage);

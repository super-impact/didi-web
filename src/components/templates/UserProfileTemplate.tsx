import { ProfileHeader } from 'components/organisms/Header/ProfileHeader';
import { LikePostList } from 'components/organisms/PostList/LikePostList';
import { useProfileContainer } from 'containers';
import React from 'react';
import styled from 'styled-components';

interface Props {}

export const UserProfileTemplate: React.FC<Props> = React.memo(() => {
  const { loading, error, data } = useProfileContainer();

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>사용자 프로필 조회 에러가 발생했습니다.</div>;
  }

  if (!data) {
    return <div>유저 프로필을 찾을 수 없습니다</div>;
  }

  const { user } = data;

  return (
    <Container>
      <ProfileHeaderWrapper>
        <ProfileHeader user={user} />
      </ProfileHeaderWrapper>
      <LikePostWrapper>
        <LikePostList likePost={user} />
      </LikePostWrapper>
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
`;

const ProfileHeaderWrapper = styled.div`
  margin-bottom: 32px;
`;

const LikePostWrapper = styled.div`
  width: 100%;
`;

import Caption1 from 'components/atoms/Typography/Caption1';
import { ContentDetailWrite, ContentLinkShare } from 'components/organisms/Content';
import { useCheckDuplicationContentLink } from 'hooks/useCheckDuplicationContentLink';
import { useCreatePost } from 'hooks/useCreatePost';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const ContentShareContainer: React.FC = () => {
  const [contentLink, setContentLink] = useState<string | null>(null);

  const {
    checkDuplicationContentLink,
    checkDuplicationContentLinkResponse
  } = useCheckDuplicationContentLink();

  const { createPost, createPostResponse } = useCreatePost();

  const { replace } = useHistory();

  const cehckValidContentLink = useCallback(
    async contentLink => {
      setContentLink(contentLink);
      checkDuplicationContentLink({
        variables: { contentLink }
      });
    },
    [checkDuplicationContentLink]
  );

  const addContent = useCallback(
    (
      title: string,
      description: string,
      contentLink: string,
      topics: { name: string }[]
    ) => {
      createPost({
        variables: {
          title,
          description,
          topics,
          contentLink
        }
      });
    },
    [createPost]
  );

  if (checkDuplicationContentLinkResponse.error) {
    return <Caption1>에러 발생</Caption1>;
  }

  const isContentDescriptionStep =
    checkDuplicationContentLinkResponse.data &&
    !checkDuplicationContentLinkResponse.data.checkDuplicationContentLink;

  if (isContentDescriptionStep && contentLink) {
    const { data, loading, error } = createPostResponse;

    if (data && data.createPost) {
      replace(`/posts/${data.createPost.id}`);
      return <></>;
    }

    const errorMessage =
      error && "콘텐츠를 공유할 수 없습니다 잠시 후 다시 시도해주세요";

    return (
      <Container>
        <ContentDetailWrite
          contentLink={contentLink}
          onSubmit={addContent}
          loading={loading}
          errorMessage={errorMessage}
        />
      </Container>
    );
  }

  const { data, loading } = checkDuplicationContentLinkResponse;

  return (
    <Container>
      <ContentLinkShare
        loading={loading}
        errorMessage={
          (data &&
            data.checkDuplicationContentLink &&
            "존재하는 콘텐츠 링크입니다") ||
          undefined
        }
        onSubmit={cehckValidContentLink}
      />
    </Container>
  );
};

export default React.memo(ContentShareContainer);

const Container = styled.div`
  width: 100%;
`;

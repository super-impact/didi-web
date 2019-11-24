import Breadcrumb from 'components/organisms/Breadcrumb';
import PostAside from 'components/organisms/PostAside';
import PostBottomFix from 'components/organisms/PostBottomFix';
import PostContent from 'components/organisms/PostContent';
import PostProfile from 'components/organisms/PostProfile';
import PostDetailTemplate from 'components/templates/PostDetailTemplate';
import { HeaderContainer, usePostDetail } from 'containers';
import React from 'react';
import { SiteHeadManager } from 'utils/components';

const PostDetailPage: React.FC = () => {
  const { loading, error, data } = usePostDetail();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  if (!data || !data.post) {
    return <div>no-data</div>;
  }

  return (
    <>
      <SiteHeadManager title={data.post.title} />
      <PostDetailTemplate
        header={<HeaderContainer />}
        breadcrumb={<Breadcrumb />}
        contentHeader={<PostProfile post={data.post} />}
        contentMain={<PostContent post={data.post} />}
        contentAside={<PostAside post={data.post} />}
        bottomFix={<PostBottomFix post={data.post} />}
      />
    </>
  );
};

export default React.memo(PostDetailPage);

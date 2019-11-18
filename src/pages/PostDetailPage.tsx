import React from 'react';

import PostDetailTemplate from '../components/templates/PostDetailTemplate';
import { HeaderContainer, PostDetailContainer } from '../containers';

const PostDetailPage: React.FC = () => {
  return (
    <PostDetailTemplate
      header={<HeaderContainer />}
      main={<PostDetailContainer />}
      aside={<h3>Hello</h3>}
    />
  );
};

export default React.memo(PostDetailPage);

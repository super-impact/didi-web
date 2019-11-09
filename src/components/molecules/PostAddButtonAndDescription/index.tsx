import React from 'react';
import styled from 'styled-components';

import Button, { ButtonBackgroundColor, ButtonBorderColor, ButtonTextColor } from '../../atoms/Button';
import Body1 from '../../atoms/Typography/Body1';

const PostAddButtonAndDescription: React.FC = () => {
  return (
    <Layout>
      <Header>
        <Body1 fontWeight="bold">콘텐츠 공유하기</Body1>
      </Header>
      <ContentLayout>
        <StyledButton
          text="10초안에 공유하기"
          onClick={() => alert("share button clicked")}
          color={ButtonTextColor.WHITE}
          backgroundColor={ButtonBackgroundColor.GREEN}
          borderColor={ButtonBorderColor.GREEN}
        />
      </ContentLayout>
    </Layout>
  );
};

const Layout = styled.div``;

const Header = styled.div`
  margin-bottom: 10px;
`;

const ContentLayout = styled.div`
  padding: 20px;
  border-radius: 3px;
  background-color: white;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

export default React.memo(PostAddButtonAndDescription);

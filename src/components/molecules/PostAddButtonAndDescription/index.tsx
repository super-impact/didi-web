import Button, { ButtonBackgroundColor, ButtonBorderColor, ButtonTextColor } from 'components/atoms/Button';
import Body1 from 'components/atoms/Typography/Body1';
import Caption1 from 'components/atoms/Typography/Caption1';
import React from 'react';
import styled from 'styled-components';

const PostAddButtonAndDescription: React.FC = () => {
  return (
    <Layout>
      <Header>
        <Body1 fontWeight="bold">콘텐츠 공유하기</Body1>
      </Header>
      <ContentLayout>
        <StyledButton
          text={
            <Caption1 fontWeight="bold" color="white">
              10초안에 공유하기
            </Caption1>
          }
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

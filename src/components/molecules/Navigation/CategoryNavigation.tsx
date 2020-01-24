import React from 'react';
import styled, { css } from 'styled-components';

const NAVIGATION_ITEMS = [
  {
    id: "category-1",
    name: "전체",
    active: true
  },
  {
    id: "category-2",
    name: "개발",
    active: false
  },
  {
    id: "category-3",
    name: "디자인",
    active: false
  },
  {
    id: "category-4",
    name: "비즈니스",
    active: false
  }
];

const CategoryNavigation: React.FC = () => {
  return (
    <Container>
      {NAVIGATION_ITEMS.map(item => {
        return (
          <ItemContainer>
            <Item key={item.id} isActive={item.active}>
              {item.name}
            </Item>
            {item.active ? <ActiveBar /> : <></>}
          </ItemContainer>
        );
      })}
    </Container>
  );
};

export default React.memo(CategoryNavigation);

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  :last-child {
    margin-right: 0;
  }
`;

const Item = styled.p<{ isActive?: boolean }>`
  color: #6f6f6f;
  cursor: pointer;
  font-size: 18px;
  margin: 0;

  ${props =>
    props.isActive &&
    css`
      color: #232323;
    `}
`;

const ActiveBar = styled.div`
  width: 80%;
  height: 4px;
  background-color: #17487f;
  border-radius: 3px;
  display: block
  margin: 0 auto;
  margin-top: 4px;
`;

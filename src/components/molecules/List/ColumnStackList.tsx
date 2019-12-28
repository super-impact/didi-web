import React from 'react';
import styled from 'styled-components';
import { mapArray } from 'utils/array';

const GenericTypeReactMemo: <T>(c: T) => T = React.memo;

interface Props<T> {
  items: T[] | ReadonlyArray<T>;
  renderItem: (
    item: T,
    index: number,
    arr: T[] | ReadonlyArray<T>
  ) => React.ReactNode;
}

const ColumnStackList = <T extends Object>(props: Props<T>) => {
  const { items, renderItem } = props;

  return (
    <Container>
      {mapArray(items, (item, index, arr) => (
        <ItemWrapper key={index}>{renderItem(item, index, arr)}</ItemWrapper>
      ))}
    </Container>
  );
};

export default GenericTypeReactMemo(ColumnStackList);

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ItemWrapper = styled.div`
  margin-bottom: 12px;
`;

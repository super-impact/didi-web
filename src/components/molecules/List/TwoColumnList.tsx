import React from 'react';
import styled from 'styled-components';
import { BreakPoints } from 'utils';
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

const TwoColumnList = <T extends Object>(props: Props<T>) => {
  const { items, renderItem } = props;

  return (
    <Container>
      {mapArray(items, (item, index, arr) => (
        <ItemWrapper key={index}>{renderItem(item, index, arr)}</ItemWrapper>
      ))}
    </Container>
  );
};

export default GenericTypeReactMemo(TwoColumnList);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${BreakPoints.media.mobile`
    flex-direction: column;
  `}
`;

const ItemWrapper = styled.div`
  // flex: grow, shrink, basis (width)
  flex: 0 1 calc(50% - 8px);
  margin-bottom: 16px;

  ${BreakPoints.media.mobile`
    flex: 1;
  `}
`;

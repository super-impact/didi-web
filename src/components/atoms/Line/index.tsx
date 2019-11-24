import React from 'react';
import styled, { css } from 'styled-components';

type StyledProps = {
  marginTop?: string;
  marginBottom?: string;
};

type Props = StyledProps;

const Line: React.FC<Props> = ({ marginTop, marginBottom }) => {
  return <Layout marginTop={marginTop} marginBottom={marginBottom} />;
};

export default React.memo(Line);

const Layout = styled.div<StyledProps>`
  width: 100%;
  height: 1px;
  background-color: #e8e8e8;

  ${props =>
    props.marginTop
      ? css`
          margin-top: ${props.marginTop};
        `
      : css`
          margin-top: 12px;
        `}

  ${props =>
    props.marginBottom
      ? css`
          margin-bottom: ${props.marginBottom};
        `
      : css`
          margin-bottom: 12px;
        `}
`;

import React from 'react';
import styled, { css } from 'styled-components';
import { BreakPoints } from 'utils';

type Props = {
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

const TextButton: React.FC<Props> = props => {
  const { children, loading, ...restProps } = props;

  return (
    <Button loading={loading} {...restProps}>
      {children}
    </Button>
  );
};

export default React.memo(TextButton);

const Button = styled.button<{ loading?: boolean }>`
  display: flex;
  justify-content: center;
  outline: none;
  border: 1px solid #17487f;
  background-color: #17487f;
  color: white;
  font-weight: bold;
  border-radius: 3px;
  padding: 12px;
  cursor: pointer;
  width: 140px;

  :disabled {
    background-color: #f3f3f3;
    border: 1px solid #f3f3f3;
    cursor: not-allowed;
  }

  :hover:enabled {
    background-color: #315288;
    border: 1px solid #315288;
  }

  ${props =>
    props.loading &&
    css`
      background-color: #f3f3f3 !important;
      border: 1px solid #f3f3f3 !important;
      cursor: not-allowed;
    `}

  ${BreakPoints.media.tablet`
    width: 140px;
  `}
`;

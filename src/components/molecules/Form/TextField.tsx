import React, { HTMLProps } from 'react';
import styled, { css } from 'styled-components';

type Props = { isError?: boolean } & HTMLProps<HTMLInputElement>;

const TextField: React.FC<Props> = props => {
  const { isError, ref, as, ...restProps } = props;

  return <Input isError={isError} {...restProps} type="text" />;
};

export default React.memo(TextField);

const Input = styled.input<{ isError?: boolean }>`
  width: 100%;
  padding: 14px;
  border-radius: 3px;
  font-size: 14px;
  outline: none;
  border: 1px solid #eee;

  ${props =>
    props.isError &&
    css`
      border: 1px solid #e32249;
    `}
`;

import React, { HTMLProps } from 'react';
import styled, { css } from 'styled-components';

import { ErrorMessage } from '.';

type Props = { errorMessage?: string } & HTMLProps<HTMLInputElement>;

const TextField: React.FC<Props> = props => {
  const { errorMessage, ref, as, ...restProps } = props;

  return (
    <>
      <Input isError={!!errorMessage} {...restProps} type="text" />
      {errorMessage && <StyledErrorMessage message={errorMessage} />}
    </>
  );
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

const StyledErrorMessage = styled(ErrorMessage)`
  margin-top: 8px;
`;

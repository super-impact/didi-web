import React from 'react';
import styled from 'styled-components';

interface Props {
  to: string;
  children: React.ReactNode;
  target?: string;
}

const LinkBlock: React.FC<Props> = props => {
  const { to, target, children } = props;

  return (
    <Anchor href={to} target={target || "_self"}>
      {children}
    </Anchor>
  );
};

export default React.memo(LinkBlock);

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`;

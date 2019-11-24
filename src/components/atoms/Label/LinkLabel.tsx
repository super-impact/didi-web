import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Label, { LabelProps } from './Label';

interface Props extends LabelProps {
  to: string;
  className?: string;
}

const LinkLabel: React.FC<Props> = ({ to, text, className }) => {
  return (
    <StyledLink to={to} className={className}>
      <StyledLabel text={text} />
    </StyledLink>
  );
};

export default LinkLabel;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledLabel = styled(Label)`
  :hover {
    background-color: #ebebeb;
  }
`;

import React from 'react';
import styled, { css, FlattenInterpolation, ThemedStyledProps } from 'styled-components';

import { body1, body2, caption1, caption2, heading1, heading2, TextStyleProperties } from './styles';

// Headling1 = 22px;
// Headling2 = 20px
// Body1 = 18px;
// Body2 = 16px;
// Caption1 = 14px;
// Caption2 = 12px;

export enum TYPOGRAPHY_TYPE {
  Heading1 = "h3",
  Heading2 = "h4",
  Body1 = "p",
  Body2 = "p",
  Caption1 = "span",
  Caption2 = "span"
}

const TYPOGRAPHY_CSS_BY_TYPE: {
  [key in TYPOGRAPHY_TYPE]: FlattenInterpolation<
    ThemedStyledProps<TextStyleProperties, any>
  >;
} = {
  [TYPOGRAPHY_TYPE.Heading1]: heading1,
  [TYPOGRAPHY_TYPE.Heading2]: heading2,
  [TYPOGRAPHY_TYPE.Body1]: body1,
  [TYPOGRAPHY_TYPE.Body2]: body2,
  [TYPOGRAPHY_TYPE.Caption1]: caption1,
  [TYPOGRAPHY_TYPE.Caption2]: caption2
};

interface OwnProps {
  type: TYPOGRAPHY_TYPE;
}

export interface TypographyProps {
  className?: string;
  color?: string;
  textAlign?: string;
  fontWeight?: string;
  children?: React.ReactNode;
}

type Props = OwnProps & TypographyProps;

const Typography: React.FC<Props> = props => {
  const { type, children, ...restProps } = props;

  return (
    <TextElement as={type} type={type} {...restProps}>
      {children}
    </TextElement>
  );
};

const customStyle = css<{ textAlign?: string }>`
  margin: 0;
  ${props => props.textAlign && `text-align: ${props.textAlign}`};
`;

const TextElement = styled.div<Props>`
  ${props => TYPOGRAPHY_CSS_BY_TYPE[props.type]}
  ${customStyle}
`;

export default React.memo(Typography);

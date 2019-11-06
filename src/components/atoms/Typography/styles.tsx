import { css } from 'styled-components';

export interface TextStyleProperties {
  fontWeight?: string | number;
  color?: string;
}

const slate50 = "#232323";

export const display1 = css<TextStyleProperties>`
  font-size: 48px;
  line-height: 24px;
  font-weight: ${props => props.fontWeight || "normal"};
  color: ${props => props.color || slate50};
  margin: 0;
`;

export const display2 = css<TextStyleProperties>`
  font-size: 32px;
  line-height: 24px;
  font-weight: ${props => props.fontWeight || "normal"};
  color: ${props => props.color || slate50};
  margin: 0;
`;

export const heading1 = css<TextStyleProperties>`
  font-size: 22px;
  line-height: 24px;
  font-weight: ${props => props.fontWeight || "normal"};
  color: ${props => props.color || slate50};
  margin: 0;
`;

export const heading2 = css<TextStyleProperties>`
  font-size: 20px;
  line-height: 24px;
  font-weight: ${props => props.fontWeight || "normal"};
  color: ${props => props.color || slate50};
  margin: 0;
`;

export const body1 = css<TextStyleProperties>`
  font-size: 18px;
  line-height: 24px;
  font-weight: ${props => props.fontWeight || "normal"};
  color: ${props => props.color || slate50};
  margin: 0;
`;

export const body2 = css<TextStyleProperties>`
  font-size: 16px;
  line-height: 24px;
  font-weight: ${props => props.fontWeight || "normal"};
  color: ${props => props.color || slate50};
  margin: 0;
`;

export const caption1 = css<TextStyleProperties>`
  font-size: 14px;
  line-height: 20px;
  font-weight: ${props => props.fontWeight || "normal"};
  color: ${props => props.color || slate50};
  margin: 0;
`;

export const caption2 = css<TextStyleProperties>`
  font-size: 12px;
  line-height: 20px;
  font-weight: ${props => props.fontWeight || "normal"};
  color: ${props => props.color || slate50};
  margin: 0;
`;

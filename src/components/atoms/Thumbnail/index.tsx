import React from 'react';
import styled from 'styled-components';

interface Props {
  imageURL: string;
  width: string;
  height: string;
}

const Thumbnail: React.FC<Props> = ({ imageURL, width, height }) => {
  return <Image src={imageURL} width={width} height={height} />;
};

const Image = styled.img<{ width: string; height: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
`;

export default React.memo(Thumbnail);

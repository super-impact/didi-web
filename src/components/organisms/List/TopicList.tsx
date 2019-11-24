import { gql } from 'apollo-boost';
import React from 'react';
import styled from 'styled-components';

import { LinkLabel } from '../../atoms/Label';
import { TopicFields } from './__generated__/TopicFields';

export const TopicFragments = {
  fields: gql`
    fragment TopicFields on Topic {
      name
    }
  `
};

interface Props {
  topics: TopicFields[];
}

export const TopicList: React.FC<Props> = React.memo(({ topics }) => {
  return (
    <Layout>
      {topics.map(topic => {
        return (
          <StyledLinkLabel to={`/topics/${topic.name}`} text={topic.name} />
        );
      })}
    </Layout>
  );
});

const Layout = styled.div`
  display: flex;
`;

const StyledLinkLabel = styled(LinkLabel)`
  margin-right: 12px;

  :last-child {
    margin-right: 0;
  }
`;

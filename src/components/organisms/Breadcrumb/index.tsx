import Caption1 from 'components/atoms/Typography/Caption1';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import withBreadcrumbs, { InjectedProps } from 'react-router-breadcrumbs-hoc';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const routes = [
  { path: "/", breadcrumb: "홈" },
  { path: "/posts/:postId", breadcrumb: "상세 콘텐츠" }
];

type Props = InjectedProps<any>;

const Breadcrumbs: React.FC<Props> = ({ breadcrumbs }) => {
  return (
    <Layout>
      {breadcrumbs.map(({ breadcrumb, match }, index) => {
        const isLast = index === breadcrumbs.length - 1;

        if (match.url === "/posts") {
          return <></>;
        }

        return (
          <StyledLink key={match.url} to={match.url}>
            <Caption1 color={isLast ? "#232323" : "#6f6f6f"}>
              {breadcrumb}
            </Caption1>
            {!isLast && <MdKeyboardArrowRight size={16} color="#6f6f6f" />}
          </StyledLink>
        );
      })}
    </Layout>
  );
};

export default withBreadcrumbs(routes)(Breadcrumbs);

const Layout = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import {
  CheckDuplicationContentLink,
  CheckDuplicationContentLinkVariables,
} from './__generated__/CheckDuplicationContentLink';

const CHECK_DUPLICATION_CONTENT_LINK = gql`
  mutation CheckDuplicationContentLink($contentLink: String!) {
    checkDuplicationContentLink(input: { contentLink: $contentLink })
  }
`;

export function useCheckDuplicationContentLink() {
  const [checkDuplicationContentLink, { data, error, loading }] = useMutation<
    CheckDuplicationContentLink,
    CheckDuplicationContentLinkVariables
  >(CHECK_DUPLICATION_CONTENT_LINK);

  return {
    checkDuplicationContentLink,
    data,
    error,
    loading
  };
}

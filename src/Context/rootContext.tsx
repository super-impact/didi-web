import { UserSessionFragmentFields } from 'graphql/fragments/__generated__/UserSessionFragmentFields';
import React from 'react';

export interface RootContextType {
  userSession: UserSessionFragmentFields | null;
  isSessionLoading: boolean;
}

export const RootContext = React.createContext<RootContextType>({
  userSession: null,
  isSessionLoading: true
});

export const RootContextProvider = RootContext.Provider;
export const RootContextConsumer = RootContext.Consumer;

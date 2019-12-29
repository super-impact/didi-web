import { UserSessionFragmentFields } from 'graphql/fragments/__generated__/UserSessionFragmentFields';
import React from 'react';

export interface RootContextType {
  userSession: UserSessionFragmentFields | null;
  authorized: boolean;
  isSessionLoading: boolean;
  setUserSession: (userSession: UserSessionFragmentFields) => void;
  setAuthorized: (authorized: boolean) => void;
  setIsSessionLoading: (loading: boolean) => void;
}

export const RootContext = React.createContext<RootContextType>({
  userSession: null,
  authorized: false,
  isSessionLoading: true,
  setUserSession: () => {},
  setAuthorized: () => {},
  setIsSessionLoading: () => {}
});

export const RootContextProvider = RootContext.Provider;
export const RootContextConsumer = RootContext.Consumer;

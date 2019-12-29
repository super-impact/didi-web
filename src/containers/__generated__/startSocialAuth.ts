/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: StartSocialAuth
// ====================================================

export interface StartSocialAuth_startSocialAuth_user {
  __typename: "User";
  id: string;
  email: string;
  displayName: string;
  profileImageUrl: string;
  createdAt: any;
}

export interface StartSocialAuth_startSocialAuth {
  __typename: "Auth";
  user: StartSocialAuth_startSocialAuth_user;
  accessToken: string;
  refreshToken: string;
}

export interface StartSocialAuth {
  startSocialAuth: StartSocialAuth_startSocialAuth;
}

export interface StartSocialAuthVariables {
  provider: string;
  oAuthCode: string;
}

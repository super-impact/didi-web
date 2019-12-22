import { getBrowserStore, setBrowserStore } from './browserStore';

const ACCESS_TOKEN_KEY = "access-token";
const REFRESH_TOKEN_KEY = "refresh-token";

export function getAccessToken(): string | null {
  const accessToken = getBrowserStore(ACCESS_TOKEN_KEY);

  if (!accessToken) {
    return null;
  }

  return accessToken as string;
}

export function setAccessToken(accessToken: string) {
  setBrowserStore(ACCESS_TOKEN_KEY, accessToken);
}

export function getRefreshToken(): string | null {
  const refreshToken = getBrowserStore(REFRESH_TOKEN_KEY);

  if (!refreshToken) {
    return null;
  }

  return refreshToken as string;
}

export function setRefreshToken(refreshToken: string) {
  setBrowserStore(REFRESH_TOKEN_KEY, refreshToken);
}

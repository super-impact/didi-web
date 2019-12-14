const store = localStorage || {};

export function setBrowserStore(key: string, object: any) {
  store[key] = typeof object === "string" ? object : JSON.stringify(object);
}

export function getBrowserStore(key: string) {
  if (!store[key]) {
    return null;
  }

  const value = store[key];

  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
}

export function removeBrowserStore(key: string) {
  if (localStorage) {
    return localStorage.removeItem(key);
  }

  delete store[key];
}

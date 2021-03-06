import fetch from 'cross-fetch';

export async function fetchOrThrow(
  url: string,
  // eslint-disable-next-line no-undef
  init?: RequestInit,
): Promise<Response> {
  const res = await fetch(url, init);
  if (!(res.status < 400)) {
    throw new Error(`failed to fetch: (${res.status}) ${res.statusText}, from url: ${res.url}`);
  }
  return res;
}

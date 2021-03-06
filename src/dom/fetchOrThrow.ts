const fetch = require('cross-fetch');

export async function fetchOrThrow(
  url: string,
  // eslint-disable-next-line no-undef
  init?: RequestInit,
): Promise<Response> {
  const res = await fetch(url, init);
  if (!(res.status < 400)) {
    console.log(`failed to fetch: (${res.status}) ${res.statusText}, from url: ${res.url}`);
    throw new Error(`failed to fetch: (${res.status}) ${res.statusText}, from url: ${res.url}`);
  }
  return res;
}

export const baseURL =
  process.env.NEXT_PUBLIC_RUN_MODE === 'development'
    ? process.env.NEXT_PUBLIC_API_URL_DEV
    : process.env.NEXT_PUBLIC_API_URL_PROD;

export default function api(
  path: string,
  init?: RequestInit,
): Promise<Response> {
  return fetch(baseURL + path, init);
}

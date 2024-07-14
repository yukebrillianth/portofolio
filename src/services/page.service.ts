import api from '@/lib/api';

export async function getSinglePage(slug: string) {
  const res = await api('', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetSinglePage($slug: String) {
          page(where: { slug: $slug }) {
            title
            seo {
              keywords
              description
              title
              image {
                url(transformation: { document: { output: { format: webp } } })
              }
            }
          }
        }
      `,
      operationName: 'GetSinglePage',
      variables: {
        slug,
      },
    }),
    cache: 'force-cache',
    next: {
      tags: ['pages'],
    },
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getSiteSocials() {
  const res = await api('', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetSiteSocials {
          socials {
            url
          }
        }
      `,
      operationName: 'GetSiteSocials',
    }),
    cache: 'force-cache',
    next: {
      tags: ['socials'],
    },
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

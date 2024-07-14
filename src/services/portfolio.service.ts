import api from '@/lib/api';

export async function getPortfolios() {
  const res = await api('', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query getPortfolios {
          portfolios(where: { public: true }, orderBy: date_DESC) {
            id
            title
            images {
              id
              url(transformation: { document: { output: { format: webp } } })
              width
              height
              fileName
            }
          }
        }
      `,
      operationName: 'getPortfolios',
    }),
    cache: 'force-cache',
    next: {
      tags: ['portfolios'],
    },
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

// Don't add NODE_ENV into T3 Env, it changes the tree-shaking behavior
export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_RUN_MODE: z
      .enum(['development', 'production'])
      .default('production'),
    NEXT_PUBLIC_API_URL_DEV: z.string().url(),
    NEXT_PUBLIC_API_URL_PROD: z.string().url(),
    NEXT_PUBLIC_APP_URL: z.string().url().optional(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_RUN_MODE: process.env.NEXT_PUBLIC_RUN_MODE,
    NEXT_PUBLIC_API_URL_DEV: process.env.NEXT_PUBLIC_API_URL_DEV,
    NEXT_PUBLIC_API_URL_PROD: process.env.NEXT_PUBLIC_API_URL_PROD,
  },
});

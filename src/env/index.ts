import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
    DB_URL: z.string(),
    PORT: z.number().default(3030),
});

const _env = envSchema.safeParse(process.env);

if(_env.success === false) {
    console.error(
        'Environment Infos Invalid!', 
        _env.error.format()
    );

    throw new Error('Environment Infos Invalid!');
}

export const env = _env.data;

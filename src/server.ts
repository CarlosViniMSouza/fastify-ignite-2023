import fastify from 'fastify';
import { knex } from './database';

const app = fastify();

app.get('/hello', async () => {
    const tableTest = await knex('sqlite_schema').select('*');

    return tableTest;
});

app.listen({
    port: 3030,
})
.then(() => {
    console.log('Server Running!');
});
